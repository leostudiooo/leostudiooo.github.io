---
title: 利用智能手机内建传感器测量 Helmholtz 线圈产生的磁场
date: 2024-12-25 21:32:08
categories:
  - 论文
  - 技术
tags:
  - 智能手机
  - 传感器
  - 磁场
  - 物理实验
  - 教程
type: github
url: github.com/leostudiooo/visual-field
---

> 成果在近期转化为 iOS/iPadOS App 原型 [Visual Field](https://github.com/leostudiooo/visual-field)，但暂无上架 App Store 的计划。文末也有仓库链接。

---

## 摘要

本实验利用智能手机内置的惯性测量单元 (IMU) 和磁传感器，通过 Sensor Logger App 测量 Hemholtz 线圈产生的磁场。相比传统实验方法，本实验简化了仪器需求，降低了实验门槛。在实验中，基于 Kalman 滤波处理传感器数据，结合数值积分计算位移，对磁场变化进行了精确测量和校准。结果表明，Hemholtz 线圈中心磁场的大小和分布与理论模型基本一致。尽管测量结果仍存在位置漂移和背景磁场干扰，但实验方法展示了智能设备在科学测量中的应用潜力。

**关键词：** Helmholtz 线圈，智能手机，IMU，磁场测量，Kalman 滤波

---

## 1 引言

本实验利用智能手机内置的惯性测量单元 (Inertia Mesurment Unit, IMU) 和磁传感器，使用 Sensor Logger App 测量 Helmholtz 线圈产生的磁场。Helmholtz 线圈是由两个同轴的圆形线圈组成，两个线圈的中心重合，线圈的半径相等，线圈的匝数相等，线圈的匝数足够多，使得线圈的磁场近似均匀。两个线圈的电流方向相同，电流强度相等，使得两个线圈产生的磁场叠加，形成一个均匀的磁场区域。在 Helmholtz 线圈的中心区域，磁场的方向与线圈的轴线平行，磁场的大小与线圈的电流强度和线圈的半径有关。

---

## 2 创新点

本实验的创新点在于利用智能手机内置的 IMU 和磁传感器测量 Helmholtz 线圈产生的磁场。传统的实验方法需要使用霍尔探头，需要首先对探头进行标定；而本实验利用智能手机内置的传感器，无需额外的设备，简单方便。

---

## 3 实验目的

1. 了解 Helmholtz 线圈产生的磁场的特点。
2. 利用智能手机测量 Helmholtz 线圈产生的磁场。

---

## 4 实验仪器

1. 直流电源
2. Helmholtz 线圈及导轨支架
3. 智能手机

---

## 5 实验原理

Helmholtz 线圈由两组半径相等、匝数相同且电流方向一致的同轴圆形线圈组成，其标准配置为两线圈间距等于其半径。线圈中心磁场的理论公式为：

$$
B = \frac{\mu_0 \cdot n \cdot I \cdot R^2}{\left( R^2 + \left( \frac{R}{2} \right)^2 \right)^{3/2}},
$$

其中，$\mu_0$ 为真空磁导率，$n$ 为每组线圈匝数，$I$ 为电流，$R$ 为线圈半径 [1]。

---

## 6 实验步骤

1. 确认 Helmholtz 线圈关闭，将智能手机放在实验装置的导轨上，使得智能手机的 IMU 与磁传感器的测量方向 y 轴与 Helmholtz 线圈的轴线平行。采集一段时间的数据作为静止时的校准数据。
2. 调整两个线圈的间距为线圈半径的长度。
3. 打开 Helmholtz 线圈，调节电流大小到合适范围。
4. 开始采集数据，将智能手机沿导轨由一端向另一端移动。到达另一端后，停止采集数据。

---

## 7 数据处理

加速度计与磁传感器的原始测量数据如图 \ref{fig:accel_raw} 和图 \ref{fig:mag_raw} 所示。

<div style="display:flex;gap:20px;">
<img src="/img/accelerometer_raw.pdf" alt="加速度计原始数据" style="width:48%;"/>
<img src="/img/magnetometer_raw.pdf" alt="磁传感器原始数据" style="width:48%;"/>
</div>

由于 IMU 传感器的数据存在噪声，可能会导致数据漂移，因此需要对数据进行滤波处理。常用的滤波方法有均值滤波、中值滤波、Kalman 滤波等。本实验选用 Kalman 滤波，原理由以下公式描述：

$$
\begin{cases}
\mathbf x_k = \mathbf A \mathbf x_{k-1} + \mathbf B \mathbf u_k + \mathbf w_k \\
\mathbf z_k = \mathbf H \mathbf x_k + \mathbf v_k
\end{cases}
$$

其中，$\mathbf x_k$ 为状态向量，$\mathbf A$ 为状态转移矩阵，$\mathbf B$ 为输入矩阵，$\mathbf u_k$ 为输入向量，$\mathbf w_k$ 为状态转移噪声，$\mathbf z_k$ 为观测向量，$\mathbf H$ 为观测矩阵，$\mathbf v_k$ 为观测噪声 [2]。Kalman 滤波器通过迭代来对参数进行估计，使得观测值与状态值之间的误差最小。

本实验使用 10 次自动迭代参数估计的 Kalman 滤波器对加速度计三个轴的数据分别进行了滤波处理，滤波后的数据如图 \ref{fig:accel_raw_vs_filtered} 所示。可以看出，滤波后的数据更加平滑，噪声更少。

接下来，对加速度计的数据进行数值积分，得到速度和位移。速度和位移的计算公式如下：

$$
\mathbf v = \begin{pmatrix}
\sum_{i=1}^{n} \frac{1}{2}(a_{x,i-1} + a_{x,i}) \Delta t \\
\sum_{i=1}^{n} \frac{1}{2}(a_{y,i-1} + a_{y,i}) \Delta t \\
\sum_{i=1}^{n} \frac{1}{2}(a_{z,i-1} + a_{z,i}) \Delta t
\end{pmatrix}
$$

$$
\mathbf r = \begin{pmatrix}
\sum_{i=1}^{n} \frac{1}{2}(v_{x,i-1} + v_{x,i}) \Delta t \\
\sum_{i=1}^{n} \frac{1}{2}(v_{y,i-1} + v_{y,i}) \Delta t \\
\sum_{i=1}^{n} \frac{1}{2}(v_{z,i-1} + v_{z,i}) \Delta t
\end{pmatrix}
$$

此处使用梯形公式，将加速度对时间进行两次数值积分得到位移，其中 $i$ 为采样点编号，$n$ 为采样点总数，$\Delta t$ 为采样时间间隔；$a_{x,y,z}$ 为加速度在各轴向的分量，$\mathbf v$ 为速度矢量，$\mathbf r$ 为位移矢量。

计算校准数据中磁场矢量平均值，作为校准磁场矢量。将测量数据中的磁场矢量减去校准磁场矢量，得到磁场变化：

$$
\mathbf B = \mathbf B_\mathrm{measured} - \mathbf B_\mathrm{calibration}
$$

由于磁传感器的采样时间与加速度计不同，需要对位移数据进行插值处理。使用简单的线性插值方法，将磁传感器的数据插值到加速度计采样时间点。插值后的磁场矢量随位移变化如图 \ref{fig:magnetic_field_vectors_on_displacement} 所示。

<div style="display:flex;gap:20px;">
<img src="/img/accel_raw_vs_filtered.pdf" alt="加速度计原始数据与滤波后数据" style="width:48%;"/>
<img src="/img/magnetic_field_vectors_on_displacement.pdf" alt="磁场矢量随位移的变化" style="width:48%;"/>
</div>

---

## 8 分析

由图 \ref{fig:accel_raw} 和 \ref{fig:magnetic_field_vectors_on_displacement} 可大致看出磁场矢量大小随着距离 Helmholtz 线圈中心距离增加而减小，符合 Helmholtz 线圈磁场的特点。

然而，图 \ref{fig:magnetic_field_vectors_on_displacement} 数据仍存在较大位置漂移和磁感应强度偏差，背景磁场未完全消除。利用惯性导航方程，结合角速度计数据，并采用高维 Kalman 滤波器融合多传感器数据及高维状态向量，可更有效消除位置漂移和磁感应强度误差。

---

## 9 结论与展望

本实验利用智能手机内置惯性测量单元（IMU）和磁传感器对 Helmholtz 线圈产生的磁场进行了测量和分析。实验结果表明，智能手机作为低成本、便携的磁场测量工具，初步验证了 Helmholtz 线圈磁场分布特性。但实验仍存在位置漂移和背景磁场影响未完全消除、测量精度有限等不足，主要与传感器精度、滤波方法简单及多传感器融合算法欠优化有关。

未来改进方向：

1. 优化数据处理，结合高维 Kalman 滤波与惯性导航方程，融合加速度计、磁传感器、角速度计数据，减少位置漂移，提升测量精度。
2. 精准标定传感器，采用先进误差校正方法，提升磁场测量精度。
3. 设计动态校准算法实时消除背景磁场干扰，提高测量可靠性。
4. 扩展至三维空间磁场测绘，构建磁场分布模型，助力磁场可视化及深入研究。

该方法低成本、便携、普适，为磁场测量开辟新途径。智能手机作为普及设备，降低实验门槛，使非物理专业研究者亦能参与磁场科学探索。应用前景包括教学实验、环境磁场监测及便携磁场探测设备开发。未来结合更多传感器和先进测量方法，智能手机有望成为重要磁场测量与分析工具。

---

## 参考文献

[1] Helmholtz H. Ueber einige Gesetze der Vertheilung elektrischer Ströme in körperlichen Leitern mit Anwendung auf die thierisch-elektrischen Versuche [J]. Annalen der Physik, 1853, 165(6): 211-233.

[2] Bishop G., Welch G. An Introduction to the Kalman Filter [J]. Proc of SIGGRAPH, 2001, 8(27599-23175): 41.

