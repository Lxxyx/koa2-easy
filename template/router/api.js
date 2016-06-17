import Router from 'koa-router'

const api = new Router({
  prefix: '/api'
})

api
  .get('/', ctx => {
    ctx.body = 'This is Api page'
  })

export default api
