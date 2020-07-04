---
title: 如何制作开源Surface Dial
date: 2020-07-04 12:11:42
tags: 
  - how
  - surface dial
---

## 介绍

本项目由我和[B站UP主 EddyWang](https://space.bilibili.com/8555835)共同维护。[GitHub仓库](https://github.com/Eddddddddy/Surface_Dial_Arduino)中有此项目源文件，欢迎访问下载。

目前，该项目有两个版本(Pro&Lite)，后期会进行整合。

### 如何制作？

 [![视频教程(Pro版，由Eddy制作)](https://leostudiooo.github.io/img/bili.png)](https://www.bilibili.com/video/BV17K411W78w)

Lite版的视频暂时还没时间做。

#### 1. 将项目clone到本地

如图，点击clone下的Download zip（当然如果你有一定的GitHub基础可以直接clone到本地）

<img src="/img/image-20200621184306016.png" alt="image-20200621184306016"  />

下载完成后解压。

文件目录结构如下：

```
Surface_Dial_Arduino
│  .gitignore
│  bom.xlsx
│  LICENSE
│  README.md
│
├─lib //所需库
│  └─TrinketHidCombo
│
├─PCB_with_gerber //PCB和打板文件
│  │  Gerber_2in1.zip //二合一打板文件
│  │  README.md
│  │
│  ├─Lite
│  │      BOM_Project Dial Lite.csv
│  │      Gerber_Project Dial Lite.zip //Lite打板文件
│  │      Project Dial Lite.json
│  │
│  └─Pro
│      │  Project Dial attiny v2 github.zip //Pro打板文件
│      │  Project Dial MLB attiny.PcbDoc
│      │  Project Dial MLB Gerber.zip
│      │  Project Dial MLB LCEDA.json
│
├─src //代码目录
│  ├─attiny_fuse_2
│  │      attiny_fuse_2.ino //熔丝恢复器
│  │
│  └─Surface_Dial_attiny //主体代码目录
│      │  Surface_Dial_attiny.ino
│      │  Surface_Dial_attiny_Lite.ino
│      │
│      └─micronucleus-1.11
│
├─stl model //3D打印文件目录
│      surface dial t v2.3.STL
│      surface dial v2.3.STL
│
└─tools
    └─avrdudess_20191012 //工具
```



#### 2. 购买元器件

| 元器件名                               | 数量  |
| -------------------------------------- | ----- |
| attiny85-20su soic8                    | 1     |
| ec11e1834403                           | 1     |
| usb type-c 母座 16p 沉板1.6mm          | 1     |
| 0603 自恢复保险丝 0.5A 6v              | 1     |
| s0805 J3Y 三极管 SOT-23 *可选*         | 1     |
| 0603 1.5k电阻                          | 1     |
| 0603 4.7k电阻                          | 3     |
| 0603 5.1k电阻                          | 2     |
| 0603 66.5欧电阻 *可替换为22欧*         | 2     |
| 0603 0.1uf 电容                        | 1     |
| 0603 4.7uf 电容                        | 1     |
| 1206 3.6v 齐纳二极管                   | 2     |
| M2*6 平头螺丝                          | 3     |
| M4*8 圆头螺丝                          | 3     |
| 0.5mm 硅胶防滑垫                       | 5*5cm |
| 48mm 铝合金旋钮帽                      | 1     |
| iPhone 7 taptic engine 线性马达 *可选* | 1     |

#### 3. 打板

- 用`Gerber_2in1.zip`**（强烈推荐）**`Gerber_Project Dial Lite.zip`或`Project Dial attiny v2 github.zip`打板。
- 服务商可选择[嘉立创](sz-jlc.com)（因为他家有5元样板服务，5张还包邮）
- 尺寸：`4x4`或`3.95x4.05`cm
- 过孔盖油
- 其他都选默认
- PS 记得备注两条内容：1. 此项目是开源项目，并非拆单；2. 请勿做半孔处理。

#### 4. 3D打印

- 把`surface dial t v2.3.STL`和`surface dial v2.3.STL`都打出来。
- ***记得一定要把它翻平再打印！***
- 你可以~~白嫖~~使用我们学校的3D打印机进行打印。

#### 5. 手工制作

- 请耐心等待视频教程。
- 可以在[GitHub](github.com/leostudiooo)和[哔哩哔哩](space.bilibili.com/244815810)上关注我
- 个人网站：[Github Pages](leostudiooo.github.io)

