import Crypto from 'crypto'
import Router from 'koa-router'
import User from './../../models/user'

let salt = 'Lxxyx_Awesome'
const register = new Router()

register.post('/', async (ctx, next) => {
  // let isExist = await User.find({ username: ctx.request.body.username }).length !== 0
  // if (isExist) {
  //   throw new ctx.Err({ message: '用户已存在', status: 400 })
  // }
  let user = ctx.request.body
  let sha256 = Crypto.createHmac('sha256', user.password)
  user.password = sha256.digest(salt)
  ctx.body = user
})

export default register
