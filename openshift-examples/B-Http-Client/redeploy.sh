#!/usr/bin/env bash
mvn clean package
oc start-build vertx-http-client --from-dir=. --follow

