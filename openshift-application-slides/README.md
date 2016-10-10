# Openshift slide deck


## Deployment

```
oc login https://10.1.2.2:8443 (admin/admin)
oc new-project vertx-openshift-slides
# or oc project vertx-openshift-slides

oc policy add-role-to-user view admin -n vertx-openshift-slides
oc policy add-role-to-group view system:serviceaccounts -n vertx-openshift-slides

mvn clean package
oc new-build --binary --name=vertx-openshift-slides -l app=vertx-openshift-slides
oc start-build vertx-openshift-slides --from-dir=. --follow

oc new-app vertx-openshift-slides -l app=vertx-openshift-slides
oc expose service vertx-openshift-slides -l vertx-cluster=true
```