FROM openjdk:8u102-jre

ENV JAR F-Load-Balancing-1.0-SNAPSHOT-fat.jar
ENV APP_HOME /usr/vertx
ENV OPENSHIFT_KUBE_PING_NAMESPACE vertx-openshift-slides

EXPOSE 8080
EXPOSE 8888

COPY target/$JAR $APP_HOME/
RUN chmod 777 $APP_HOME

WORKDIR $APP_HOME
ENTRYPOINT ["sh", "-c"]
CMD ["exec java -Dvertx.jgroups.config=default-configs/default-jgroups-kubernetes.xml -Djava.net.preferIPv4Stack=true -Dvertx.logger-delegate-factory-class-name=io.vertx.core.logging.Log4j2LogDelegateFactory -jar $JAR -cluster -cp ."]