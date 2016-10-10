package io.vertx.example.reactive;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Vertx;
import me.escoffier.vertx.completablefuture.VertxCompletableFuture;

import java.util.concurrent.CompletableFuture;


/**
 * @author <a href="http://escoffier.me">Clement Escoffier</a>
 */
public class CompletableFutureExample extends AbstractVerticle {

  public static void main(String[] args) {
    Vertx vertx = Vertx.vertx();
    Actions.vertx = vertx;
    vertx.deployVerticle(CompletableFutureExample.class.getName());
  }

  @Override
  public void start() throws Exception {
    vertx.createHttpServer()
        .requestHandler(request -> {
          CompletableFuture<String> a = doA("Austin");
          CompletableFuture<String> b = doB("Austin");
          CompletableFuture.allOf(a, b).thenRun(() -> {
            request.response().end(a.join() + "\n" + b.join());
          });
        }).listen(8080);
  }

  public CompletableFuture<String> doA(String param) {
    return VertxCompletableFuture.from(Vertx.currentContext(), doA(param));
  }

  public CompletableFuture<String> doB(String param) {
    return VertxCompletableFuture.from(Vertx.currentContext(), doB(param));
  }

}
