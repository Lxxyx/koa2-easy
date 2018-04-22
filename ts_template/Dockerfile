FROM node:latest
COPY ./src /server/src
COPY tsconfig.json package.json package-lock.json  /server/
WORKDIR /server
RUN npm install --registry=https://registry.npm.taobao.org
RUN npm run compile
ENV PORT=3000
EXPOSE 3000
CMD ["/server/node_modules/.bin/pm2-docker", "./dist/app.js"]
