package io.vertx.example.polyglot;

import io.vertx.core.AbstractVerticle;

/**
 * @author <a href="http://escoffier.me">Clement Escoffier</a>
 */
public class MyHttpServer extends AbstractVerticle {

  @Override
  public void start() throws Exception {
    vertx.createHttpServer()
        .requestHandler(req -> req.response().end("Hello from Java"))
        .listen(8080);
  }
}
