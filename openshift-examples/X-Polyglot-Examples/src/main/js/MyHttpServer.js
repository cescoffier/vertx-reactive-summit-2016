vertx.createHttpServer()
    .requestHandler(function (req) {
        req.response().end("Hello from JavaScript")
    })
    .listen(8080);