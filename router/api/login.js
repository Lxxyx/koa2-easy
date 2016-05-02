import Router from 'koa-router'
import User from './../../models/user'

const login = new Router()

login.post('/', async (ctx, next) => {
  let user = ctx.request.body
})

export default login