import Koa from 'koa'
import json from 'koa-json'
import bodyParser from 'koa-bodyparser'
import convert from 'koa-convert'
import logger from 'koa-logger'
import views from 'koa-views'
import serve from 'koa-static'
import send from 'koa-send'

import index from './router/index'
import api from './router/api'
import test from './router/test'

const app = new Koa()

// 全局错误处理
app.use(async(ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.body = { message: err.message }
    ctx.status = err.status || 500
  }
})

// 记录所用方式与时间
app.use(convert(logger()))

// 传输JSON
app.use(convert(json()));

// body解析
app.use(convert(bodyParser()));

// 设置渲染引擎
app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// 静态文件夹
app.use(convert(serve(__dirname + '/static')))

// 发送文件，如HTML
app.use(async (ctx, next) => {
  ctx.send = send
  await next()
})

// 路由
app
  .use(index.routes())
  .use(api.routes())
  .use(test.routes())

app.listen(3000)

console.log(`Server up and running! On port 3000!`);
