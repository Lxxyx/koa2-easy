import Router from 'koa-router'

const router = new Router()

/**
 * 首页路由无需加'/'，直接使用
 *
 * 首页路由例子： router.get('index')
 * 非首页路由例子： router.get('/index')
 */
router
  .get('/', async (ctx, next) => {
    // 渲染模板
    await ctx.render('index', { title: 'Koa2-Easy' })
  })
  .get('index', async (ctx, next) => {
    // 发送静态文件
    await ctx.send(ctx, 'index.html', { root: 'static' })
  })

export default router
