FROM java:8u92-jre-alpine

ENV JAR A-Http-Server-1.0-SNAPSHOT-fat.jar
ENV APP_HOME /usr/vertx

EXPOSE 8080

COPY target/$JAR $APP_HOME/
COPY src/conf/ $APP_HOME/
RUN chmod 777 $APP_HOME

WORKDIR $APP_HOME
ENTRYPOINT ["sh", "-c"]
CMD ["java -jar $JAR -cp ."]