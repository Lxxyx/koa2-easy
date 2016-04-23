import Router from 'koa-router'

const router = new Router({
  prefix: '/api'
})

router
  .get('/', (ctx, next) => {
    ctx.body = "This is Api page"
  })
  

export default router
