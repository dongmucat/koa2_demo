const Router = require('koa-router');
const home = new Router();
const db = require('../utils/db.js');
// 这里的 '/' 就是指向 index.js 中的 /home
home.get('/', async (ctx) => {
    let data = await new Promise((resolve, reject)=>{
        let sql = `select * from userName`;
        db.query(sql, (err, data)=>{
            if(err) reject(err);
            resolve(JSON.stringify(data));	// 返回拿到的数据
        })
    })
    ctx.body = data;
})
module.exports = home;