$vertx.create_http_client.get(8080, "localhost", "/") { |resp|
  puts "Response #{resp.status_code}"
  resp.body_handler { |body|
    puts "Data #{body.to_string}"
  }
}.end