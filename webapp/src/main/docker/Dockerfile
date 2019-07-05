FROM  openjdk:8-jdk-slim-stretch

ENV TZ=Europe/Berlin
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN export DEBIAN_FRONTEND=noninteractive; apt-get update && \
        apt-get install --no-install-recommends -y procps curl net-tools && \
        apt-get clean && \
        rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN useradd -u 999 -s /bin/bash -m -d /home/vacpla vacpla

WORKDIR /home/vacpla/
USER vacpla

COPY vacpla-webapp.war vacpla-webapp.war
EXPOSE 8080

CMD ["sh", "-c", "exec java -Dserver.address=0.0.0.0 -Dserver.port=8080 -Xmx1g -Denv=$ENVIRONMENT ${EXTRA_APP_OPTS} -Djava.security.egd=file:/dev/./urandom -jar vacpla-webapp.war"]
