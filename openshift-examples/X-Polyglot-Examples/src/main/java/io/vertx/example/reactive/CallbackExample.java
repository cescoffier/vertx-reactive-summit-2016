package io.vertx.example.reactive;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Vertx;

import static io.vertx.example.reactive.Actions.doA;
import static io.vertx.example.reactive.Actions.doB;

/**
 * @author <a href="http://escoffier.me">Clement Escoffier</a>
 */
public class CallbackExample extends AbstractVerticle {

  public static void main(String[] args) {
    Vertx vertx = Vertx.vertx();
    Actions.vertx = vertx;
    vertx.deployVerticle(CallbackExample.class.getName());
  }

  @Override
  public void start() throws Exception {
    vertx.createHttpServer()
        .requestHandler(request -> {
          doA("Austin", ar -> {
            doB("Austin", ar2 -> {
              request.response().end(ar.result() + "\n" + ar2.result());
            });
          });
        }).listen(8080);
  }
}
