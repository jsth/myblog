var Index = require('../app/controllers/index');
var User = require('../app/controllers/user');
var Article = require('../app/controllers/article');

var Admin=require('../app/controllers/admin');


var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

module.exports = function (app) {
  // Index
  app.get('/', Index.index)

  //User
  app.get('/signup', User.showSignup);//注册页
  app.get('/signin', User.showSignin);//登录页

  //article 文章相关
  app.get('/article/:id', Article.detail);//文章详情页



  app.get('/admin/home', Admin.adminIndex);//后台首页
  app.get('/admin/article/new', Admin.new);//后台文章录入页
  app.get('/admin/article/update/:id', Admin.update);//重新更新文章
  app.post('/admin/article/save', Admin.save);//后台文章录入页

  app.get('/admin/categorymanage', Admin.categorymanage);//后台文章分类管理
  app.get('/admin/categorymanage/add', Admin.categorymanageAdd);//后台文章分类管理添加
  app.get('/admin/categorymanage/update/:id', Admin.categorymanageUpdate);//后台文章分类更新名称
  app.post('/admin/categorymanage/save', Admin.categorymanageSave);//后台文章分类管理新建分类


  app.get('/admin/articlemanage', Admin.articlemanage);//后台文章管理
  
  // 404 page
  // app.use(function (req, res) {
  //   if (!res.headersSent) {
  //     res.status(404).render('404')
  //   }
  // })
}
