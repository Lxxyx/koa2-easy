import Router from 'koa-router'

const router = new Router()

router
  .get('/', async(ctx, next) => {
    await ctx.render('index', { title: 'Koa-Easy' })
  })
  .get('/index', async(ctx, next) => {
    await ctx.send(ctx, 'index.html', { root: 'static' })
  })

export default router
