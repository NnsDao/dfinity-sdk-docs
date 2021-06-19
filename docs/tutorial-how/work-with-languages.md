---
sidebar_position: 5
---

# 使用不同的语言进行开发

本指南中的大多数例子都默认使用Motoko--专门为互联网计算机设计的编程语言。然而，你也可以用任何可以编译成WebAssembly的语言来编写程序，以部署在互联网计算机上运行的应用程序。本节提供了一些关于用不同语言编写程序以及如何在 Internet 计算机上部署它们的高级指南。

### 使用 Rust

您可以通过使用 Cargo 并编译您的程序以使用 WebAssembly 作为目标输出来创建 Rust 项目以在 Internet 计算机上运行。

本节概述了将 Rust 程序部署为互联网计算机上的智能合约容器所涉及的关键步骤。但是，您应该注意，此处描述的步骤仅说明了一种方法。其他实现方式也是可能的。

请注意，Rust 容器开发工具包 ([Rust CDK](https://github.com/dfinity/cdk-rs))提供了一些快捷方式，可以更轻松地编写查询和更新调用函数，并包含几个[示例](https://github.com/dfinity/cdk-rs/tree/next/examples)来帮助您开始构建基于 Rust 的项目，但是您也可以在不使用 Rust CDK 的情况下为 ICP生态开发应用程序。

### 创建项目

因为大多数 Rust 程序员使用 Cargo 来处理构建和支持包管理,比如下载和编译你的程序所依赖的库,你的第一步是使用 Cargo 命令行界面创建一个新的 Rust 项目。

或者，您可以使用 DFINITY Canister 软件开发工具包 (SDK) 而不是 Cargo 创建一个新项目，但使用 Cargo 创建一个项目代表了创建 Rust 项目的典型工作流程。

创建一个新的 Rust 项目：

1.如果您还没有打开，请在本地电脑设备上打开一个终端(terminal)。

2.通过运行以下命令验证您是否安装了 Cargo：`cargo --version`

3.更改为用于 Internet 计算机或 Rust 示例项目的文件夹。

4.通过运行类似于以下的命令来创建一个新项目：`cargo new my_rust_program`,此命令创建一个`my_rust_program`带有默认`Cargo.toml`文件的新目录和一个带有默认文件的src目录`main.rs`。
5.通过运行以下命令切换到当前项目目录：`cd my_rust_program` ,如果您列出此目录的内容，您将看到它只包含Cargo.toml文件和src目录。要编译此项目以在 Internet 计算机上运行，​​您需要一些附加文件。

### 修改 Cargo 配置文件

该Cargo.toml文件为每个 Rust 包提供了一个清单。该清单包含了指定软件包配置细节的部分。为了准备让Rust项目在互联网计算机上运行，我们将复制默认的Cargo.toml文件，然后修改项目的一些配置细节。

要修改Cargo.toml文件：

如有必要，运行pwd命令，检查你是否在项目的根目录下。

通过运行下面的命令，将默认的Cargo.toml文件复制到src目录中:

`cp Cargo.toml src/Cargo.toml`


在 ICP 上运行的项目通常使用一个项目级别的Cargo.toml文件来为项目的程序罐成员设置工作区，并在源代码目录下使用第二个Cargo.toml文件来配置每个程序罐的设置。

在VS Code中打开作为项目根目录的Cargo.toml文件。

默认情况下，该文件包含[package]和[dependencies]部分。

将该[package]部分替换为[workspace]类似于以下内容的部分：

```
[workspace]
members = [
    "src/my_rust_program",
]
```

有关[workspace]部分和[workspace]键的信息，请参阅[工作区](https://doc.rust-lang.org/cargo/reference/workspaces.html)。关于你可以在Cargo.toml文件中配置的其他部分和键的信息，请参见[Manifest规范](https://doc.rust-lang.org/cargo/reference/manifest.html)。


删除该[dependencies]部分。

保存更改并关闭文件继续下一步。

src/Cargo.toml在文本编辑器中打开文件。

添加一个[lib]包含主源代码路径的部分，类似于以下内容：
```
[lib]
path = "main.rs"

```

[dependencies]使用任何包依赖项更新该部分。

保存更改并关闭文件继续下一步。


### 添加一个程序罐的配置文件

当你使用DFINITY Canister SDK创建一个新项目时，dfx new命令会自动添加一个默认的dfx.json配置文件到项目目录中。因此时使用Cargo创建了Rust项目，所以你需要在项目目录中手动创建这个文件。

要添加dfx.json配置文件。

如果有必要，通过运行pwd命令，检查你是否还在你的项目目录中。

在你项目的根目录下创建一个新的 dfx.json 配置文件。

在文本编辑器中打开 `dfx.json` 文件。

在dfx.json文件中加入版本号和程序罐配置，设置的内容如以下:

```
{
  "version": 1,
  "canisters": {
    "my_rust_program": {
      "type": "custom",
      "candid": "src/my_rust_program.did",
      "wasm": "target/wasm32-unknown-unknown/debug/my_rust_program.wasm",
      "build": "cargo build --target wasm32-unknown-unknown --package my_rust_program"
    }
  }
}
```

+ 让我们仔细看一下这些设置。

    + 版本设置用于识别用于创建项目的软件版本。

    + 程序罐部分指定了项目的程序罐名称。在本例中，只有单个程序罐，它被命名为`my_rust_program`。

    + 类型键被设置为自定义，因为这个程序罐不是目前公认的（motoko或assets）程序罐类型之一。

    + candid键指定了这个项目要使用的Candid接口描述文件的名称和位置。

    + wasm键指定了由cargo build命令生成的WebAssembly文件的路径。

    + build键指定用于编译输出的cargo命令。

    + 这些必须的配置选项。如果你构建更复杂的程序时，你可能需要在Cargo.toml文件、dfx.json文件或两个文件中包含额外的配置细节。

    + 保存你的修改并关闭文件继续下一步。


### 创建一个Candid接口描述文件

除了dfx.json配置文件，你还需要有一个Candid接口描述文件--例如，`my_rust_program.did`，以便将你的程序的输入参数和返回值格式映射到Candid中的语言无关的表示。

要添加Candid接口描述文件。

如有必要，通过运行pwd命令，检查你是否仍在你的项目目录中。

在项目的src目录下创建一个新的Candid接口描述文件--例如，`my_rust_program.did`。

在文本编辑器中打开Candid接口描述文件，为程序定义的每个功能添加描述。

例如，如果`my_rust_program`是一个简单的程序，使用增量、读和写函数来增加一个计数器，`my_rust_program.did`文件可能看起来像这样:

```
service : {
  "increment": () -> ();
  "read": () -> (nat) query;
  "write": (nat) -> ();
}
```

保存文件并关闭,进行下一步。

### 修改默认程序

当你创建一个新项目时，你的项目src目录包括一个模板main.rs文件，里面有 "`Hello, World!`"程序。

要修改模板的源代码。

在文本编辑器中打开模板 src/main.rs 文件，删除现有内容。

编写你想在互联网计算机上部署的程序。

当你写程序时，请记住有两种类型的调用--更新调用和查询调用，而且更新函数使用异步消息传递。

保存你的修改并关闭main.rs文件。

### 连接到网络并进行部署

+ 在你部署和测试你的程序之前，你需要做以下工作:

    + 连接到互联网 计算机网络，要么在你的开发环境中本地运行，要么在你能访问的子网中远程运行。

    + 为程序注册一个网络专用标识符(程序罐ID,通过NNS注册)

    + 用WebAssembly的目标输出来编译程序。

因为你把自定义的dfx.json文件配置了一个编译为WebAssembly的构建命令，那么你可以使用dfx命令行界面和标准工作流程来执行之后剩余的步骤。

要在本地构建和部署该程序,需要以下步骤:

如有必要，通过运行pwd命令，检查你是否仍在你的项目目录中。

在你的本地计算机上打开一个新的终端窗口或子窗口，并切换到你的项目目录。

例如，如果在macOS上运行终端，你可以做以下任何一项:command + 空格,搜索 terminal 或直接command +N 打开新的窗口

如果你的location_hello项目在ic-projects工作文件夹中，点击Shell并选择新窗口，然后在新终端中运行`cd ~/ic-projects/location_hello`。

你现在应该有两个终端打开，你的项目目录是你当前的工作目录。

通过运行以下命令，在你的本地计算机上启动互联网计算机网络:`dfx start`


根据你的平台和本地安全设置，你可能会看到显示一个警告。如果提示你允许或拒绝传入的网络连接，点击允许。

让显示网络操作的终端打开，将焦点切换到你创建项目的原始终端。

通过运行以下命令为应用程序注册一个唯一的程序罐标识符: `dfx canister create --all`


通过运行下面的命令来构建程序: `dfx build`


通过运行下面的命令在本地网络上部署该程序: `dfx canister install --all`


从命令行或浏览器中测试程序中的功能。

### 使用C 语言

因为互联网计算机支持编译成标准WebAssembly模块的应用程序，你可以使用标准的编译器和工具链来构建C、C++、Objective-C和Objective-C++编程语言和Clang编译器等语言的应用程序。

为了说明如何将用C语言编写的程序迁移到互联网计算机上运行，让我们看看例子库中的简单的reverse.c程序。reverse.c程序包含一个名为go的函数，它将一个字符串原地反转。

设置开发环境
为了将reverse.c程序编译成WebAssembly，你需要安装clang编译器和标准库。你可以通过运行以下命令来检查你的本地计算机上是否安装了clang。

`clang --version`


如果clang已经安装，该命令会显示类似以下的信息:

```
clang version 10.0.0
Target: x86_64-apple-darwin19.5.0
Thread model: posix
InstalledDir: /usr/local/opt/llvm/bin
```

如果该命令没有返回版本信息，请clang在继续之前安装。安装步骤clang因您使用的操作系统而定。比如，在 Debian系统上，运行以下命令：`sudo apt-get install clang lld gcc-multilib`

在 macOS 上，您可以clang通过安装 Developer Command-Line Tools 或使用 Homebrew 安装 LLVM 进行安装。例如，如果clang未安装，则运行以下命令:`brew install llvm`

### 将程序编译成 WebAssembly

您可以编译 C 程序以作为 WebAssembly 模块运行，方法是先编译 using clang，然后使用 链接wasm-ld。根据clang您使用的操作系统和版本，您可能会使用不同版本的 WebAssembly 链接器，例如wasm-ld在 macOS 或wasm-ld-8Debian 上。

在 macOS 上编译为 WebAssembly：

通过运行以下 clang 命令来编译程序：`clang --target=wasm32 -c -O3 reverse.c`

通过运行以下wasm-ld命令运行链接器以创建 WebAssembly 模块：`wasm-ld --no-entry --export-dynamic --allow-undefined reverse.o -o reverse.wasm`


### 创建基础配置文件

接下来，需要准备一个简单的配置文件，该文件将reverse程序二进制文件标识为一个可以安装在 Internet 计算机上的包和一个build目录，以便您可以使用dfx命令行界面将程序包作为容器安装和运行。

准备配置文件和构建目录：

dfx.json通过运行以下命令创建一个带有 canisters 键的文件：`echo '{"canisters":{"reverse":{"main":"reverse"}}}' > dfx.json`



build通过运行以下命令为程序创建一个目录：`mkdir build`

reverse通过运行以下命令为程序创建一个目录：`mkdir build/reverse`

build/reverse通过运行以下命令将 WebAssembly 模块复制到新目录：`cp reverse.wasm build/reverse/`

### 创建一个基础的接口描述文件


在标准开发工作流程中，运行dfx build命令会在canisters输出目录中创建多个文件，包括一个或多个 Candid 接口描述 ( .did) 文件，这些文件处理与程序功能关联的数据类型的类型匹配。

有关用于不同数据类型的语法的详细信息，请参阅[Candid 指南](https://sdk.dfinity.org/docs/candid-guide/candid-intro.html)和[Candid 规范](https://github.com/dfinity/candid/tree/master/spec)。

要为此程序创建 Candid 接口描述文件：

在build您为reverse.c程序源创建的目录中打开一个终端

创建一个名为reverse.did.

添加go函数的描述。

例如：

```
service : {
  "go": (text) -> (text);
}
```

保存更改并关闭文件继续下一步。


### 部署和测试程序
在部署和测试程序之前，您需要执行以下操作：

连接到 Internet 计算机网络，在您的开发环境中本地运行或在您可以访问的子网上远程运行。

为应用程序注册特定于网络的标识符。

在本地部署和测试应用程序：

在本地计算机上打开一个新的终端窗口或选项卡。

例如，如果在 macOS 上运行终端，请单击Shell，然后选择新建选项卡在当前工作目录中打开一个新终端。

通过运行以下命令，在第二个终端中的本地计算机上启动 Internet 计算机网络：`dfx start`

reverse通过运行以下命令为应用程序注册唯一的容器标识符：`dfx canister create --all`


通过运行以下命令在本地网络上部署默认程序：`dfx canister install --all`


服务go通过运行以下命令调用程序中的函数：`dfx canister call reverse go reward ("drawer")`

您可以在[示例](https://github.com/dfinity/examples/tree/master/c)存储库中找到 C 程序的[其他示例](https://github.com/dfinity/examples/tree/master/c)。