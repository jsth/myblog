# myblog
基于 Node.js 的个人开源博客系统，采用响应式布局，支持移动设备直接访问，功能全面，美观大方。



# 目录结构

对应文件及文件夹的用处：

1. `models`: 存放操作数据库的文件
2. `public`: 存放静态文件，如样式、图片等
3. `routes`: 存放路由文件
4. `views`: 存放模板文件
5. `index.js`: 程序主文件
6. `package.json`: 存储项目名、描述、作者、依赖等等信息


# 安装依赖模块

对应模块的用处

1. `express`: web 框架
1. `express-session`: session 中间件
1. `connect-mongo`: 将 session 存储于 mongodb，结合 express-session 使用
1. `moment`: 时间格式化
1. `config-lite`: 读取配置文件

# 配置文件

config/default.js

```
module.exports = {
  port: 3001,
  session: {
    secret: 'myblog',
    key: 'myblog',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/myblog'
}
```

配置释义：

1. port: 程序启动要监听的端口号
2. session: express-session 的配置信息，后面介绍
3. mongodb: mongodb 的地址，以 mongodb:// 协议开头，myblog 为 db 名


# 功能设计与路由设计

**博客前台**

- 登录
	1. 登录页：GET /signin
	2. 登录：POST /user/signin
- 注册页
	1. 注册页：GET /signup
	2. 注册：POST /user/signup
- 文章列表页
- 文章详情页





