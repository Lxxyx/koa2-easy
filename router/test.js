import Router from 'koa-router'

const test = new Router({
  prefix: '/test'
})

test
  .get('/json', (ctx, next) => {
    ctx.body = {
      test: 'json'
    }
  })
  .get('/', (ctx, next) => {
    ctx.body = "this is test page!"
  })
  .post('/post', (ctx, next) => {
    ctx.body = ctx.request.body
  })

export default test
