#!/usr/bin/env bash
npm install
oc start-build node-producer --from-dir=. --follow

