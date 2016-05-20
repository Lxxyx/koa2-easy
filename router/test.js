import Router from 'koa-router'

const router = new Router({
  prefix: '/test'
})

router
  .get('/json', (ctx, next) => {
    ctx.body = { test: 'json' }
  })
  .get('/', (ctx, next) => {
    ctx.body = "this is test page!"
  })
  .post('/post', (ctx, next) => {
    ctx.body = ctx.request.body
  })

export default router
