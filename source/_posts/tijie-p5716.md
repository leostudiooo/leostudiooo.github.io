---
title: 题解 - P5716
date: 2020-10-02 21:59:59
tags: 
  - 题解
  - 洛谷
  - Python
  - oi
---

原题链接：https://www.luogu.com.cn/problem/P5716

```python
yr, mon = input().split()	#输入年份和月份
yr = int(yr)
mon = int(mon)
runvar = False			#该变量的值用来判定是否为闰年（若闰年则为True，非闰年则为False）
days = 0


def run():			#定义用于判断闰年的函数
    global runvar
    yr1 = yr % 100
    				#判断年份是否能被100整除
    if yr1 != 0:
        if yr % 4 == 0:		#判断年份是否能被4整除
            runvar = True
        else:
            runvar = False
    
    elif yr1 == 0:
        if yr % 400 != 0:
            runvar = False
        else:
            runvar = True



def day():			#定义用于判断天数的函数
    global days
    if mon == 2:		#2月单独作为一种情况
        if runvar == True:
            days = 29
        else:
            days = 28
    elif mon == 1 or mon == 3 or mon == 5 or mon == 7 or mon == 8 or mon == 10 or mon == 12:
        days = 31
    else:
        days = 30


run()
day()
print(str(days))		#输出
```
