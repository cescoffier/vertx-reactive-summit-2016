This branch is configured to use the Infinispan cluster manager.

To check the behavior, install the slides and demo (see README.md).

then, go to this slides:
http://vertx-openshift-slides-vertx-openshift-slides.192.168.99.100.xip.io/#/4/6 (change the root url to match yours).

You should see message from Node and Java.

(this part works normally)


Then go to this slides:
http://vertx-openshift-slides-vertx-openshift-slides.192.168.99.100.xip.io/#/6/4 (change the root url to match yours).

If you click on `invoke`, you should see the id of the node processing the message. Now scale the number of eventbus 
consumer to 2 (should be one by default). Look at the logs of the pods, you will notice blacked event loop message:

```
11:47:37.402 [vertx-blocked-thread-checker] WARN  io.vertx.core.impl.BlockedThreadChecker - Thread Thread[vert.x-eventloop-thread-0,5,main] has been blocked for 14576 ms, time limit is 2000
io.vertx.core.VertxException: Thread blocked
	at java.lang.ClassLoader.findBootstrapClass(Native Method) ~[?:1.8.0_102]
	at java.lang.ClassLoader.findBootstrapClassOrNull(ClassLoader.java:1015) ~[?:1.8.0_102]
	at java.lang.ClassLoader.loadClass(ClassLoader.java:413) ~[?:1.8.0_102]
	at java.lang.ClassLoader.loadClass(ClassLoader.java:411) ~[?:1.8.0_102]
	at sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:331) ~[?:1.8.0_102]
	at java.lang.ClassLoader.loadClass(ClassLoader.java:357) ~[?:1.8.0_102]
	at com.fasterxml.jackson.databind.ser.std.StdJdkSerializers.all(StdJdkSerializers.java:57) ~[F-Load-Balancing-1.0-SNAPSHOT-fat.jar:?]
	at com.fasterxml.jackson.databind.ser.BasicSerializerFactory.<clinit>(BasicSerializerFactory.java:92) ~[F-Load-Balancing-1.0-SNAPSHOT-fat.jar:?]
	at com.fasterxml.jackson.databind.ObjectMapper.<init>(ObjectMapper.java:559) ~[F-Load-Balancing-1.0-SNAPSHOT-fat.jar:?]
	at com.fasterxml.jackson.databind.ObjectMapper.<init>(ObjectMapper.java:460) ~[F-Load-Balancing-1.0-SNAPSHOT-fat.jar:?]
	at io.vertx.core.json.Json.<clinit>(Json.java:44) ~[F-Load-Balancing-1.0-SNAPSHOT-fat.jar:?]
	at io.vertx.core.json.JsonObject.encode(JsonObject.java:678) ~[F-Load-Balancing-1.0-SNAPSHOT-fat.jar:?]
	at io.vertx.core.impl.HAManager.<init>(HAManager.java:145) ~[F-Load-Balancing-1.0-SNAPSHOT-fat.jar:?]
	at io.vertx.core.impl.VertxImpl.lambda$new$0(VertxImpl.java:169) ~[F-Load-Balancing-1.0-SNAPSHOT-fat.jar:?]
	at io.vertx.core.impl.VertxImpl$$Lambda$22/1699113578.handle(Unknown Source) ~[?:?]
	at io.vertx.core.impl.FutureImpl.checkCallHandler(FutureImpl.java:158) ~[F-Load-Balancing-1.0-SNAPSHOT-fat.jar:?]
	at io.vertx.core.impl.FutureImpl.setHandler(FutureImpl.java:100) ~[F-Load-Balancing-1.0-SNAPSHOT-fat.jar:?]
	at io.vertx.core.impl.ContextImpl.lambda$null$0(ContextImpl.java:279) ~[F-Load-Balancing-1.0-SNAPSHOT-fat.jar:?]
	at io.vertx.core.impl.ContextImpl$$Lambda$48/1006493516.handle(Unknown Source) ~[?:?]
	at io.vertx.core.impl.ContextImpl.lambda$wrapTask$2(ContextImpl.java:324) ~[F-Load-Balancing-1.0-SNAPSHOT-fat.jar:?]
	at io.vertx.core.impl.ContextImpl$$Lambda$52/1597707203.run(Unknown Source) ~[?:?]
	at io.netty.util.concurrent.AbstractEventExecutor.safeExecute(AbstractEventExecutor.java:163) ~[F-Load-Balancing-1.0-SNAPSHOT-fat.jar:?]
	at io.netty.util.concurrent.SingleThreadEventExecutor.runAllTasks(SingleThreadEventExecutor.java:418) ~[F-Load-Balancing-1.0-SNAPSHOT-fat.jar:?]
	at io.netty.channel.nio.NioEventLoop.run(NioEventLoop.java:440) ~[F-Load-Balancing-1.0-SNAPSHOT-fat.jar:?]
	at io.netty.util.concurrent.SingleThreadEventExecutor$5.run(SingleThreadEventExecutor.java:873) ~[F-Load-Balancing-1.0-SNAPSHOT-fat.jar:?]
```

But eventually it works. However during that time the whole event loop is _dead_.

Now, increase the number of consumer to 4. Things are going completely wild in this case. For minutes the event bus 
is not working and when back it's pretty unreliable.




