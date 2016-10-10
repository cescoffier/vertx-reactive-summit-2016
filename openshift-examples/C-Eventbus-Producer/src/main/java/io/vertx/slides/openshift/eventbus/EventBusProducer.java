package io.vertx.slides.openshift.eventbus;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.json.JsonObject;

import java.util.concurrent.atomic.AtomicInteger;

/**
 * @author <a href="http://escoffier.me">Clement Escoffier</a>
 */
public class EventBusProducer extends AbstractVerticle {

  @Override
  public void start() throws Exception {
    AtomicInteger counter = new AtomicInteger();
    vertx.setPeriodic(5000, l -> {
      System.out.println("Sending message on the eventbus");
      vertx.eventBus().publish("eventbus-example",
          new JsonObject()
              .put("from", "java")
              .put("message",
                  "hello from java " +
                      "(" + counter.getAndIncrement() + ")"));
    });
  }

}
