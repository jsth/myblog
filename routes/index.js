var Index = require('../app/controllers/index');
var User = require('../app/controllers/user');
var Article = require('../app/controllers/article');

var Admin=require('../app/controllers/admin');

module.exports = function (app) {
  // Index
  app.get('/', Index.index)

  //User
  app.use('/signup', User.showSignup);//注册页
  app.use('/signin', User.showSignin);//登录页

  //article 文章相关
  app.use('/article/:id', Article.detail);//文章详情页



  app.use('/admin/home', Admin.adminIndex);//后台首页
  app.use('/admin/article/new', Admin.new);//后台文章录入页
  app.use('/admin/categorymanage', Admin.categorymanage);//后台文章分类管理
  app.use('/admin/articlemanage', Admin.articlemanage);//后台文章管理
  
  // 404 page
  // app.use(function (req, res) {
  //   if (!res.headersSent) {
  //     res.status(404).render('404')
  //   }
  // })
}
