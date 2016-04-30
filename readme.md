## 起因
因为Koa2已经在蓬勃发展中，且Express不太符合自己的需求。
所以基于Koa2订制了一套适合自己的模板。

## 功能
1. 渲染模板（EJS）
2. 发送静态文件
3. 编写自定义路由，编写Restful Api，支持CORS跨域
4. 读取post数据
5. 纯ES6/7编写，使用koa2的Async/Await，避免回调地狱
6. 调用数据库（Mongodb,Mongoose），需要提前安装mongodb
7. 开箱即用，无需折腾

## 启动
Linux下加sudo
只能使用如下两种方式启动（因为指定了babel-node来直接支持ES6）：
```
npm i
npm run dev
```
## 服务器部署
```
npm i pm2 -g
npm run pm2
```

## 使用
需要具有ES6基础。

### 模板渲染
```javascript
// router/index.js
router
  .get('/', async (ctx, next) => {
    // 模板渲染，第一个参数为模板名称
    // 模板放置于views文件夹中
    await ctx.render('index', { title: 'Koa-Easy' })
  })
```
### 发送静态HTML文件
```javascript
// router/index.js
router
  .get('/index', async (ctx, next) => {
    // 发送静态文件
    await ctx.send(ctx, 'index.html', { root: 'static' })
  })
```
### 发送JSON数据
直接将ctx.body设置为json格式即可
```javascript
// router/test.js
router
  .get('/json', (ctx, next) => {
    ctx.body = { test: 'json' }
  })
```
### 读取post数据
ctx.request.body就是post发送的数据
```javascript
// router/test.js
router
  .post('/post', (ctx, next) => {
    ctx.body = ctx.request.body
  })
```
### 添加新路由
按照router文件夹中范例编写，并在app.js中添加即可。

### 读写数据库
```javascript
// app.js
// 连接数据库
import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost/koa')
```
```javascript
// router/test.js
import mongoose from 'mongoose'

let Cat = mongoose.model('Cat', {
  name: String,
  age: {
    type: Number,
    default: 0
  }
})

router  
  .post('/db', async (ctx, next) => {
    ctx.body = await new Cat(ctx.request.body).save()
  })
  .post('/db/find', async (ctx, next) => {
    let result = await Cat.find(ctx.request.body)
    if (result.length === 0 ) {
      ctx.status = 404
      ctx.body = {error: "Not Found"}
      return false
    }
    ctx.body = result
  })
```