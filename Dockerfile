FROM nginx:1.21.6-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist/sakai-ng/ /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
