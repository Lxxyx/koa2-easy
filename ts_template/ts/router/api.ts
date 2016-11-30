import * as Router from 'koa-router'

const api = new Router({
    prefix: '/api'
})

api
    .get('/', ctx => {
        ctx.body = {
            message: 'ok',
            status: 200,
            data: {}
        }
    })

export default api