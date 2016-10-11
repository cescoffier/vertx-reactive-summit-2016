vertx.createHttpServer()
    .requestHandler(function (req) {
        req.response().putHeader("content-type", "text/html").end("<h1>Hello from JavaScript</h1>")
    })
    .listen(8080, function(res, err) {
        if (err) {
            console.log("Unable to start the HTTP server: " + err.getMessage());
        } else {
            console.log("Server started on port " + res.actualPort());
        }
    });