FROM node:latest
COPY ./ts /server/ts
COPY tsconfig.json package.json  /server/
WORKDIR /server
RUN npm install --registry=https://registry.npm.taobao.org
RUN /server/node_modules/.bin/tsc
ENV PORT=3000
EXPOSE 3000
CMD ["/server/node_modules/.bin/pm2-docker", "./js_server/app.js"]
