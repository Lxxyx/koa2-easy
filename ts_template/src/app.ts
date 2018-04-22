import Koa from 'koa'
import bodyparser from 'koa-bodyparser'
import compress from 'koa-compress'
import convert from 'koa-convert'
import cors from 'koa-cors'
import logger from 'koa-logger'

const app = new Koa()

app.use(async (ctx, next) => {
  ctx.set('PoweredBy', 'Koa2-Easy')
  try {
    await next()
    ctx.body = {
      code: 0,
      message: 'ok',
      data: JSON.parse(ctx.body)
    }
  } catch (e) {
    ctx.status = e.status || 500
    ctx.body = {
      code: e.status || 500,
      message: e.message,
      data: {}
    }
  }
})

app.use(compress({ threshold: 2048 }))
app.use(convert(cors()))
app.use(bodyparser())
app.use(convert(logger()))

const port = process.env.PORT ? Number(process.env.PORT) : 3000

app.listen(port)

console.log(`Now server is listen http://localhost:${port}`)
