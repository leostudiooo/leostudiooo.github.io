---
title: 关于 VS Code 下调试 C++ 的一些踩坑
date: 2024-03-26 00:01:25
categories: 教程
tags:
  - VS Code
  - C++
  - 教程
hide: true
---

# 前言

为什么想到写这么一篇踩坑总结呢？

众所周知，我校开设的 C++ 课程要求同学们使用 Visual Studio 作为开发环境，而这个东西又重又丑。我的电脑 C 盘处于常年爆满的状态，因此也不太具有富裕的空间来安装动辄几十上百 GB 的 Visual Studio 完整环境。而我又刚好已经使用了相当长一段时间的 VS Code，也已经成功使用 mingw64 的 gcc 作为编译环境使用了一段时间，于是就把这个工作流带到了课堂中。不过没想到这就是折腾之路的开始。

# 先决条件

- 一台电脑
- VS Code
- 编译环境（在本文中则针对 mingw32/64 的 gcc）

