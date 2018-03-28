import Router from 'koa-router'

const api = new Router({ prefix: '/api' })

api
  .get('/', ctx => {
    ctx.body = {
      'message': 'this is koa'
    }
  })

export default api
