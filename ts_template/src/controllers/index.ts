import { Get, JsonController } from 'routing-controllers'
import { Inject } from 'typedi'
import IndexService from '../services/index'

@JsonController('/')
export default class IndexController {

  @Inject()
  service: IndexService

  @Get('/')
  index () {
    return this.service.sayHello()
  }
}
