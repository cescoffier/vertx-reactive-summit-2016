#!/usr/bin/env bash
mvn clean package
rm -Rf target/classes target/node
oc start-build vertx-openshift-slides --from-dir=. --follow
