package io.vertx.scala

import io.vertx.lang.scala.ScalaVerticle

class MyHttpServer extends ScalaVerticle {
  override def start(): Unit = {
    vertx.createHttpServer()
      .requestHandler(req => req.response().end("Hello from Scala"))
      .listen(8080)
  }
}