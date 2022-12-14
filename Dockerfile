FROM node:alpine

WORKDIR /app

COPY package.json yarn.lock ./

COPY . /app

RUN yarn install

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
