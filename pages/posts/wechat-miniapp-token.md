---
layout: post
title: 记抓取小程序用户 Token
tags: [微信小程序, token, 技术]
categories: [教程, 技术]
date: 2025-05-15 10:02:11
type: github
url: https://github.com/leostudiooo/GOOSE
---

## 前言

之前看到一个项目 SEU_exercise，通过使用 Cheat Engine 搜索内存来获取跑操小程序的 token 来完成自动化跑操。但那是个闭源项目，最开始上传的是使用 Pyarmor 加密的代码。顺带一提，作者竟然拿这个玩意按使用次数收费，真是无耻。我当时特别生气，刚好看到这个项目下面有老哥 Issue 开团“#4 经典了开源付费“，作者竟然大言不惭回复了“如果您对开源或商业模式有疑问，欢迎私信进一步交流”，我就去跟了一嘴：

> 据我所知，在 run.py 和 validate.py 中的注释中
>
> ```py
> # Pyarmor 9.1.1 (trial), 000000, non-profits, 2025-04-22T21:05:48.576426
> ```
> 您所使用的 Pyarmor 9.1.1 试用版许可证的 使用条款 似乎并不允许您使用由 Pyarmor 加密的脚本进行营利行为哦？然后居然开始卖次数、收钱钱，连个皮包公司都没有，就把商业梦编进代码了，欸好厉害好厉害～
>
> 不过拜托拜托，下次至少买一个基础版授权好嘛？税后 CNY 359 的价格想必对您这样的商业天才来说一定也只是洒洒水而已哦？不然我都不好意思继续到 Wayback Machine 去 截图存档、fork 留纪念欸～
>
> 反手一个举报到 Pyarmor 或者体育系的话，大家都～不～会～好～过～哦？

结果作者直接在下一个 commit 把加密源代码删掉了，改用 Nuitka 直接编译为了二进制，还加了个莫名其妙的“不允许逆向工程”的声明。但提交记录不会骗人，直接回退就可以看到原来 Pyarmor 的版本了。关于解密的过程又可以写一篇文章了，暂且按下不表。总之经过一些逆向工程和重构工作，`leostudiooo/OpenSEUExercise` 就诞生了；但好景不长。

首先是在 2025 年 4 月 29 日，SEU_exercise 的作者将项目转为了 Public Archive；然后 5 月 6 日，财迷心窍、心胸狭隘的作者向 GitHub 提交了 DMCA（数字千年版权法）投诉，要求删除 OpenSEUExercise 及其所有 fork；于是在 5 月 8 日早上 6:00(GMT +8)，我收到了 GitHub 的邮件，称我的项目被删除了。虽然我和 LittleLittleGull（在逆向工程完成后对项目进行了大量的重构，因为原作者的代码质量实在是一言难尽）都留有本地备份，但我们仍然决定从头开始：一是为了避免潜在的法律纠纷（虽然他也不大可能真的告我，毕竟他自己的项目也是非法的；另外一旦我提交 counter notice，我的个人信息就会向他披露，这当然是有很大风险的）；二是反正重构也基本完成了，从头开始也很快。

总之，GOOSE (GOOSE Opens workOut for SEU undErgraduates) 就这样诞生了。出于设置一定的门槛来防止滥用的考虑，我没有在 GOOSE 的 README 中公开 token 的获取方法；于是放到这里。

## 获取 Token

实际上获取 token 的方法非常简单，只需要使用 Fiddler 或者 Charles 等抓包工具抓取小程序的请求即可。原项目中作者还给出了基于 Cheat Engine 的方法，实际上也就是在内存中搜索 token 的值。有时候找不到 token，还有一种通过抓取小程序 OpenID 然后用脚本模拟登录获取的方式（这种方式比较曲折，暂且不讲）。

### Token 的结构

Token 的结构大致如下：

```
eyJ0eXAiOiJKc29uV2ViVG9rZW4iLCJhbGciOiJIUzI1NiJ9.一串base64.签名
```
这是标准 JSON Web Token (JWT) 格式，一共三段。第一段是头部，第二段是载荷，第三段是签名。

头部解码之后是一个 JSON 对象，包含了 token 的类型和签名加密算法：

```json
{
  "typ": "JsonWebToken",
  "alg": "HS256"
}
```

载荷解码之后也是一个 JSON 对象，包含了姓名、token 类型、用户 ID、账号、过期时间和生效时间等信息：

```json
{
  "name": "XXX",
  "token_type": "token",
  "userid": "4766XXXXXXXXXXX335",
  "account": "2XXXXXXX8",
  "exp": 1778516619,
  "nbf": 1746980619
}
```

签名是用 HMAC SHA256 算法加密的，密钥尚不清楚。

### 使用 Cheat Engine 抓取小程序内存中的 Token

1. 打开小程序，登录账号，进入跑操页面。
2. 打开 Cheat Engine，选择小程序的进程。
3. 在 Cheat Engine 中搜索 `Bearer `，选择 `String` 类型，点击 `First Scan`。

这个时候应该就会有大概几个到十几个结果，其中会有一个是上面提到的 token 的值。别的搜索结果通常并不包含 token，可能是引用了 token 的变量名或者其他的字符串。总之，找到一个包含 `Bearer ` 的字符串，右键点击，选择 `Browse this memory region`，就可以看到 token 的值了。没有找到就多看几个，或者直接尝试使用 `eyJ0eXAiOiJKc29uV2ViVG9rZW4iLCJhbGciOiJIUzI1NiJ9` 作为搜索值（即 Token 的第一段），应该也能找到。

4. 然后就可以复制 token 的值了。

### 抓包获取

1. 打开 Fiddler 或者 Charles 等抓包工具，设置好代理。
2. 打开小程序，登录账号，进入跑操页面。
3. 在抓包工具中找到请求的 URL。
4. 找到请求的 Header 中的 `Authorization` 字段，值就是 token 的值。
5. 复制 token 的值，去掉前面的 `Bearer `，只保留后面的部分。

## 结语

看到这里你应该已经获取到 token 了，你可以直接把它放进配置文件中或者粘贴到 TUI 里面。接下来就可以使用 GOOSE 进行自动化跑操了。

> 自动虽好，可不要贪多哦。
