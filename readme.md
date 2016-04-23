## 起因
因为Koa2已经在蓬勃发展中，且Express不太符合自己的需求。
所以基于Koa2订制了一套适合自己的模板。

## 启动
Linux下加sudo
```
npm i
npm run dev
```
## 服务器部署
```
npm i pm2 -g
npm run pm2
```

## 使用
需要具有ES6基础。

在router/index.js中，有发送静态html和渲染模版的两种方式。
在router/test.js，有发送json数据和读取post数据的方式
