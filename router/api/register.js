import Crypto from 'crypto'
import Router from 'koa-router'
import User from './../../models/user'
import { extend } from './../../helper'

const register = new Router()

register.post('/', async (ctx, next) => {
  // 查找用户是否已存在
  let results = await User.find({ username: ctx.request.body.username })
  if (results.length !== 0) {
    throw new ctx.Err({ message: '用户已存在', status: 400 })
  }
  // 加密信息
  let user = ctx.request.body
  let md5 = Crypto.createHash('md5')
  md5.update(user.password)
  user.password = md5.digest('hex')
  // 创建新用户
  user = await new User(ctx.request.body).save()
  // 确保发送时，密码不被发送出去
  delete user['_doc'].password
  ctx.body = user
})

export default register
