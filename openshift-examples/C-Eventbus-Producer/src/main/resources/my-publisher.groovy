import java.util.concurrent.atomic.AtomicInteger

def counter = new AtomicInteger()
vertx.setPeriodic(2000, { l ->
  vertx.eventBus().publish("eventbus-example",
          [
                  "from", "groovy",
                  "message", "hello from groovy " +
                          "(" + counter.getAndIncrement() + ")"
          ]);
});