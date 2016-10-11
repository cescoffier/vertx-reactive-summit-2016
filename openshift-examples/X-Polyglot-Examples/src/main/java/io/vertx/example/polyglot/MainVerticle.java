package io.vertx.example.polyglot;

import io.vertx.core.AbstractVerticle;

/**
 * @author <a href="http://escoffier.me">Clement Escoffier</a>
 */
public class MainVerticle extends AbstractVerticle {

  @Override
  public void start() throws Exception {
    vertx.deployVerticle(ClientVerticle.class.getName());
  }
}
