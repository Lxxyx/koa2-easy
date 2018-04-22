import { Get, JsonController } from 'routing-controllers'

@JsonController('/')
export default class IndexController {

  @Get('/')
  index () {
    return 'This is Koa2-Easy'
  }
}
