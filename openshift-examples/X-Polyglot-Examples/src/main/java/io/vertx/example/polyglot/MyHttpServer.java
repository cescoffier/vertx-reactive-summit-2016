package io.vertx.example.polyglot;

import io.vertx.core.AbstractVerticle;

/**
 * @author <a href="http://escoffier.me">Clement Escoffier</a>
 */
public class MyHttpServer extends AbstractVerticle {

  @Override
  public void start() throws Exception {
    vertx.createHttpServer()
        .requestHandler(req -> req.response()
            .putHeader("content-type", "text/html")
            .end("<h1>Hello from Java</h1>"))
        .listen(8080, ar -> {
          if (ar.succeeded()) {
            System.out.println("Server started on port " + ar.result().actualPort());
          } else {
            System.out.println("Unable to start server " + ar.cause().getMessage());
          }
        });
  }
}
