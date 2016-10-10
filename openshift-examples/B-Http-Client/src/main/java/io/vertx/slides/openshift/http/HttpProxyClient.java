package io.vertx.slides.openshift.http;

import io.vertx.core.Vertx;
import io.vertx.core.http.HttpClient;
import io.vertx.core.http.HttpServerResponse;
import io.vertx.core.json.JsonObject;
import io.vertx.servicediscovery.ServiceDiscovery;
import io.vertx.servicediscovery.kubernetes.KubernetesServiceImporter;
import io.vertx.servicediscovery.types.HttpEndpoint;

/**
 * HTTP application using Vert.x web calling the first endpoint (A)
 * Port: 8082
 * Cors enabled
 * <p>
 * "Hello " + buffer
 *
 * @author <a href="http://escoffier.me">Clement Escoffier</a>
 */
public class HttpProxyClient {

  public static void main(String[] args) {

    Vertx vertx = Vertx.vertx();
    ServiceDiscovery discovery = ServiceDiscovery.create(vertx);
    discovery.registerServiceImporter(new KubernetesServiceImporter(),
        new JsonObject().put("namespace", System.getenv("OPENSHIFT_BUILD_NAMESPACE")));

    vertx.createHttpServer()
        .requestHandler(req -> {
          HttpServerResponse resp = req.response()
              .putHeader("Access-Control-Allow-Origin", "*");

          HttpEndpoint.getClient(discovery,
              new JsonObject().put("name", "vertx-http-server"),
              result -> {
            if (result.failed()) {
              resp.end("D'oh no matching service");
            } else {
              HttpClient client = result.result();
              client.getNow("/", response -> {
                response.bodyHandler(buffer -> {
                  resp.end("Hello " + buffer.toString());
                });
              });
            }
          });
        })
        .listen(8080);
  }

}
