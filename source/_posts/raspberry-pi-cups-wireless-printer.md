---
title: 使用树莓派搭建无线打印机
date: 2020-08-17 10:17:42
tags:
- how
- raspberrypi
- printer
- cups
---

# 使用树莓派搭建无线打印机

## 所需器材

- [x] 树莓派
- [x] 打印机
- [x] 数据线
- [ ] 网线（可选）
- [x] 网络连接(LAN/WLAN)



## CUPS介绍

[CUPS](cups.org)(Common UNIX Printing System，通用Unix打印系统)是Fedora Core3中支持的打印系统，它主要是使用IPP(Internet Printing Protocol)来管理打印工作及队列，但同时也支持"LPD"(Line Printer Daemon)和"SMB"(Server Message Block)以及AppSocket等通信协议。

Unix/Linux下打印总是有许多限制。但若安装了CUPS（Common UNIX Printing System），你将会得到一个完整的打印解决方案。

在UNIX/Linux 下打印的方法很久以来都是用lpd（命令行方式的打印守护程序），它不支持IPP（Internet打印协议），而且也不支持同时使用多个打印设备。

CUPS给Unix/Linux用户提供了一种可靠有效的方法来管理打印。它支持IPP，并提供了LPD，SMB（服务消息块，如配置为微软WINDOWS的打印机）、JetDirect等接口。CUPS还可以浏览网络打印机。

*(以上内容来自百度百科)*



## 教程

### 静态IP设置

编辑`/etc/dhcpcd.conf`，在文件末尾添加如下内容：

```c#
interface eth0

static ip_address=192.168.0.10/24
static routers=192.168.0.1
static domain_name_servers=192.168.0.1

interface wlan0

static ip_address=192.168.0.200/24
static routers=192.168.0.1
static domain_name_servers=192.168.0.1
```

其中，`eth0`是有线的配置，`wlan0`是无线配置

 `ip_address`就是静态IP，后面要接`/24`(e.g 192.168.1.12/24)

 `routers`是网关(e.g. 192.168.1.1)

 `static domain_name_servers`是DNS(e.g. 192.168.1.1)

 然后再在命令行执行：

```bash
sudo reboot
```



### 安装CUPS

在终端中执行：

```bash
sudo apt install cups
```

或者

```bash
sudo apt-get install cups
```

然后静待安装。



### 配置CUPS

#### 添加pi到管理员账户

继续执行：

```bash
sudo usermod -a -G lpadmin pi
```

这一步的作用是令`pi`用户（或者其他用户，这里以`pi`为例）成为管理员，否则我们无法通过该用户配置打印机。

现在，将打印机的USB线缆插入到树莓派的USB端口中。



#### 登陆CUPS后台

用浏览器访问`刚才设置的静态IP地址:631/admin`。

单击`Add Printer`，网页会要求你输入刚才配置的管理员账户的用户名和密码。

![image-20200817123416365](//img//image-20200817123416365.png)



#### 配置打印机

##### 选择打印机

如果没有问题，你现在应该看到这样一个界面：

![image-20200817123822823](//img//image-20200817123822823.png)

在`Local Printers`找到你的打印机并选中（我的就是那个`Canon MP280 Series`），如果没有请选择类似这样`usb://Canon/MP280%20series?serial=A0F451&interface=1`的选项。

![image-20200817124230606](//img//image-20200817124230606.png)

如果你的是网络打印机，请在`Network Printers`中选中相应协议，或添加已扫描到的打印机。

然后单击`Continue`。



##### 添加描述并共享打印机

描述随便写（默认就行）。但一定要尽量短。

`Location`随便填就行，如`Pi`, `Lab`等等。

记住勾选`Share This Printer`！

![image-20200817124634571](//img//image-20200817124634571.png)



##### 选择驱动

一般选最靠上的那个就行了。看清楚驱动型号！

![image-20200817124956133](//img//image-20200817124956133.png)





至此，打印机的配置就完成了。[]\~(￣▽￣)~

你可以在`树莓派IP:631`管理你的打印机。



### 配置电脑端

#### Windows 10

打开`设置-设备-打印机和扫描仪`。点击`添加打印机和扫描仪`。

此时，电脑会自动开始搜索打印机设备。

一般来说，电脑可以自动搜索到你的打印机，且命名格式为`你的打印机名称@树莓派IP`。

如果没有搜索到，请点击`我需要的打印机不在列表中`，并参照Windows 7及以下的方法操作。



#### Windows 7及以下

打开`控制面板-设备和打印机-添加打印机`。

点击`按名称选择共享打印机`。

打开刚才的网页，复制地址（如https://192.168.1.12:631/printers/Canon_MP280_series），粘贴到文本框中。

选择合适的驱动。

然后点击完成（推荐打印一张测试页）。



#### macOS

见[Apple支持文档](https://support.apple.com/zh-cn/guide/mac-help/mh14004/10.15/mac/10.15)`按 IP 地址添加网络打印机`部分，填入地址（如https://192.168.1.12:631/printers/Canon_MP280_series）。



#### GNU/Linux

这篇教程就是针对Linux的啊喂。

按照[上面的操作步骤](###安装CUPS)添加打印机（协议为http或者https）。







至此，本教程圆满结束！(完结撒花.jpg)

哔哩哔哩：https://space.bilibili.com/244815810

GitHub：https://github.com/leostudiooo