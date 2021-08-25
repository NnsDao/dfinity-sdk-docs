---
sidebar_position: 2
---

# Rust学习--语言学习快速指南

概述
Rust 语言是一种高效、可靠的通用高级语言。其具有一下特点：
+ 高性能 - Rust 速度惊人且内存利用率极高。
+ 可靠性 - Rust 丰富的类型系统和所有权模型保证了内存安全和线程安全，让您在编译期就能够消除各种各样的错误。
+ 生产力 - Rust 拥有出色的文档、友好的编译器和清晰的错误提示信息，还集成了一流的工具。

文档：https://kaisery.github.io/trpl-zh-cn/ch01-01-installation.html 

语法：https://doc.rust-lang.org/reference/introduction.html 

StartUp
环境搭建
Unix
1.	执行以下命令进行安装：
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh

Windows
1.	从https://www.rust-lang.org/install.html进行下载安装。

HelloWorld
执行以下命令创建项目，并进入项目文件夹：
cargo new hello_world
cd hello_world

hello_word目录下面存在以下两个文件：
Cargo.toml
src/main.rs

Cargo.toml文件内容：
[package]
name = "hello_world"
version = "0.1.0"
authors = ["Your Name <you@example.com>"]
edition = "2018"

[dependencies]

src/main.rs文件内容：
fn main() {
    println!("Hello, world!");
}

执行以下命令进行代码编译：
cargo build
这个命令会创建一个可执行文件./target/debug/hello_world

文件布局
Cargo 使用文件放置约定，文件放置具有以下规则：
```
.
├── Cargo.lock
├── Cargo.toml
├── src/
│   ├── lib.rs
│   ├── main.rs
│   └── bin/
│       ├── named-executable.rs
│       ├── another-executable.rs
│       └── multi-file-executable/
│           ├── main.rs
│           └── some_module.rs
├── benches/
│   ├── large-input.rs
│   └── multi-file-bench/
│       ├── main.rs
│       └── bench_module.rs
├── examples/
│   ├── simple.rs
│   └── multi-file-example/
│       ├── main.rs
│       └── ex_module.rs
└── tests/
    ├── some-integration-tests.rs
    └── multi-file-test/
        ├── main.rs
        └── test_module.rs
```
+ Cargo.toml 和 Cargo.lock 存储在包的根目录。
+ 源代码位于 src 目录中。
+ 默认库文件是 src/lib.rs。
+ 默认的可执行文件是 src/main.rs。
+ 其他可执行文件可以放在 src/bin/ 中。
+ 基准测试文件在 benches 目录中。
+ 示例文件在examples目录中。
+ 集成测试文件在tests目录。

注释
在 Rust 中，注释必须以两道斜杠开始，并持续到本行的结尾。对于超过一行的注释，需要在每一行前都加上 //。

例子：
// So we’re doing something complicated here, long enough that we need
// multiple lines of comments to do it! Whew! Hopefully, this comment will
// explain what’s going on.

rust支持的注释方式有如下一些：
+ //：行注释
+ //!	：内部行文档注释
+ ///：外部行文档注释
+ /*...*/：块注释
+ /*!...*/：内部块文档注释
+ /**...*/：外部块文档注释

关键字
如下关键字目前有对应其描述的功能。
+ as - 强制类型转换，消除特定包含项的 trait 的歧义，或者对 use 和 extern crate 语句中的项重命名
+ break - 立刻退出循环
+ const - 定义常量或不变裸指针（constant raw pointer）
+ continue - 继续进入下一次循环迭代
+ crate - 链接（link）一个外部 crate 或一个代表宏定义的 crate 的宏变量
+ dyn - 动态分发 trait 对象
+ else - 作为 if 和 if let 控制流结构的 fallback
+ enum - 定义一个枚举
+ extern - 链接一个外部 crate 、函数或变量
+ false - 布尔字面值 false
+ fn - 定义一个函数或 函数指针类型 (function pointer type)
+ for - 遍历一个迭代器或实现一个 trait 或者指定一个更高级的生命周期
+ if - 基于条件表达式的结果分支
+ impl - 实现自有或 trait 功能
+ in - for 循环语法的一部分
+ let - 绑定一个变量
+ loop - 无条件循环
+ match - 模式匹配
+ mod - 定义一个模块
+ move - 使闭包获取其所捕获项的所有权
+ mut - 表示引用、裸指针或模式绑定的可变性
+ pub - 表示结构体字段、impl 块或模块的公有可见性
+ ref - 通过引用绑定
+ return - 从函数中返回
+ Self - 实现 trait 的类型的类型别名
+ self - 表示方法本身或当前模块
+ static - 表示全局变量或在整个程序执行期间保持其生命周期
+ struct - 定义一个结构体
+ super - 表示当前模块的父模块
+ trait - 定义一个 trait
+ true - 布尔字面值 true
+ type - 定义一个类型别名或关联类型
+ unsafe - 表示不安全的代码、函数、trait 或实现
+ use - 引入外部空间的符号
+ where - 表示一个约束类型的从句
+ while - 基于一个表达式的结果判断是否进行循环

