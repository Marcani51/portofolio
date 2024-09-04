FROM nginx
WORKDIR /home/dist/
COPY dist /home/dist
# COPY deployment/certificate.pem /home/
# COPY deployment/private.key /home/
COPY deployment/nginx.conf /etc/nginx/conf.d/default.conf