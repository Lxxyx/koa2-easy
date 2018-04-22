import { Service } from 'typedi'

@Service()
export default class IndexService {
  sayHello () {
    return 'Hello, This is koa2'
  }
}
