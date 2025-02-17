# 数字乡村开发流程SOP

## 新手入门

### 0. 网络配置

连接网线之后需要进行一定设置才能连上公司有线网，配置如下

![img](images/Untitled/wps9.jpg) 

### 1. 综合给出VPN权限和研发云账号

电信的代码都存在研发云里面，研发云只有连接VPN才能登录进去，因此获得这两个东西才可以进行正式的开发。

研发云地址：https://www.srdcloud.cn/

VPN配置：

![img](images/Untitled/wps10.jpg) 

智慧运营系统的账号： http://192.168.170.30/ （也是公众git账号）

 

### 2. 下载熟悉的ide

数字乡村这边一般是前端用VScode（cursor），后端用IDEA，移动端用微信开发者工具或者是HBuilderX，根据个人情况配置好基本环境。

### 3. 做好git配置

根据个人习惯可以用原生的git或者是idea里面内嵌的git，都不熟悉可以下载TortoiseGit中文版。

![img](images/Untitled/wps11.jpg) 

![img](images/Untitled/wps12.jpg) 

Git配置用户名和邮箱代码如下，由于上级监察开发活动是根据这个进行，所以不要绑定错误，会影响研发的工时计算

git config --global user.name "username"

git config --global user.email useremail@qq.com

## 前期准备

### 1. 需求评审以及原型图、设计图确定

正常

### 分配任务之后确定好项目内合作人员与项目节点

比如该项目负责的产品是谁，对接的前端or后端是谁，有时还有配合的交付人员是谁

### 3. 确定哪里看本地测试版本，哪里看线上版本

移动端：测试版本直接本地跑代码，上真机测试，线上版本等上线后手机测试，不懂的问冯梁/杜阳大佬。

 

管理后台：问好具体是在什么代码包上面开发，找胡路组长要对应的代码权限。clone下来本地跑通即可看到测试版本。

数字乡村主要分为政企版和统一平台，偶尔也有一些定制化平台，不清楚的可以问对应产品要线上地址。

政企版登录地址为：https://village.dgcsite.com:10084/login

统一平台登录地址为：https://village.dgcsite.com:10084/tyLogin

政企版线上账号是找交付帮忙开通，统一平台是跟自己手机号绑定扫码，需要交付更改绑定手机号权限区域

 

大屏：大屏分为原生开发和低代码平台开发，原生开发和管理后台流程大致相同

低代码平台链接：https://easyv.dgcsite.com:10800/login

账号找何孟阳要