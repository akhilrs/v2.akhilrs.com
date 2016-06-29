FROM ubuntu:16.04

RUN  apt-get -yq update && \
     apt-get -yqq install ssh
# SSH conf
RUN mkdir /root/.ssh
COPY ./keys/deploy/deploy-key /root/.ssh
# RUN mv /opt/repo-key /root/.ssh/
RUN ssh-keyscan -H github.com >> /root/.ssh/known_hosts && chmod 700 /root/.ssh/id_rsa
RUN \
  chmod 600 /root/.ssh/deploy-key && \
  echo "IdentityFile /root/.ssh/deploy-key" >> /etc/ssh/ssh_config && \
  echo "StrictHostKeyChecking no" >> /etc/ssh/ssh_config

RUN rm -rf /srv/akhil.rs && \
    mkdir -p /srv/akhil.rs

RUN git clone -b master --single-branch git@github.com:akhilrs/v2.akhilrs.com.git /srv/akhil.rs

# RUN ln -s /srv/akhil.rs /code
RUN rm -rf /usr/share/nginx/html
RUN ln -s /srv/akhil.rs /usr/share/nginx/html

# WORKDIR /code
WORKDIR /usr/share/nginx/html
