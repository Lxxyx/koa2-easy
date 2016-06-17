/**
 * 把另一个对象的属性安装到指定的对象中
 * @param  {Object} to   指定的对象
 * @param  {Object} from 被安装的对象
 * @return {Object} to   安装完成的对象
 */
export function extend (to, from) {
  const keys = Object.keys(from)
  let i = keys.length
  while (i--) {
    to[keys[i]] = from[keys[i]]
  }
  return to
}

/**
 * 生成随机字符串
 * @param  {Number} len 要生成的长度
 * @return {String} pwd 生成的随机字符串
 */
export function randomString (len) {
  len = len || 5
  const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  const maxPos = chars.length
  let pwd = ''
  for (let i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}

/**
 * @param  {Object} default  默认的对象，包括错误信息与状态码
 * @param  {Object} extra    附加的说明与参数
 */
export class KoaErr extends Error {
  constructor ({ message = 'Error', status = 500 } = {}, ...args) {
    super()
    this.message = message
    this.status = status
    if (args.length > 0) {
      extend(this, args[0])
    }
  }
}

/**
 * 上传文件
 * @type {Object}
 */
import multer from 'koa-multer'
import fsp from 'fs-promise'

const storage = multer.diskStorage({
  async destination (req, file, cb) {
    const dir = `upload/${file.fieldname}/`
    const exists = await fsp.exists(dir)
    if (!exists) {
      await fsp.mkdir(dir)
    }
    cb(null, dir)
  },
  filename (req, file, cb) {
    cb(null, `${file.fieldname}-${file.originalname}`)
  }
})

export const upload = multer({ storage: storage })
