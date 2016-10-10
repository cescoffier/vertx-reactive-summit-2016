package io.vertx.slides.openshift.eventbus;

import io.vertx.core.AbstractVerticle;

/**
 * @author <a href="http://escoffier.me">Clement Escoffier</a>
 */
public class MainVerticle extends AbstractVerticle {

  @Override
  public void start() throws Exception {
    vertx.deployVerticle(EventBusProducer.class.getName());
    vertx.deployVerticle(EventBusConsumer.class.getName());
//    vertx.deployVerticle("my-publisher.groovy");
  }
}
