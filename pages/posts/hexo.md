---
title: 使用Hexo在GitHub Pages部署属于你自己的博客！
date: 2021-02-23 17:52:20
categories: 教程
tags: 教程
---

## 前期准备工作

### 创建一个 GitHub 账号（如有可跳过此步骤）

点击[此链接](http://www.github.com/)跳转到 GitHub，全球最大的代码托管网站。

![img](/img/gitsup.jpg)

注册过程十分简单，这里不再赘述。



### 在 GitHub 上创建一个新的项目。

单击 右上角【+】- New Repository 新建项目。（以下简称仓库）

![img](https://img2018.cnblogs.com/blog/1212465/201909/1212465-20190904143955779-1300863677.png)

然后填写项目信息。

仓库的名字格式应为：`你的用户名.github.io` 。

比如我的用户名是`leostudiooo`，那么我的仓库就叫`leostudiooo.github.io`。

在*description*一栏填写简介。

![img](https://img-blog.csdnimg.cn/20181218144438464.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hvaGFpeng=,size_16,color_FFFFFF,t_70)

此处选择 *Public*。

然后勾选 *Initialize the repository with a README*。（此步的作用是用一个 README.md 对这个仓库进行初始化）

完成后点击下面的 *Create Repository*。

除此之外，你还需要一个能写 Markdown 的编辑器。我使用的是 [Typora](https://typora.io)。

## 部署 Hexo

### 下载 Git 和 Node.js

可以根据 [Hexo](http://bbs.jnschool.com/hexo.io) 官网的教程下载。

###  安装 Hexo

在安装完 git 和 node.js 以后，我们需要打开 `cmd.exe`（如果你配置好了执行策略，`powershell` 也是一个不错的选择 。）

*咋打开就不用说了吧…… Win+R 输入 `cmd` 回车*

运行 `npm install -g hexo-cli` 来安装Hexo。

使用 `git clone` 命令克隆到本地。

`cd` 切换到这个文件夹，运行 `npm install`。

这时候，你的文件夹里面会多出一堆文件。不要慌，慢慢来。

你的文件夹结构应该大致是这样：

```
.
├── config.yml
├── package.json
├── scaffolds
├── source
|  ├── _drafts
|  └── _posts
└── themes
```

然后，你可以参照 [Hexo 的官方教程](https://hexo.io/zh-cn/docs/configuration.html) 对 `_config.yml` 进行配置。
接下来是几个常用命令：

`hexo new  `文章名称（之后你需要在 `/source/_posts/ ` 下找到你刚创建的 文章名称.md 并对其内容进行修改。）

`hexo generate`（生成页面文件到/public/ 下）

`hexo server`（本地服务器，用浏览器访问 localhost:4000 ）

`hexo clean`（清除/public/ 下缓存文件，慎用！）

### 安装一个好看的主题



安装 [hexo-theme-yun](https://github.com/YunYouJun/hexo-theme-yun)

### 部署到GitHub

编辑 `_config.yml`，在末尾添加如下内容：

```yaml
deploy:
  type: git
repo: https://github.com/你的用户名/你的仓库 #e.g. https://github.com/leostudiooo/leostudiooo.github.io
  branch: master #设置分支为master，默认是gh-pages
```



然后在此目录下（命令行中）执行 `npm install hexo-deployer-git`。

接下来，执行 `hexo deploy` 部署到 GitHub。期间，会要求你登录。（如果你有其他文件需要一同部署到 GitHub Pages，请将它们复制到 `public/ ` 下。）

部署完成后，就大功告成啦！
如果你愿意折腾，也可以去试试Travis CI的自动部署。这是 [我参考的教程](https://blog.csdn.net/Xiong_IT/article/details/78675874)。