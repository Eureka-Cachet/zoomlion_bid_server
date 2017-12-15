FROM        eurekacachet/laradoc

MAINTAINER  eurekacachetdev@gmail.com

# Custom layers

COPY        supervisor/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

COPY        . /var/www

WORKDIR     /var/www

# add entry to crontab
RUN         (crontab -l 2>/dev/null; echo "* * * * * /usr/local/bin/php artisan schedule:run >> /dev/null 2>&1")| crontab -

RUN         mkdir oldBeneficiaries StaffPicture sysImages storage/logs
RUN         touch storage/logs/worker.log storage/logs/broadcast-worker.log

RUN         /usr/local/bin/php /usr/local/bin/composer install

#RUN         vendor/bin/phpunit

RUN         chown -R www-data ./storage && chmod -R 0770 ./storage

# set container entrypoints
ENTRYPOINT ["/bin/bash","-c"]
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]