---
title: 在 RoboMaster EP 上用 3 种方法画椭圆！
date: 2021-07-28 22:34:44
katex: true
tags:
  - RoboMaster
  - DJI
  - 教程
  - 算法
---

# 背景

话说我们的国产之光 [大疆创新（DJI）](https://dji.com) 公司不仅很会造无人机，而且还很注重人才的培养。于是，他们就弄出了 [RoboMaster 机甲大师](https://robomaster.com) 系列活动。最开始，它是面向各大高校的机器人比赛。在大疆进军教育市场后，他们的团队又造出了 RoboMaster S1/EP 系列的教育机器人。由于大疆在内部已经做了图形化编程的适配，这类机器人就相对更适合青少年 ~~*反正我是玩不惯图形化编程*~~，~~也许~~ 有利于扩大市场。

在这样的背景下，大疆联合几所高校（今年为 **西安交通大学、电子科技大学、华中科技大学**），与其共同开展“疆来计划”，旨在提升青少年，尤其是高中生的科学素养和编程技能。因此我 ~~抱着试试看的态度~~ 本着“能学到东西就是好地方”的宗旨报名参加了今年电子科技大学的“疆来计划”。

当然，要参加是有门槛的，得先做题，还要通过视频面试这样的选拔，才能进入到最终的线上和线下夏令营活动。既然要做题，就肯定少不了一些奇奇怪怪的、平常根本不会想到的思路清奇的题。于是就有了我们这一篇博客。



# 题目

> 在“大疆教育平台”下载模拟器，通过“大师之路”的学习，控制EP机器人，在模拟器中完成椭圆形图案的绘制，尽可能用更多的方案绘制出椭圆形轨迹（包括但不限于车头方向不变，车头方向时时改变、车头始终指向焦点等）（提交轨迹绘制截图及程序截图）

那他既然要求用多种方法画椭圆，我就用勉为其难地用给出的三种都做一遍吧。



# 解法

## 初始化

![image-20210729182759320](/img/image-20210729182759320.png)



## 车头方向不变

这种解法参考了 [Scratch 画椭圆的方法（百度贴吧）](https://tieba.baidu.com/p/5820045234) 的 9 楼。

### 效果图示

![image-20210730171001690](/img/image-20210730171001690.png)

### 数学原理

椭圆的参数方程：

<div>
$$\begin{equation}
    \left\{
        \begin{aligned}
            x=a\cos\theta\\
            y=b\sin\theta\\
        \end{aligned}
    \right.
\end{equation}$$
</div>

### 程序实现

#### 代码展示

![image-20210729182837982](/img/image-20210729182837982.png)

#### 代码解释 (C++)

```cpp
void ellipse1(){
    calc1();
    move1();
    velocity = 0.1;
    setVelocity(velocity);
    for(int i=0;i<240;i++){
        theta += 1.5;
        calc1();
        move1();
    }
}

// 用椭圆的参数方程计算导航点坐标
void calc1(){
    tgtX = a * cos(theta);
    tgtY = b * sin(theta);
    pathX = tgtX - getX();
    pathY = tgtY - getY();
}

// 移动到导航点
void move1(){
    if(pathX > 0)
        move(90, pathX);
    else
        move(-90, abs(pathX));
    if(pathY > 0)
        move(0, pathY);
    else
        move(180, abs(pathY));
}
```



## 车头沿切线

### 数学原理

椭圆上任意一点 $A$ 到两个焦点 $F_{1}, F_{2}$ 的距离之和 $d$ 始终为一个定值，也就是长轴 $2a$​​。

那么我们就根据巡线的思路，如果 $d>2a$ 就往里拐，反之就往外拐。

但是，这样会造成小车的路径在椭圆的基准线两侧波动，最后会偏到完全修不回来。

因此，我们引入误差控制，如果 $d>2a$ 那么就往里拐并向里移动 $d-2a$ 米以修正掉由于转向引起的误差。反之，就向外拐并向外移动 $2a-d$ 米。

### 效果图示

![image-20210730171028943](/img/image-20210730171028943.png)

### 程序实现

#### 代码展示

![image-20210730171036320](/img/image-20210730171036320.png)

被折叠的代码块是：

> 将 distance 设置为  $\sqrt{\left( posX - F_{1}X \right)^2 + posY^2} + \sqrt{\left( posX - F_{2}X \right)^2 + posY^2}$​。

#### 代码解释 (C++)

```cpp
void move2(){
    move(0, mvDist);
    distance = sqrt(pow((getX()-F1X), 2) + pow(posY, 2)) + sqrt(pow((getX()-F2X), 2) + pow(posY, 2));
    if(distance > 2*a){
        turn(-1, turnAngle);
        theta += turnAngle;
        move(-90, (distance - 2*a));
    }
    else{
        if(distance < 2*a){
        turn(1, turnAngle);
        theta += turnAngle;
        move(90, (2*a - distance));
        }
    }
}

void ellipse2(){
    move(0, b);
    turn(-1, 90)
    velocity = 0.2;
    setVelocity(velocity);
    while(1)
        move2();
}
```



## 车头朝向焦点

### 数学原理

同上。

但是这里会涉及到车头方向和移动方向的转换。

### 效果图示

![image-20210730174254683](/img/image-20210730174254683.png)

### 程序实现

#### 代码展示

![image-20210730174333605](/img/image-20210730174333605.png)

#### 代码解释

```cpp
void calc3(){
    float pathX = F1X - getX();
    float pathY = 0 - getY();
    float pathLen = sqrt(pow(pathX, 2) + pow(pathY, 2));
    if(pathY >= 0)
        dirTgt = acos(pathX / pathLen);
    else
        dirTgt = 360 - acos(pathX / pathLen);
    dirCurrent = 90 - getDirection();
    dirTurn = dirTgt - dirCurrent;
    dirCurrent = dirTgt;
    dirMv = dirCurrent - theta;
    if(dirMv < -180) dirMv += 360;
    if(dirMv > 180) dirMv -= 360;
    if(dirTurn < -180) dirTurn += 360;
    if(dirTurn > 180) dirTurn -= 360;
}

void move3(){
    calc3();
    if(dirTurn >= 0)
        turn(-1, dirTurn);
    else
        turn(1, abs(dirTurn));
    move(dirMv, mvDist);
    distance = sqrt(pow((getX()-F1X), 2) + pow(posY, 2)) + sqrt(pow((getX()-F2X), 2) + pow(posY, 2));
    if(distance > 2*a){
        theta += turnAngle;
        if(dirMv < -90)
            move((dirMv + 270), (distance - 2*a));
        else
            move((dirMv - 90), (distance - 2*a));
    }
    else{
        theta -= turnAngle;
        if(dirMv > 90)
            move((dirMv - 270), (2*a - distance));
        else
            move((dirMv + 90), (2*a - distance));
    }
}

void ellipse3(){
    move(90, a);
    velocity = 0.1;
    setVelocity(velocity);
    while(1)
        move3();
}
```



















































# 彩蛋：面试社死现场

> ~~老师好！~~
>
> ~~我叫李柃锋，来自成都七中万达学校，是一名新高二的学生，参加过成都市青少年创新科技大赛、能力风暴 WER 机器人比赛和 2021 年的 FRC 比赛。~~我常用的编程语言有 C/C++、Python 以及 JavaScript。在我校电子机械社中，我与其他视觉组的成员在一个月的时间内共同完成了对 FRC 机器人视觉模块的硬件设计与软件开发，实现了视觉目标识别与距离测定、视觉叠加层辅助瞄准、投球参数计算及自动瞄准的功能。还与 B 站 UP 主共同制作了微软 Surface Dial 的开源版本，相关视频收获近10万播放量。目前，我有较为基础的建模和PCB设计能力。~~我很喜欢观看 RoboMaster 的比赛视频，可惜一直没有亲身体验的机会。我希望有一天我也可以登上 RoboMaster 超级对抗赛的擂台，为自己的队伍赢得荣誉。现在，我想通过“疆来计划”这个机会提升自己的思维能力和动手能力，为以后的深入学习打下更坚实牢固的基础。~~
