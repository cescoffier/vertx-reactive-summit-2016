#!/usr/bin/env bash
mvn clean package
oc start-build vertx-http-failure --from-dir=. --follow