如下关键字没有任何功能，不过由 Rust 保留以备将来的应用。
+ abstract
+ async
+ await
+ become
+ box
+ do
+ final
+ macro
+ override
+ priv
+ try
+ typeof
+ unsized
+ virtual
+ yield


crate
crate 是一个binary或者library。crate root 是一个源文件，Rust 编译器以它为起始点，并构成你的 crate 的根模块。

Cargo 遵循的一个约定：
+ src/main.rs 就是一个与包同名的binary crate 的 crate 根。
+ 如果包目录中包含src/lib.rs，则包带有与其同名的library crate，且 src/lib.rs 是 crate 根。

通过将文件放在 src/bin 目录下，一个包可以拥有多个binary crate：每个 src/bin 目录下的文件(或子目录)都会被编译成一个独立的二进制 crate。

package
包（package）是提供一系列功能的一个或者多个 crate。一个包会包含有一个 Cargo.toml 文件，阐述如何去构建这些 crate。

包中所包含的内容由几条规则来确立：
1.	一个包中至多只能包含一个library crate；
2.	一个包中可以包含任意多个binary crate；
3.	一个包中至少包含一个 crate，无论是library crate或binary crate。

workspace
Cargo 提供了一个叫workspace的功能，它可以帮助我们管理多个相关的协同开发的package。workspace管理一系列共享同样的Cargo.lock 和target输出目录的package。

由于workspace只在根目录有一个 Cargo.lock，而不是在每一个 crate 目录都有 Cargo.lock。如果Cargo解析到在不同的crate中存在多个版本的相同依赖，则会将其都解析为同一版本并记录到唯一的 Cargo.lock 中。这确保了所有的 crate 都使用完全相同版本的依赖。

如果需要向 crates.io发布workspace中的 crate， workspace中的每一个 crate 都需要单独发布。cargo publish 命令并没有 --all 或者 -p 参数，所以必须进入每一个 crate 的目录并运行 cargo publish 来发布workspace中的每一个 crate。

下面是一个创建有一个binary crate和一个library crate的例子：
//1.首先创建工作空间目录
$mkdir add-example
$cd add-example

//2.在工作空间目录创建 Cargo.toml 文件。注意：工作空间目录的Cargo.toml只包含成员信息
[workspace]
members = [
"adder",
"add-one",
]

//3.在add-example 目录运行 cargo new adder 创建binary crate
$cargo new adder

//4.在add-example 目录运行 cargo new add-one --lib创建library crate
$ cargo new add-one --lib

//5.创建完成后将会拥有如下结构
```
├── Cargo.toml
├── add-one
│   ├── Cargo.toml
│   └── src
│       └── lib.rs
├── adder
│   ├── Cargo.toml
│   └── src
│       └── main.rs
```
//6.在add-one/src/lib.rs中添加如下代码
pub fn add_one(x: i32) -> i32 {
    x + 1
}

//7.在adder/Cargo.toml添加内部依赖
[dependencies]
add-one = { path = "../add-one" }

//8.在adder/src/main.rs中添加如下代码
use add_one;
fn main() {
    let num = 10;
    println!("Hello, world! {} plus one is {}!", num, add_one::add_one(num));
}

//9.在add-example目录中运行 cargo build 来构建工作空间
$ cargo build

//10.build完成后目录结构如下
```
├── Cargo.lock
├── Cargo.toml
├── add-one
│   ├── Cargo.toml
│   └── src
│       └── lib.rs
├── adder
│   ├── Cargo.toml
│   └── src
│       └── main.rs
└── target
```

-------

更多请查看PDF文档或word文档：

[Rust学习--语言学习快速指南PDF](./rust-learn-fast-guide.pdf)


作者 : machenjie

Github地址:[machenjie](https://github.com/machenjie/dfinity-study)