# Openshift slide deck


## Deployment


This should has already be done:
```
oc login https://10.1.2.2:8443 (admin/admin)
oc new-project vertx-openshift-slides
# or oc project vertx-openshift-slides

oc policy add-role-to-user view admin -n vertx-openshift-slides
oc policy add-role-to-group view system:serviceaccounts -n vertx-openshift-slides
```

Instructions start here:

```
export NAME=vertx-http-server
mvn clean package
oc new-build --binary --name=$NAME -l app=$NAME
oc start-build $NAME --from-dir=. --follow

oc new-app $NAME -l app=$NAME -l service-type=http-endpoint
oc expose service $NAME -l app=$NAME
```


## Deletion

```
export NAME=vertx-http-server
oc delete all -l app=$NAME
```