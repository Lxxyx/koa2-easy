import * as Koa from 'koa'
import * as bodyparser from 'koa-bodyparser'
import * as logger from 'koa-logger'
import * as compress from 'koa-compress'
const cors = require('koa-cors')
const convert = require('koa-convert')
import api from './router/api'

const app = new Koa()

app.use(async (ctx, next) => {
  try {
    await next()
    ctx.set('PoweredBy', 'Koa2-Easy')
    ctx.body = {
      status: 0,
      data: JSON.parse(ctx.body)
    }
  } catch (e) {
    ctx.status = e.status || 1
    ctx.body = {
      status: e.status || 1,
      message: e.message,
      data: {}
    }
  }
})

app.use(compress({
  threshold: 2048
}))

app.use(convert(cors()))

app.use(bodyparser())

app.use(convert(logger()))

app.use(api.routes())

let port: number = 3000

if (process.env.PORT) {
  port = Number(process.env.PORT)
}

app.listen(port)

console.log(`Now server is listen ${port}`);
