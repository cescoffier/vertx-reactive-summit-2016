vertx.createHttpClient().get(8080, "localhost", "/", { resp ->
  println("Response ${resp.statusCode()}")
  resp.bodyHandler({ body ->
    println("Data ${body}")
  })
}).end()