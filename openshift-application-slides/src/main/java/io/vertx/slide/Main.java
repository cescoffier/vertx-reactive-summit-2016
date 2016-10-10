package io.vertx.slide;

import io.vertx.core.Vertx;
import io.vertx.core.VertxOptions;

/**
 * The main class starting the slides.
 *
 * @author <a href="http://escoffier.me">Clement Escoffier</a>
 */
public class Main {

  public static void main(String[] args) {
    Vertx.clusteredVertx(new VertxOptions(), ar -> {
      Vertx vertx = ar.result();
      vertx.deployVerticle(SlideVerticle.class.getName());
    });
  }

}
