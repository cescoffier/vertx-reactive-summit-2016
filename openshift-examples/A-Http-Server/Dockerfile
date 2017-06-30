FROM openjdk:8u102-jre

ENV JAR A-Http-Server-1.0-SNAPSHOT-fat.jar
ENV APP_HOME /usr/vertx
ENV OPENSHIFT_KUBE_PING_NAMESPACE vertx-openshift-slides

EXPOSE 8080

COPY target/$JAR $APP_HOME/
COPY src/conf/ $APP_HOME/
RUN chmod 777 $APP_HOME

WORKDIR $APP_HOME
ENTRYPOINT ["sh", "-c"]
CMD ["exec java -jar $JAR -cp ."]