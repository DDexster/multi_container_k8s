FROM node:lts-alpine

WORKDIR /usr/app

COPY package* ./

RUN npm i --silent

COPY . .

CMD [ "npm", "run", "start" ]
