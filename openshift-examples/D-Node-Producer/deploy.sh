#!/usr/bin/env bash
oc new-build --binary --name=node-producer -l app=node-producer
npm install; oc start-build node-producer --from-dir=. --follow
oc new-app node-producer -l app=node-producer
oc expose service node-producer

