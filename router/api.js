import Router from 'koa-router'
import user from './api/user'

const router = new Router()

router
  .get('/', (ctx, next) => {
    ctx.body = "This is Api page"
  })

router.use('/user', user.routes())

export default router
