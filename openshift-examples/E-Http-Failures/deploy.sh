#!/usr/bin/env bash
export NAME=vertx-http-failure
mvn clean package
oc new-build --binary --name=$NAME -l app=$NAME
oc start-build $NAME --from-dir=. --follow

oc new-app $NAME -l app=$NAME -l service-type=http-endpoint
oc expose service $NAME -l app=$NAME

