---
title: 题解-P4414
date: 2020-10-24 12:07:00
tags:
  - C++
  - 洛谷
  - oi
  - 题解
---

纪念史上首次 [一次性 AC](https://www.luogu.com.cn/record/40400035)。

## 思路

输入三个数到数组中并排序；
输入三个字母 `A` `B` `C` ；
通过 `switch` 语句进行分类讨论输出；

## 代码

```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
	int n[5];
	for(int i=0;i<=2;i++)
		cin>>n[i];
	sort(n,n+3);
//	cout<<n[0]<<n[1]<<n[2];（debug测试用）
	char a,b,c;
	cin>>a>>b>>c;
//	scanf("%c%c%c",&a,&b,&c);（用scanf我发现读入不了c所以改用cin）
	switch(a){
		case 'A':
			cout<<n[0]<<" ";
			break;
		case 'B':
			cout<<n[1]<<" ";
			break;
		case 'C':
			cout<<n[2]<<" ";
		
		default:
			break;
	}
	switch(b){
		case 'A':
			cout<<n[0]<<" ";
			break;
		case 'B':
			cout<<n[1]<<" ";
			break;
		case 'C':
			cout<<n[2]<<" ";
			break;
		default:
			break;
	}
	switch(c){
		case 'A':
			cout<<n[0];
			break;
		case 'B':
			cout<<n[1];
			break;
		case 'C':
			cout<<n[2];
			break;
		default:
			break;
	}
	return 0;
}
```

## PS

祝各位1024节快乐！
