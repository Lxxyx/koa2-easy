import Router from 'koa-router'

const api = new Router({
  prefix: '/api'
})

api
  .get('/', (ctx, next) => {
    ctx.body = 'This is Api page'
  })

export default api
