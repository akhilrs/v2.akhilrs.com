FROM nginx
MAINTAINER Akhil R S "<akhilrs.dev@gmail.com"

COPY start.sh /
RUN chmod u+x /start.sh

COPY nginx.conf /etc/nginx/
COPY nginx-secure.conf /etc/nginx/

COPY dhparams.pem /etc/ssl/private/
CMD /start.sh
