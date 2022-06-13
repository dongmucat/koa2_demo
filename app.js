const Koa = require('koa2')
const cors = require('koa2-cors')
const router = require('./router/index')
const path = require('path')
const static = require('koa-static')
const app = new Koa();
const port = 5050;

// 匹配不到页面的全部跳转去404
app.use(async (ctx, next) => {
    await next();
    if (parseInt(ctx.status) === 404) {
        ctx.response.redirect("/errorPage")
    }
})
// 这里cors中间件一定要写在路由之前
app.use(cors());
app.use(static(path.join(__dirname+'/assets')));
app.use(router.routes(), router.allowedMethods());
app.listen(port, ()=>{
    console.log('Server is running at http://localhost:'+port);
})