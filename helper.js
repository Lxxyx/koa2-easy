/**
 * 把另一个对象的属性安装到指定的对象中
 * @param  {Object} to   指定的对象
 * @param  {Object} from 被安装的对象
 * @return {Object}      安装完成的对象
 */
function extend (to, from) {
  let keys = Object.keys(from)
  let i = keys.length
  while (i--) {
    to[keys[i]] = from[keys[i]]
  }
  return to
}

/**
 * @param  {Object}   默认的对象，包括错误信息与状态码
 * @param  {Object}   附加的说明与参数
 */
class KoaErr extends Error {
  constructor({ message = 'Error', status = 500 } = {}, ...args) {
    super()
    this.message = message
    this.status = status
    if (args.length > 0) {
      extend(this, args[0])
    }
  }
}


export {
  KoaErr,
  extend
}