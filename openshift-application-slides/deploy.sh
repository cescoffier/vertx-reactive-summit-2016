#!/usr/bin/env bash
mvn clean package
oc new-build --binary --name=vertx-openshift-slides -l app=vertx-openshift-slides
oc start-build vertx-openshift-slides --from-dir=. --follow

oc new-app vertx-openshift-slides -l app=vertx-openshift-slides
oc expose service vertx-openshift-slides -l vertx-cluster=true

