import Router from 'koa-router'

const router = new Router({
  prefix: '/test'
})

router
  .get('/json', (ctx, next) => {
    ctx.body = { test: 'json' }
  })
  .post('/post', (ctx, next) => {
    ctx.body = ctx.request.body
  })

export default router
