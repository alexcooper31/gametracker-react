FROM node:12.16.1-alpine

# RUN npm i -g yarn

RUN npm i -g serve

RUN mkdir /usr/app

WORKDIR /usr/app

COPY package.json .

COPY yarn.lock .

RUN yarn

COPY ./public ./public

COPY ./src ./src

RUN yarn build

EXPOSE 5000

CMD serve -s build