---
sidebar_position: 2
---

# 关于本指南

Motoko编程语言指南介绍了通用Motoko编程语言的主要特点，并提供了实例和参考信息，以帮助您了解该语言的细微差别和如何应用它的实际意义。

Motoko编程语言为开发在互联网计算机区块链上运行的程序进行了优化，并与DFINITY Canister软件开发工具包（SDK）一起工作。然而，你也可以使用Motoko为其他平台编写程序，并在其他背景下运行。本指南试图在突出适合在互联网计算机上运行的独特功能和普遍适用于或非常适合在其他平台上运行的程序的功能之间取得平衡。

### 预期的群体

本指南为想要探索或计划使用Motoko编程语言的程序开发者提供参考信息和实例。本指南中的大部分信息都是适用的，与您是否正在开发在互联网计算机区块链上运行的程序或使用DFINITY Canister SDK工作无关。

本指南假定您熟悉基本的编程原理和术语，并且至少有一些用高级编程语言（如C++或Rust）编写程序的经验，或者有使用脚本语言（如JavaScript或TypeScript）的实际工作经验。此外，Motoko结合了函数式编程的某些方面，所以你可能会发现一些关于函数式编程设计原则的知识对学习使用Motoko有帮助。

尽管本指南旨在帮助来自不同背景的读者了解Motoko的基本设计原则和语义，但你应该记住，语言的实现和文档也在持续迭代中。

### 使用本指南

为了提供一个学习Motoko的框架，你可能想从回顾工程价值和目标开始。工程价值和目标描述了Motoko编程语言的发展和演变的核心设计考虑。

考虑到这些因素，你可以开始探索基本概念，包括类型和类型注释的作用，在简单的代码例子和片段程序中了解具体意义。

一旦你熟悉了基本概念和术语，后面的章节将介绍以更有趣的方式进行计算的程序，包括函数抽象、用户定义的类型定义、用户定义的角色和异步通信。

当你开始使用Motoko编写你自己的程序时，你可以返回到本指南中获取参考信息和例子。

本指南中的大部分代码例子都是交互式的：你可以现场编辑例子，在浏览器中解释代码，并看到结果。解释器是为教育目的提供的。虽然解释器支持大多数语言功能，但它们与真正的编译器不完全相同。例如，对于一个中等规模的输入，你可能会得到一个堆栈溢出，而真正的编译器则能很好地处理这个输入。一些系统特性并不完全支持，比如cycles、程序罐导入和状态突变的查询调用。



### 文档规范

本指南中使用了以下规范:

+ 示例代码、程序名称、程序输出、文件名称和你在命令行输入的命令使用固定宽度的字体。

+ 粗体字用于强调命令、按钮或用户界面文本，并用于介绍新术语。

+ 斜体字用于书名和强调特定的词或术语。

+ 注意 "样式用于表示缺少或不完整的内容。

+ 警告 "样式用于表示内容已经过时或可能不准确的地方。

+ 注意 "样式用于表示描述尚未支持但计划在未来发布的功能的内容。


### 工程价值和目标

Motoko的设计和实施背后的工程努力是由一套核心价值和目标驱动的。DFINITY工程组织使用这些价值和目标来定义和优先考虑语言功能和增强功能，以增加和改进正在进行的语言开发。

为了使指导工程工作的原则透明化，工程组织已经确定了以下几组核心价值和次要价值，以推动Motoko编程语言的发展。

**核心价值**

以下的指导原则代表了工程组织的核心价值，按优先顺序排列:

1.与互联网计算机平台的无缝集成，以确保Motoko为基于角色(actor-based)的模型、异步消息传递、数据持久性、接口描述语言的互操作性和其他功能提供全面的语言支持。

2.人因工程学，以确保Motoko包含了熟悉性、简单性、清晰性、明确性和其他人类因素。

