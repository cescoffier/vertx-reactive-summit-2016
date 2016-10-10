package io.vertx.slides.openshift.http;

import io.vertx.core.Vertx;
import io.vertx.core.VertxOptions;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 * @author <a href="http://escoffier.me">Clement Escoffier</a>
 */
public class HttpServer {

  private final static DateTimeFormatter formatter =
      DateTimeFormatter.ISO_LOCAL_TIME;

  public static void main(String[] args) {
    Vertx vertx = Vertx.vertx();

    vertx.createHttpServer()
        .requestHandler(
            request -> request.response()
                .putHeader("Access-Control-Allow-Origin", "*")
                .end("Austin ! ("
                    + formatter.format(LocalDateTime.now())
                    + ")<br/>"
                    + Thread.currentThread().getName()))

        .listen(8080, result -> {
          if (result.failed()) {
            System.out.println("D'oh ! Can't start the" +
                " HTTP server");
          } else {
            System.out.println("HTTP server started on" +
                " port " + result.result().actualPort());
          }
        });
  }
}
