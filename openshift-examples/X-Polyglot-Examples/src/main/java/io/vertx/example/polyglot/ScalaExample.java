package io.vertx.example.polyglot;

import io.vertx.core.Vertx;
import io.vertx.lang.scala.*;
import io.vertx.scala.*;

/**
 * @author <a href="http://escoffier.me">Clement Escoffier</a>
 */
public class ScalaExample {

  public static void main(String[] args) {
    Vertx vertx = Vertx.vertx();
    vertx.deployVerticle(io.vertx.scala.MyHttpServer.class.getName());
  }

}
