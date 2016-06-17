import Router from 'koa-router'
import { upload } from './../helper'

const test = new Router({
  prefix: '/test'
})

test
  .get('/json', ctx => {
    ctx.body = {
      test: 'json'
    }
  })
  .get('/', ctx => {
    ctx.body = 'this is test page!'
  })
  .post('/post', ctx => {
    ctx.body = ctx.request.body
  })
  .post('/file', upload.single('avatar'), async ctx => {
    ctx.body = ctx.req.file
  })
  .post('/files', upload.any(), async ctx => {
    ctx.body = ctx.req.files
  })

export default test
