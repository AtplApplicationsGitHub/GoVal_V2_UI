FROM nginx:1.21.6-alpine
WORKDIR /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist/ .
CMD ["nginx", "-g", "daemon off;"]
