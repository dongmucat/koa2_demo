const Router = require('koa-router');
const router = new Router();
const home = require('./home')
const list = require('./list')
const errorPage = require('./errorPage')
const login = require('./login')

router.use('/home', home.routes(), home.allowedMethods());
router.use('/list', list.routes(), list.allowedMethods());
router.use('/errorPage', errorPage.routes(), errorPage.allowedMethods());
router.use('/login', login.routes(), login.allowedMethods());

// 路由重定向
router.redirect('/', '/home');
module.exports = router;