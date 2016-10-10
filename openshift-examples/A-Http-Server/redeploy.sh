#!/usr/bin/env bash
mvn clean package
oc start-build vertx-http-server --from-dir=. --follow

