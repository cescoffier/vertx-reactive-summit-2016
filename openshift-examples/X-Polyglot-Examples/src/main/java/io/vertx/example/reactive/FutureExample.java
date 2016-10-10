package io.vertx.example.reactive;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.CompositeFuture;
import io.vertx.core.Future;
import io.vertx.core.Vertx;

import static io.vertx.example.reactive.Actions.doA;
import static io.vertx.example.reactive.Actions.doB;

/**
 * @author <a href="http://escoffier.me">Clement Escoffier</a>
 */
public class FutureExample extends AbstractVerticle {

  public static void main(String[] args) {
    Vertx vertx = Vertx.vertx();
    Actions.vertx = vertx;
    vertx.deployVerticle(FutureExample.class.getName());
  }

  @Override
  public void start() throws Exception {
    vertx.createHttpServer()
        .requestHandler(request -> {
          Future<String> a = doA("Austin");
          Future<String> b = doB("Austin");
          CompositeFuture.all(a, b).setHandler(ar -> {
            request.response().end(a.result() + "\n" + b.result());
          });
        }).listen(8080);
  }
}
