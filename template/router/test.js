import Router from 'koa-router'
import { upload } from './../helper'

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
    ctx.body = 'this is test page!'
  })
  .post('/post', (ctx, next) => {
    ctx.body = ctx.request.body
  })
  .post('/file', upload.single('avatar'), async (ctx, next) => {
    ctx.body = ctx.req.file
  })

export default test
