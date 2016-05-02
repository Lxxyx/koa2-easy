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
  .get('/', (ctx, next) => {
    ctx.body = "this is test page"
  })
  .post('/post', (ctx, next) => {
    ctx.body = ctx.request.body
  })

const db = new Router()

db
  .get('/', async (ctx,next) => {
    ctx.body = 'hello this is db test'
  })
  .post('/', async (ctx, next) => {
    let isExist = await User.find({name: ctx.request.body.name}).length !== 0
    if (isExist) {
      throw new ctx.Err({ message: '用户已存在', status: 400})
    }
    ctx.body = await new Cat(ctx.request.body).save()
  })
  .post('/find', async (ctx, next) => {
    let result = await Cat.find(ctx.request.body)
    if (result.length === 0 ) {
      throw new ctx.Err({
        message: '找不到用户',
        status: 404
      })
    }
    ctx.body = result
  })

router.use('/db', db.routes())

export default router
