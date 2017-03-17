import * as Router from 'koa-router'

const api = new Router({
  prefix: '/api'
})

api
  .get('/', ctx => {
    ctx.body = {}
  })

export default api