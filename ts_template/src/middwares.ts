import Koa from 'koa'
import Router from 'koa-router'
import { KoaMiddlewareInterface, Middleware } from 'routing-controllers'
import codes from './constants/code'

@Middleware({ type: 'after' })
export class ResponseHandler implements KoaMiddlewareInterface {
  async use (ctx: Router.IRouterContext, next: (err?: any) => Promise<any>) {
    ctx.body = {
      message: 'ok',
      code: codes.OK,
      data: !!ctx.body ? ctx.body : {}
    }
    ctx.status = 200
    next()
  }
}
