# Vert.x Slides presented at the Reactive Summit 2016

These slides are a presentation about reactive microservices with Vert.x and Openshift. 

In this repo you will find the slides and the demos.

## Slides

You can get the slides as PDF here: [slides](vertx-openshift-slides.pdf).


## Prerequisites

You need Docker and minishift (https://github.com/jimmidyson/minishift).

Once installed run:

`minishift start --deploy-registry --deploy-router  --cpus=2`

once started, run:

```
oc login --username=admin --password=admin
eval $(minishift docker-env)
```

## Build the slides and demo

Run:

```
./deploy-slides-and-demo.sh
```

It's going to take time. Once done, your browser should open the Openshift login page (you may have to validate the 
certificate). Login with `admin`/`admin`.

Once you have the project list, click on `vertx-openshift-slides`, and then click on the link looking similar to: http://vertx-openshift-slides-vertx-openshift-slides.192.168.99.100.xip.io (on the right side of the Vert.x 
Openshift Slides box).



