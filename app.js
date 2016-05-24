import Koa from 'koa'
import cors from 'koa-cors'
import compress from 'koa-compress'
import json from 'koa-json'
import send from 'koa-send'
import views from 'koa-views'
import serve from 'koa-static'
import logger from 'koa-logger'
import convert from 'koa-convert'
import bodyParser from 'koa-bodyparser'
import Router from 'koa-router'

import index from './router/index'
import api from './router/api'
import test from './router/test'

import { KoaErr } from './helper'

const app = new Koa()
// 全局错误处理
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.body = err
    ctx.status = err.status || 500
  }
})

// 使用自定义错误
app.use(async (ctx, next) => {
  ctx.Err = KoaErr
  await next()
})

// 设置Header
app.use(async (ctx, next) => {
  await next()
  ctx.set('X-Powered-By', 'Koa2-Easy')
})

// 设置gzip
app.use(compress({
  threshold: 2048,
  flush: require('zlib').Z_SYNC_FLUSH
}))

// 记录所用方式与时间
app.use(convert(logger()))

// 设置跨域
app.use(convert(cors()))

// 传输JSON
app.use(convert(json()))

// body解析
app.use(convert(bodyParser()))

// 设置渲染引擎
app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// 静态文件夹
app.use(convert(serve(__dirname + '/static/')))

// 发送文件，如HTML
app.use(async (ctx, next) => {
  ctx.send = send
  await next()
})

// 路由
app.use(index.routes())
app.use(api.routes())
app.use(test.routes())

app.listen(process.env.PORT || 3000)
console.log(`Server up and running! On port ${process.env.PORT || 3000}!`);
