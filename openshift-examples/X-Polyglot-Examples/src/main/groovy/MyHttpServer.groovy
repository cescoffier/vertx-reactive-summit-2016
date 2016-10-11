vertx.createHttpServer()
        .requestHandler({ req ->
          req.response()
                  .putHeader("content-type", "text/html")
                  .end("<h1>Hello from Groovy</h1>")
        })
        .listen(8080, { ar ->
          if (ar.succeeded()) {
            println("Server started on port " + ar.result().actualPort());
          } else {
            println("Unable to start server " + ar.cause().getMessage());
          }
})