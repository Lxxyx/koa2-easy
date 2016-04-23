import Router from 'koa-router'

const router = new Router()

router.get('/', (ctx, next) => {
  ctx.body = "This is Index"
})

export default router
