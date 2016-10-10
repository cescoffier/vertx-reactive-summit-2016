#!/usr/bin/env bash
oc login $(minishift ip):8443 -u admin -p admin

echo "Creating project"
oc new-project vertx-openshift-slides

oc policy add-role-to-user view admin -n vertx-openshift-slides
oc policy add-role-to-group view system:serviceaccounts -n vertx-openshift-slides
oc policy add-role-to-user view system:serviceaccount:vertx-openshift-slides:default -n vertx-openshift-slides

echo "Deploying the slides"
cd openshift-application-slides
mvn clean package
rm -Rf target/*-1.0-SNAPSHOT.jar target/classes target/etc target/node
oc new-build --binary --name=vertx-openshift-slides -l app=vertx-openshift-slides
oc start-build vertx-openshift-slides --from-dir=. --follow
oc new-app vertx-openshift-slides -l app=vertx-openshift-slides
oc expose service vertx-openshift-slides -l vertx-cluster=true

echo "Deploying eventbus producer"
cd ../openshift-examples/C-Eventbus-Producer
export NAME=vertx-eventbus-producer
mvn clean package
rm -Rf  target/*-1.0-SNAPSHOT.jar target/classes
oc new-build --binary --name=$NAME -l app=$NAME
oc start-build $NAME --from-dir=. --follow
oc new-app $NAME -l app=$NAME
oc expose service $NAME -l vertx-cluster=true

echo "Deploying HTTP server"
cd ../A-Http-Server
export NAME=vertx-http-server
mvn clean package
rm -Rf  target/*-1.0-SNAPSHOT.jar target/classes
oc new-build --binary --name=$NAME -l app=$NAME
oc start-build $NAME --from-dir=. --follow
oc new-app $NAME -l app=$NAME -l service-type=http-endpoint
oc expose service $NAME -l app=$NAME

echo "Deploying HTTP client"
cd ../B-Http-Client
export NAME=vertx-http-client
mvn clean package
rm -Rf  target/*-1.0-SNAPSHOT.jar target/classes
oc new-build --binary --name=$NAME -l app=$NAME
oc start-build $NAME --from-dir=. --follow
oc new-app $NAME -l app=$NAME -l service-type=http-endpoint
oc expose service $NAME -l app=$NAME

echo "Deploying Node producer"
cd ../D-Node-Producer
oc new-build --binary --name=node-producer -l app=node-producer
npm install; oc start-build node-producer --from-dir=. --follow
oc new-app node-producer -l app=node-producer
oc expose service node-producer

echo "Deploying HTTP Failures"
cd ../E-Http-Failures
export NAME=vertx-http-failure
mvn clean package
rm -Rf  target/*-1.0-SNAPSHOT.jar target/classes
oc new-build --binary --name=$NAME -l app=$NAME
oc start-build $NAME --from-dir=. --follow
oc new-app $NAME -l app=$NAME -l service-type=http-endpoint
oc expose service $NAME -l app=$NAME

echo "Deploying load balancing"
export NAME=vertx-eventbus-consumer
cd ../F-Load-Balancing
mvn clean package
rm -Rf  target/*-1.0-SNAPSHOT.jar target/classes
oc new-build --binary --name=$NAME -l app=$NAME
oc start-build $NAME --from-dir=. --follow
oc new-app $NAME -l app=$NAME
oc expose service $NAME -l vertx-cluster=true

cd ..
echo "Done"
minishift console




