FROM ubuntu:16.04

# ENV NGINX_VERSION 1.11.1-1~jessie
#
# RUN apt-key adv --keyserver hkp://pgp.mit.edu:80 --recv-keys 573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62 \
# 	&& echo "deb http://nginx.org/packages/mainline/debian/ jessie nginx" >> /etc/apt/sources.list \
# 	&& apt-get update \
# 	&& apt-get install --no-install-recommends --no-install-suggests -y \
# 						ca-certificates \
# 						nginx=${NGINX_VERSION} \
# 						nginx-module-xslt \
# 						nginx-module-geoip \
# 						nginx-module-image-filter \
# 						nginx-module-perl \
# 						nginx-module-njs \
# 						gettext-base \
# 	&& rm -rf /var/lib/apt/lists/*

# forward request and error logs to docker log collector
# RUN ln -sf /dev/stdout /var/log/nginx/access.log \
# 	&& ln -sf /dev/stderr /var/log/nginx/error.log



RUN  apt-get -yq update && \
     apt-get -yqq install ssh git nano vim nginx

RUN mkdir -p /var/log/nginx
# SSH conf
RUN mkdir /root/.ssh
COPY ./keys/deploy/deploy-key /root/.ssh
# RUN mv /opt/repo-key /root/.ssh/
RUN ssh-keyscan -H github.com >> /root/.ssh/known_hosts && chmod 700 /root/.ssh/deploy-key
RUN \
  chmod 600 /root/.ssh/deploy-key && \
  echo "IdentityFile /root/.ssh/deploy-key" >> /etc/ssh/ssh_config && \
  echo "StrictHostKeyChecking no" >> /etc/ssh/ssh_config

RUN rm -rf /srv/akhil.rs && \
    mkdir -p /srv/akhil.rs

RUN git clone -b master --single-branch git@github.com:akhilrs/v2.akhilrs.com.git /srv/akhil.rs

# RUN ln -s /srv/akhil.rs /code
RUN mkdir -p /usr/share/nginx
RUN rm -rf /usr/share/nginx/html
RUN ln -s /srv/akhil.rs/web /usr/share/nginx/html

# WORKDIR /code
WORKDIR /usr/share/nginx/html

EXPOSE 80 443 22
