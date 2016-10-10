#!/usr/bin/env bash
mvn clean package
oc start-build vertx-eventbus-producer --from-dir=. --follow

