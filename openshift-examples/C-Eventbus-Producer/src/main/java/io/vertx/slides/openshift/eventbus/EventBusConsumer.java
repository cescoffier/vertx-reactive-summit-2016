package io.vertx.slides.openshift.eventbus;

import io.vertx.core.AbstractVerticle;

import java.util.Random;
import java.util.concurrent.atomic.AtomicInteger;

public class EventBusConsumer extends AbstractVerticle {


  @Override
  public void start() throws Exception {

    AtomicInteger counter = new AtomicInteger();
    vertx.eventBus().consumer("eventbus-example-rr", message -> {
      if (doWeFail()) {
        fail();
      }
      message.reply("Hello " + message.body() + " (" + counter.getAndIncrement() + ")");
    });

  }

  private static void fail() {
    throw new RuntimeException("D'oh !");
  }

  public boolean doWeFail() {
    return new Random().nextBoolean();
  }

}