3.形式上的正确性，以确保Motoko保持状态隔离、健全的类型系统和类型安全、精确性、模式匹配、适当的默认值，以及编码的最佳实践。

**次要价值**

以下原则代表了工程组织的次要价值，被认为是重要的，但不是主要的驱动因素:

1.表达性，使 Motoko 能够随着语言的发展提供一流的功能、多态性、模式匹配等。

2.性能，使Motoko在最初提供合理的快速操作，并随着语言的发展而继续提高。

3.准备就绪，因此Motoko以库和示例的形式提供了 "电池"，并与DFINITY Canister SDK实现了开箱即用。

**非目标**

作为对核心价值和目标的反驳，工程组织还确定了以下不属于工程工作范围的 "非目标":

1.拥有更高级的类型系统，具有更复杂的类型。

2.在设计或实现中，简单性高于功能性（"越差越好 "的方法）。

3.运行在互联网计算机协议以外的平台。

### 查找更多信息

有关将 Motoko 与 DFINITY Canister SDK 一起使用的信息，请参阅SDK 开发人员工具。

有关与 Motoko 服务的设计、使用或部署或语言设计本身相关的各种主题的背景信息，请考虑将以下资源作为起点：

**WebAssembly**

[WebAssembly 主页](https://webassembly.org/)

[WebAssembly 概述视频 (youtube)](https://www.youtube.com/watch?v=fvkIQfRZ-Y0)

[NNSDAO科普:WebAssembly是什么](https://sdk.nnsdao.com/docs/tutorial-wasms/wasm-intro)

现代类型系统
Robert Harper 的[编程语言实用基础](http://www.cs.cmu.edu/~rwh/pfpl/)。剑桥大学出版社，2016 年。

Benjamin C. Pierce 的[《类型和编程语言》](https://www.cis.upenn.edu/~bcpierce/tapl/)。麻省理工学院出版社。

### 获得额外支持

如果您正在寻找更多信息或技术支持，DFINITY 网站提供对常见问题、技术文章、开发人员更新和其他资源的快速访问。在该网站上，您可以搜索知识库文章、打开和查看支持案例、订阅NewsLetter、阅读最新的Medium文章、查看操作视频、更新SDK或与社区成员交流想法。

除了网站上可用的资源外，您还可以使用社交媒体或访问 DFINITY 社区 Discourse 论坛并加入对话，与 DFINITY 或其他开发人员联系。

你也可以加入NNSDAO和我们一起交流探讨Motoko语言。

**关注ICP新闻和项目动态**

 [https://www.dailybtc.cn/dfinity/](https://www.dailybtc.cn/dfinity/)

官方最新动态：[https://status.internetcomputer.org/](https://status.internetcomputer.org/)


**ICP浏览器**

[https://dashboard.internetcomputer.org/transactions](https://dashboard.internetcomputer.org/transactions)

[https://www.dfinityexplorer.org/#/](https://www.dfinityexplorer.org/#/)


**可以体验的ICP应用**

体验步骤:需要先注册ICP账号,通过访问账号注册相关地址即可拿到唯一ID,然后浏览器打开下面网址授权后即可使用.

OpenChat :  [https://7e6iv-biaaa-aaaaf-aaada-cai.ic0.app/](https://7e6iv-biaaa-aaaaf-aaada-cai.ic0.app/)

Dscvr:  [https://dscvr.ic0.app/](https://dscvr.ic0.app/)

**NnsDao社群**

*进ICP定投群:*  ****打开微信,添加朋友,搜索“zpodcasts” ,暗号“icp3500”

*公众号：*打开微信搜一搜，搜索NnsDao 关注社区公众号，后面有福利赠送。

Telegram: [https://t.me/nnsdaos](https://t.me/nnsdaos)

推特: [https://twitter.com/NnsDaos](https://twitter.com/NnsDaos)

**捐献给我:** 76f532b532a89440773abd7b45f513f39369882f4aafecd36809e4dd8d46d820