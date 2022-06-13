const Router = require('koa-router');
const list = new Router();

list.get('/', async (ctx)=>{
    ctx.body = "列表页";
})

list.get('/baby', async (ctx)=>{
    ctx.body = "列表页--婴儿";
})

module.exports = list;