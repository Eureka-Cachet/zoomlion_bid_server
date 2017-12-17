FROM        nginx:1.10-alpine

ADD         vhost.ssl.conf /etc/nginx/conf.d/default.conf

VOLUME      public /var/www/public