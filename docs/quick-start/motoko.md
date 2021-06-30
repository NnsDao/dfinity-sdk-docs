---
sidebar_position: 3
---

# Motoko 概述

+ Motoko编程语言是一种新的现代类型语言，专为希望构建下一代应用程序和服务以直接在 Internet Computer上运行的开发人员而设计。其具有以下特性：
  + 原生的canister支持。canister被表示为actor，是封装了状态并通过异步消息进行通信的孤立对象。
  + 以直接方式顺序编码。canister调用canister虽然是异步的，但是通过await可以表现的像同步调用一样。
  + 现代类型系统。motoko具有健全的结构类型、泛型、变量类型和pattern匹配。
  + 正交持久性。通过自动化整个存储过程简化了内存持久性。
  + 支持软件升级。motoko支持了升级容器软件时允许您的堆自迁移语言的功能。
  + motoko包括子类型、任意精度算术和垃圾收集的其他功能。
  + 自动生成的 IDL 文件。motoko支持自动生成candid文件，该文件中暴露的接口允许其他人调用您的函数。

### 关键字

+ 如下关键字目前有对应其描述的功能。
  + actor
  + and
  + assert
  + assert
  + await
  + break
  + case
  + catch
  + class
  + continue
  + debug
  + debug_show
  + else
  + flexible
  + false
  + for
  + func
  + if
  + ignore
  + in
  + import
  + not
  + null
  + object
  + or
  + label
  + let
  + loop
  + private
  + public
  + query
  + return
  + shared
  + stable
  + system
  + switch
  + true
  + try
  + type
  + var
  + while

更多内容请查看：

+ [motoko指南PDF版](https://gateway.pinata.cloud/ipfs/QmPLNamqaXi5czybA8f8YGFfw8vxmXZerbCeanqDeLPkEa)
+ [motoko指南WORD版](https://gateway.pinata.cloud/ipfs/QmReQfHg9x95abt1LHmdJZxVv68hrQWS8BZZKnNJGKPV8Q)