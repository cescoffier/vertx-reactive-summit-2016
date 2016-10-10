package io.vertx.example.reactive;

import io.vertx.rxjava.core.AbstractVerticle;
import io.vertx.rxjava.core.Vertx;
import io.vertx.rxjava.core.http.HttpServer;
import rx.Observable;

/**
 * @author <a href="http://escoffier.me">Clement Escoffier</a>
 */
public class RXExample extends AbstractVerticle {

  public static void main(String[] args) {
    Vertx vertx = Vertx.vertx();
    vertx.deployVerticle(RXExample.class.getName());
  }

  @Override
  public void start() throws Exception {
    HttpServer server = vertx.createHttpServer();
    server.requestStream().toObservable()
        .subscribe(req -> {
          Observable<String> a = doA3("Austin");
          Observable<String> b = doB3("Austin");
          Observable.zip(a, b, (s1, s2) -> s1 + "\n" + s2)
              .subscribe(s -> req.response().end(s));
        });
    server.listen(8080);
  }

  public Observable<String> doA3(String param) {
    return Observable.create(s -> {
      vertx.setTimer(200, l -> {
        s.onNext("Hello " + param);
        s.onCompleted();
      });
    });
  }

  public Observable<String> doB3(String param) {
    return Observable.create(s -> {
      vertx.setTimer(200, l -> {
        s.onNext("Bonjour " + param);
        s.onCompleted();
      });
    });
  }
}
