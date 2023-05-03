# set the base image to build from 
FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY dist/ /usr/share/nginx/html
