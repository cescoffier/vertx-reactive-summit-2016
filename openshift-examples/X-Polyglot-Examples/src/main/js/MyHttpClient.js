vertx.createHttpClient().get(8080, "localhost", "/", function (resp) {
    console.log("Response " + resp.statusCode());
    resp.bodyHandler(function (body) {
        console.log("Data " + body);
    });
}).end();