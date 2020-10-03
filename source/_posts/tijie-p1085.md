---
title: tijie-p1085
date: 2020-10-03 10:25:02
tags:
  - 洛谷
  - Python
  - oi
  - 题解
---

最近开始搞OI了，在 luogu.com.cn 刷题

```python
a = 0
b = 0
maxtime = 0
answer = 0  #初始化输出answer为0

for i in range(0,7):    #重复7次
    a, b = input().split()  #读入a和b
    a = int(a)
    b = int(b)
    if a+b > maxtime and a+b > 8:   #判断ab之和是否大于当前最大时间且大于8h（用>而不用>=是因为要求输出更靠前的一天）
        answer = i+1
        maxtime = a+b

print(str(answer))  #输出answer
```