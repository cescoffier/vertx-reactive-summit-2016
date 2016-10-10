vertx.createHttpServer()
        .requestHandler({ req -> req.response().end("Hello from Groovy") })
        .listen(8080)