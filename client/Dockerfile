FROM node:lts-alpine AS builder

WORKDIR /usr/app

COPY package* ./

RUN npm i --silent

COPY . .

RUN npm run build --silent



FROM nginx:mainline-alpine

EXPOSE 3000

COPY --from=builder /usr/app/nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /usr/app/build /usr/share/nginx/html
