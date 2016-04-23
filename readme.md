## 起因
因为Koa2已经在蓬勃发展中，且Express不太符合自己的需求。
所以基于Koa2订制了一套适合自己的模板。

## 启动
Linux下加sudo
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
router
  .get('/', async(ctx, next) => {
    // 模板渲染，第一个参数为模板名称
    // 模板放置于views文件夹中
    await ctx.render('index', { title: 'Koa-Easy' })
  })
```
### 发送静态HTML文件
```javascript
router
  .get('/index', async(ctx, next) => {
    // 发送静态文件
    await ctx.send(ctx, 'index.html', { root: 'static' })
  })
```
### 发送JSON数据
直接将ctx.body设置为json格式即可
```javascript
router
  .get('/json', (ctx, next) => {
    ctx.body = { test: 'json' }
  })
```
### 读取post数据
ctx.request.body就是post发送的数据
```javascript
router
  .post('/post', (ctx, next) => {
    ctx.body = ctx.request.body
  })
```
### 添加新路由
按照router文件夹中范例编写，并在app.js中添加即可。