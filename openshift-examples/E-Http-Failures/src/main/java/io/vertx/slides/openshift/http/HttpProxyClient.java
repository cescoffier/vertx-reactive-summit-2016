package io.vertx.slides.openshift.http;

import io.vertx.circuitbreaker.CircuitBreaker;
import io.vertx.circuitbreaker.CircuitBreakerOptions;
import io.vertx.core.Vertx;
import io.vertx.core.http.HttpClient;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.handler.CorsHandler;
import io.vertx.servicediscovery.ServiceDiscovery;
import io.vertx.servicediscovery.kubernetes.KubernetesServiceImporter;
import io.vertx.servicediscovery.types.HttpEndpoint;

public class HttpProxyClient {

  public static void main(String[] args) {
    Vertx vertx = Vertx.vertx();
    Router router = Router.router(vertx);

    ServiceDiscovery discovery = ServiceDiscovery.create(vertx);
    discovery.registerServiceImporter(new KubernetesServiceImporter(),
        new JsonObject().put("namespace",
            System.getenv("OPENSHIFT_BUILD_NAMESPACE")));

    CircuitBreaker cb = CircuitBreaker.create("circuit-breaker", vertx, new CircuitBreakerOptions()
        .setTimeout(1000)
        .setMaxFailures(3)
        .setResetTimeout(5000)
        .setFallbackOnFailure(true));

    router.route().handler(CorsHandler.create("*"));
    router.get("/").handler(rc -> {
      handlerRootRequest(discovery, rc);
    });
    router.get("/cb").handler(rc -> {
      handlerCBRequest(discovery, cb, rc);
    });


    vertx.createHttpServer()
        .requestHandler(router::accept)
        .listen(8080, result -> {
          if (result.failed()) {
            System.out.println("D'oh ! Can't start " +
                "the HTTP server");
          } else {
            System.out.println("HTTP server started " +
                "on port " + result.result().actualPort());
          }
        });
  }

  private static void handlerCBRequest(ServiceDiscovery discovery, CircuitBreaker cb, RoutingContext rc) {
    cb.executeWithFallback(future -> {
          HttpEndpoint.getClient(discovery,
              new JsonObject().put("name", "vertx-http-server"), result -> {
                if (result.failed()) {
                  future.fail("No matching services");
                } else {
                  HttpClient client = result.result();
                  client.get("/", response -> {
                    response.bodyHandler(buffer -> {
                      future.complete("Hello " + buffer.toString());
                    });
                  })
                      .exceptionHandler(future::fail)
                      .end();
                }
              });
        },
        t -> "Sorry... "
            + t.getMessage() + " (" + cb.state() + ")"
    )
        .setHandler(content ->
            rc.response().end(content.result()));
  }

  private static void handlerRootRequest(ServiceDiscovery discovery, RoutingContext rc) {
    HttpEndpoint.getClient(discovery,
        new JsonObject().put("name", "vertx-http-server"), result -> {
          if (result.failed()) {
            rc.response().end("D'oh no matching service");
          } else {
            HttpClient client = result.result();
            client.get("/", response -> {
              response
                  .exceptionHandler(t -> {
                    rc.response().end("Sorry... "
                        + t.getMessage());
                  })
                  .bodyHandler(buffer -> {
                    rc.response().end("Hello "
                        + buffer.toString());
                  });
            })
                .setTimeout(3000)
                .exceptionHandler(t -> {
                  rc.response().end("Sorry... "
                      + t.getMessage());
                }).end();
          }
        });
  }

}
