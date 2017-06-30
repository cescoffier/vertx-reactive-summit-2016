FROM openjdk:8u102-jre

ENV VERTICLE_FILE openshift-application-slides-1.0-SNAPSHOT-fat.jar
ENV VERTICLE_HOME /usr/verticles
ENV OPENSHIFT_KUBE_PING_NAMESPACE vertx-openshift-slides

EXPOSE 8080
EXPOSE 8888

COPY target/$VERTICLE_FILE $VERTICLE_HOME/
RUN chmod 777 $VERTICLE_HOME

WORKDIR $VERTICLE_HOME
ENTRYPOINT ["sh", "-c"]
CMD ["exec java -Dvertx.jgroups.config=default-configs/default-jgroups-kubernetes.xml -Djava.net.preferIPv4Stack=true -Dvertx.logger-delegate-factory-class-name=io.vertx.core.logging.Log4j2LogDelegateFactory -jar $VERTICLE_FILE -cluster -cp ."]