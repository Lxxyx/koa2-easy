import Router from 'koa-router'
import mongoose from 'mongoose'

let Cat = mongoose.model('Cat', {
  name: String,
  age: {
    type: Number,
    default: 0
  }
})

const router = new Router()

router
  .get('/json', (ctx, next) => {
    ctx.body = { test: 'json' }
  })
  .post('/post', (ctx, next) => {
    ctx.body = ctx.request.body
  })

const db = new Router()

db  
  .post('/', async (ctx, next) => {
    ctx.body = await new Cat(ctx.request.body).save()
  })
  .post('/find', async (ctx, next) => {
    let result = await Cat.find(ctx.request.body)
    if (result.length === 0 ) {
      ctx.status = 404
      ctx.body = {error: "Not Found"}
      return false
    }
    ctx.body = result
  })

router.use('/db', db.routes())

export default router
