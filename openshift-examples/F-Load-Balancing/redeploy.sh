#!/usr/bin/env bash
mvn clean package
oc start-build vertx-eventbus-consumer --from-dir=. --follow

