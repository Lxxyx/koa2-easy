## 注意：
请使用Node6以上版本，获得更好的性能与ES6支持。
启用Babel-es2017，不再对一些Node6已支持的特性转码。

## 起因
因为Koa2已经在蓬勃发展中，Async/Await能切实的避免回调地狱。所以基于Koa2订制了一套模板。

全局安装koa2-easy，之后使用koa2命令即可在当前目录一键生成服务端程序。地址为：当前目录/koa2

```
npm i koa2-easy -g

koa2

cd koa2-easy && npm i （推荐使用cnpm）
```

## 功能
1. 渲染模板（[artTemplate](https://github.com/Lxxyx/koa-artTemplate)）
2. 发送静态文件，如HTML文件。
3. 编写自定义路由与Restful Api，默认支持CORS跨域
4. 读取post数据
5. 纯ES6/7编写，使用koa2的Async/Await，避免回调地狱
6. 自定义错误，可附加错误信息
7. 默认支持gzip，减少传输体积，加快传输速度
8. 支持文件上传
9. 开箱即用，无需折腾

## 启动
直接运行run.js即可  
因为Koa2使用babel和ES7的Async/Await，所以需要使用babel转译启动，所以必须运行run.js，而非app.js。   
```
node run.js
```
### 开发模式
检测到文件变动，会自动重启服务器  
```
npm i
npm run dev
```
### 服务器部署
```
npm i pm2 -g
npm run pm2
```
### 指定端口启动
```
PORT=8000 npm run dev
PORT=8000 npm run pm2
```
把8000替换成任何你想使用的端口即可

### 配合Nginx实现反向代理（可选）
推荐使用[VeryNginx](https://github.com/alexazhou/VeryNginx)实现。
> 具体配置（需要先安装VeryNginx）：
先配置一个 Matcher ： host=app.xxxx.com ，用来提取出来所有访问 host 为 **app.xxxx.com** 的请求 
然后配置 Proxy Pass 把这个请求转发到 127.0.0.1:3000 就可以了

## 使用
需要具有ES6基础。

### 模板渲染
```javascript
// router/index.js
router
  .get('/', async ctx => {
    // 模板渲染，第一个参数为模板名称
    // 模板放置于views文件夹中
    ctx.body = ctx.render('index', { title: 'Koa2-Easy' })
  })
```
### 发送静态HTML文件
```javascript
// router/index.js
router
  .get('/index', async (ctx, next) => {
    // 发送静态文件
    await ctx.send(ctx, 'index.html', { root: 'static/index' })
  })
```
### HTML文件中，静态文件的路径处理
把HTML文件放入static文件夹中。单独开辟文件夹。  
如首页index.html，则放入/static/index文件夹。引用CSS等文件时，需加入文件夹名称。
```html
<!-- /static/index/index.html -->
<link rel="stylesheet" type="text/css" href="/index/css/index.css">
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

```javascript
// 添加/api路由

// 将api前缀设置为/api
const router = new Router({
  prefix: '/api'
})

// 对Api进行操作
router
  .get('/', (ctx, next) => {
    ctx.body = "This is Api page"
  })
```

```javascript
// 在app.js中引用
import api from './router/api'
app.use(api.routes())
```

### 错误处理
添加了自定义错误，调用时使用ctx.Err。

```javascript
// 一般错误处理，message和status为必须选项，否则为默认的Error与500。status为http状态码
throw new ctx.Err({ message: '用户已存在', status: 400})
// 用户收到的信息： {"message": "用户已存在","status": 400"}

// 附加额外错误信息，写在第二个对象里就行
throw new ctx.Err({ message: '用户已存在', status: 400}, {'error': true})
// 用户收到的信息： {"message": "用户已存在","status": 400","error": true}
```
