---
title: 题解-7940(OpenJudge)
date: 2020-12-26 16:31:32
tags:
  - oi
  - openjudge
  - C++
  - 题解
---

也是一次AC！（虽然有一次格式错误但我相信你们不会在意的对吧）

## 题目传送门

http://noi.openjudge.cn/ch0111/01

## 思路

- 特判 如大于所有数据或小于所有数据
- 其他 用二分法搜索最接近数据，再比较距离，然后输出

## 代码

```cpp
/*http://noi.openjudge.cn/ch0111/01*/
#include<bits/stdc++.h>
using namespace std;

// struct record{			本来想用结构体写功能，后来放弃了
// 	long long arrn;
// 	long long arrl;
// 	long long arrr;
// };

long long sch(long long *arr,long long lim,int l,int r){
	int mid=(l+r)/2;
	if(abs(l-r)==1){
		if(abs(lim-arr[l])>abs(lim-arr[r]))
			return arr[r];
		else return arr[l];
	}
	if(lim>arr[r])
		return arr[r];
	if(lim<arr[l])
		return arr[l];
	if(lim==arr[mid])
		return arr[mid];
	if(lim>arr[mid])
		sch(arr,lim,mid,r);
	if(lim<arr[mid])
		sch(arr,lim,l,mid);
}

int main(){

//	freopen("7940.in","r",stdin);

	int n;
	cin>>n;
	long long a[n];
	for(int i=0;i<n;i++)
		cin>>a[i];

	sort(a,a+n);	//防止测试点数据乱序
	
	int m;
	cin>>m;
	long long num[m];
	for(int i=0;i<m;i++){
		cin>>num[i];
		cout<<sch(a,num[i],0,n)<<endl;
	}

}
```
