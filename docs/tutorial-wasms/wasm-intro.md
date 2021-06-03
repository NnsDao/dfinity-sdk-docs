---
sidebar_position: 1
---

# WebAssembly是什么

![WebAssembly是什么](https://gateway.pinata.cloud/ipfs/QmXrnaqzGpdDS7GwTuG41TwFzmDCHqVPrTLiRXE6Nn9fZS)


### WebAssembly是什么？

WebAssembly是一种运行在现代网络浏览器中的新型代码，并且提供新的性能特性和效果。它设计的目的不是为了手写代码,而是为诸如C、C++和Rust等低级源语言提供一个高效的编译目标。

对于网络平台而言，这具有巨大的意义——这为客户端app提供了一种在网络平台以接近本地速度的方式运行多种语言编写的代码的方式；在这之前，客户端app是不可能做到的。

而且，你在不知道如何编写WebAssembly代码的情况下就可以使用它。WebAssembly的模块可以被导入的到一个网络app（或Node.js）中，并且暴露出供JavaScript使用的WebAssembly函数。JavaScript框架不但可以使用WebAssembly获得巨大性能优势和新特性，而且还能使得各种功能保持对网络开发者的易用性。


首先，在简单地谈谈WebAssembly——它又称作Wasm。如您所知，Wasm是一种新的底层代码格式，其目标是可移植、安全和高效。它最初的用例是web，但这个名字实际上用词不当：当W3C工作组设计Wasm时，它们起初小心地将它作为一个开放标准和通用平台。也就是说，它不针对任何特定的编程语言、范式、计算环境或平台，并确保它完全不依赖于web。因此，Wasm在云计算、边缘计算、移动平台、嵌入式系统、物联网和区块链等许多其他环境中的应用绝非偶然。


Wasm与其他虚拟机的主要区别在于，它没有针对任何特定的编程语言进行优化，而只是抽象底层硬件，字节码直接对应于现代cpu的指令和内存模型。除此之外，Wasm还通过强大的模块化和严格的数学规范支持沙盒，以确保执行是安全的，没有未定义的行为，几乎完全是确定性的。而且，这些属性实际上有一个经过机器验证的数学证明！


它使用广泛,目前可以使用 C、C++、Rust、Go、Java、C# 等编译器来创建 Wasm 模块。该模块以二进制的格式发送到浏览器，并在专有虚拟机上执行，与JavaScript虚拟机共享内存和线程等资源。 一句话就是，可以将C/C++等语言代码通过Webassembly移植到浏览器上运行。


![-wat2wasm](https://gateway.pinata.cloud/ipfs/QmcNavTvmMRwEGFWpp7wNW4967t3C87rgFR6PCvU2nW3zw)

Webassembly目前已经被多数主流浏览器支持, WebAssembly 背后的主要技术公司是Google，Apple，Microsoft，Mozilla和W3C等。在这个技术加持和背后巨头支持的时代,相信未来Webassembly必然会崛起。最早并不存在WebAssembly,而是有一种asm.js的项目,Google、MicroSoft、Apple 都觉得 asm.js 的思路不错，于是联合起来，一同共建 WebAssembly 生态。因此一个生态的起点已经很高,所以在使用场景和实用度没上去之前相信发展还是缓慢的,但前景是可期的。  

左耳朵耗子曾说:“技术能不能火起来，主要从三个角度，第一，有没有雄厚的资金支持。第二，有没有一个活跃的社区。第三，有没有杀手级的应用。”,因此可以看出Webassembly目前似乎什么都不缺,缺的是时间,是让更多的人去应用它。杀手级应用,比如figma、Google Earth 又或者Magnum、AutoCAD Web App等应用,Webassembly给用户带来的优质的体验,那其他的应用自然也会慢慢的用Wasm去开发产品以适合市场。

### WebAssembly的目标

WebAssembly的开放标准是在W3C社区组中开发的，该组包括所有主要浏览器的代表以及W3C工作组,它有严格的提案和投票决定后面的功能和发展。

+ WebAssembly的主要目标如下所述:
    * 更快，高效和可移植-WebAssembly代码旨在利用可用的硬件在不同的平台上更快地运行。
    
    * 易于阅读和调试-WebAssembly是一种底层汇编语言，具有文本格式支持，可让您调试任何问题的代码，并在必要时重写代码。
    
    * 安全性-WebAssembly可以安全地在Web浏览器上运行，它会处理权限和同源策略。

### Wasm 特点：

运行现代浏览器 : WebAssembly能够在没有可用的现代Web浏览器上执行任何问题。

多种高级语言支持: C，C++，Rust，Go之类的语言现在可以将代码编译为WebAssembly并在Web浏览器中运行。

更快，更高效，可移植: 由于编译成的字节码和体积小，因此加载和执行速度更快。

易于理解: 开发人员不必在理解WebAssembly编码上花费太多精力，因为他们不必在WebAssembly中编写代码。而是在WebAssembly中编译代码并在Web上执行相同的代码。

易于调试: 尽管最终代码是低级汇编语言，但您也可以以文本格式获取它，这易于阅读和调试。

沙盒环境,更安全: 运行在沙箱化的执行环境中,web环境中严格遵守同源策略以及浏览器安全策略。

兼容性问题少：WebAssembly 是非常底层的字节码规范，制订好后很少变动，就算以后发生变化,也只需在从高级语言编译成字节码过程中做兼容。可能出现兼容性问题的地方在于 JS 和 WebAssembly 桥接的 JS 接口。


### WebAssembly 比 JavaScript 执行更快是因为：


在文件抓取阶段，WebAssembly 比 JavaScript 抓取文件更快。即使 JavaScript 进行了压缩，WebAssembly 文件的体积也比 JavaScript 更小；

解析阶段，WebAssembly 的解码时间比 JavaScript 的解析时间更短；

编译和优化阶段，WebAssembly 更具优势，因为 WebAssembly 的代码更接近机器码，而 JavaScript 要先通过服务器端进行代码优化。

重优化阶段，WebAssembly 不会发生重优化现象。而 JS 引擎的优化假设则可能会发生“抛弃优化代码<->重优化”现象。

执行阶段，WebAssembly 更快是因为开发人员不需要懂太多的编译器技巧，而这在 JavaScript 中是需要的。WebAssembly 代码也更适合生成机器执行效率更高的指令。

垃圾回收阶段，WebAssembly 垃圾回收都是手动控制的，效率比自动回收更高。

## 安装Wasm

1. 打开:`https://github.com/WebAssembly/wabt/releases`,选择要下载的系统版本,此时演示的为macOS系统,点击下载[wabt-1.0.23-macos](https://github.com/WebAssembly/wabt/releases/download/1.0.23/wabt-1.0.23-macos.tar.gz),下载后解压,然后添加环境变量,方便全局使用.
2. `sudo vim  ~/.zshrc`
3. 添加以下内容到文件,保存并 `source ~/.zshrc`

```
alias wat2wasm="~/Downloads/wabt-1.0.23/bin/wat2wasm"
alias wasm-decompile="~/Downloads/wabt-1.0.23/bin/wasm-decompile"
alias wasm-objdump="~/Downloads/wabt-1.0.23/bin/wasm-objdump"
alias wasm-strip="~/Downloads/wabt-1.0.23/bin/wasm-strip"
alias wasm2c="~/Downloads/wabt-1.0.23/bin/wasm2c"
alias wast2json="~/Downloads/wabt-1.0.23/bin/wast2json"
alias wasm2wat="~/Downloads/wabt-1.0.23/bin/wasm2wat"
alias wasm-interp="~/Downloads/wabt-1.0.23/bin/wasm-interp"
```
4.查看是否安装成功: `wasm2wat --version`


![Webassembly](https://gateway.pinata.cloud/ipfs/QmRZPDLVwahZM532KwmBDVRBRC9jmTTFV46Ttnz8d1ucfH)


如果出现版本号,则可以开始编写webassembly 模块了.

### webassembly 事例

创建一个add.wat的文件,打开vscode编辑,并增加以下内容到文件中,此处编写的是一个加法函数,输入两个数,可以返回结果.

```
(module
  (func $add (param $lhs i32) (param $rhs i32) (result i32)
     (i32.add
       (get_local $lhs)
       (get_local $rhs)
     )
  )
  (export "add" (func $add))
)
```

然后运行  `wat2wasm add.wat` 会创建一个名为add.wasm的文件

### 如何运行这个webassembly模块

1.打开 `https://wasmtime.dev/` 这个网址
2.然后运行 `curl https://wasmtime.dev/install.sh -sSf | bash` 安装Wasmtime,以便运行Wasm文件 (如果超时,请设置代理 `git config --global http.proxy socks5://localhost:1080`)
3.运行 `wasmtime add.wasm --invoke add 1 2` 将得到输入后相加的结果 "3"


![wasm2wat](https://gateway.pinata.cloud/ipfs/QmcAxHAW5Y9hqr1wwUsT8VJPA4zCU5p2FzyB3jGATXQEUu)
 


### 还有哪些场景可以使用Wasm

+ Wasm支持的浏览器

![wasm支持的浏览器](https://gateway.pinata.cloud/ipfs/QmY6oYRH2tsa514dW7C6WNyx25dvGzNbGNHvTDP5zzPvJv)

+ 分为了两种,在浏览器中执行
    * 图片/视频编辑
    * 游戏
    * P2P 应用（游戏，实时合作编辑）
    * 音乐播放器（流媒体，缓存）
    * 图像识别
    * 视频直播
    * VR 和虚拟现实
    * CAD 软件
    * 科学可视化和仿真
    * 互动教育软件和新闻文章
    * 模拟/仿真平台(ARC, DOSBox, QEMU, MAME)
    * 语言编译器/虚拟机
    * POSIX用户空间环境，允许移植现有的POSIX应用程序。
    * 开发者工具（编辑器，编译器，调试器…）
    * 加密工具
    * 本地 Web 服务器

+ 脱离浏览器执行
    * 游戏分发服务（便携、安全）
    * 服务端执行不可信任的代码
    * 服务端应用
    * 移动混合原生应用
    * 多节点对称计算


### 总结

Wasm 可以说是个革命性的技术，代表一种跨平台的全新方向，尤其对原生应用开发者来说具备巨大的商业价值。但它对前端来说其实就是个浏览器内置的字节码虚拟机，不是一切性能问题的灵丹妙药。但可以解决一些浏览器渲染的瓶颈,可以让一些操作dom的事情让Wasm来做,以此提高用户体验和交互的体验感。


### 参考

[WebAssembly CN](http://webassembly.org.cn/)

[WebAssembly MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly)

[webassembly spec](https://webassembly.github.io/spec/core/index.html)
