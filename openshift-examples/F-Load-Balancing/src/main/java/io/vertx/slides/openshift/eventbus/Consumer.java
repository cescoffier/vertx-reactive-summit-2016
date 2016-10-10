package io.vertx.slides.openshift.eventbus;

import io.vertx.core.AbstractVerticle;

import java.lang.management.ManagementFactory;

/**
 * @author <a href="http://escoffier.me">Clement Escoffier</a>
 */
public class Consumer extends AbstractVerticle {

  @Override
  public void start() throws Exception {
    String name =
        System.getenv("HOSTNAME");
    System.out.println("Name: " + name);
    vertx.eventBus()
        .consumer("load-balancing", message -> {
          message.reply("message handled by " + name);
        });
  }
}
