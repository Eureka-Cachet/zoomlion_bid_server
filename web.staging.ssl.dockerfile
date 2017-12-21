FROM        nginx:1.10-alpine

ADD         staging.vhost.ssl.conf /etc/nginx/conf.d/default.conf

VOLUME      /etc/letsencrypt

VOLUME      /var/www/public