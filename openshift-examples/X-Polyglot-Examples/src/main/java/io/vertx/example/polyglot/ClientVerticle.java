package io.vertx.example.polyglot;

import io.vertx.core.AbstractVerticle;

/**
 * @author <a href="http://escoffier.me">Clement Escoffier</a>
 */
public class ClientVerticle extends AbstractVerticle {

  @Override
  public void start() {
    vertx.createHttpClient().get(8080, "localhost", "/",
        response -> {
          System.out.println("Response: " + response.statusMessage());
          response.bodyHandler(buffer ->
              System.out.println("Data: " + buffer.toString())
          );
        })
        .end();
  }
}
