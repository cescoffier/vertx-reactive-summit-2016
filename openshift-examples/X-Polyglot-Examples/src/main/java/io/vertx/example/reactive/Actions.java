package io.vertx.example.reactive;

import io.vertx.core.AsyncResult;
import io.vertx.core.Handler;
import io.vertx.core.Vertx;
import io.vertx.core.Future;
import io.vertx.rx.java.ObservableFuture;
import io.vertx.rx.java.ObservableHandler;
import io.vertx.rx.java.RxHelper;
import me.escoffier.vertx.completablefuture.VertxCompletableFuture;
import rx.Observable;
import rx.schedulers.Schedulers;

import java.util.concurrent.CompletableFuture;

/**
 * @author <a href="http://escoffier.me">Clement Escoffier</a>
 */
public class Actions {

  public static Vertx vertx;

  public static void doA(String param, Handler<AsyncResult<String>> handler) {
    vertx.setTimer(2, l -> handler.handle(Future.succeededFuture("Hello " + param)));
  }

  public static void doB(String param, Handler<AsyncResult<String>> handler) {
    vertx.setTimer(4, l -> handler.handle(Future.succeededFuture("Bonjour " + param)));
  }

  public static Future<String> doA(String param) {
    Future<String> future = Future.future();
    vertx.setTimer(20, l -> future.complete("Hello " + param));
    return future;
  }

  public static Future<String> doB(String param) {
    Future<String> future = Future.future();
    vertx.setTimer(2, l -> future.complete("Bonjour " + param));
    return future;
  }




}
