FROM node:12.18.1
ENV NODE_ENV=production
WORKDIR /
COPY [ "package.json", "package-lock.json*", "./"]

EXPOSE 8080

RUN npm install
COPY . .

CMD [ "node", "server.js" ]
