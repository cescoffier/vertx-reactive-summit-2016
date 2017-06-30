FROM openjdk:8u102-jre

ENV JAR F-Load-Balancing-1.0-SNAPSHOT-fat.jar
ENV APP_HOME /usr/vertx

ENV KUBERNETES_NAMESPACE vertx-openshift-slides
ENV KUBERNETES_SERVICE_HOST kubernetes.default.svc
ENV KUBERNETES_SERVICE_PORT 443

EXPOSE 8080

COPY target/$JAR $APP_HOME/
RUN chmod 777 $APP_HOME

WORKDIR $APP_HOME
ENTRYPOINT ["sh", "-c"]
CMD ["exec java -Dvertx.jgroups.config=default-configs/default-jgroups-kubernetes.xml -DKUBERNETES_NAMESPACE=$KUBERNETES_NAMESPACE -DKUBERNETES_SERVICE_HOST=$KUBERNETES_SERVICE_HOST -DKUBERNETES_SERVICE_PORT=$KUBERNETES_SERVICE_PORT -Djava.net.preferIPv4Stack=true -Dvertx.logger-delegate-factory-class-name=io.vertx.core.logging.Log4j2LogDelegateFactory -jar $JAR -cluster -cp ."]