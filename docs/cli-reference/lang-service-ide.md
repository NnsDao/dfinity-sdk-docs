---
sidebar_position: 4
---

# 语言服务器和开发客户端支持

语言服务器协议（LSP）--最初由微软开发--提供了一种通用语言，以增加广泛有用的功能，如自动完成代码、GoTo定义和悬停在开发工具上的工具提示。使用语言服务器协议，语言服务器可以在编程语言和任何编辑器、集成开发环境（IDE）或客户端终端工具之间进行标准化的进程间通信。

因为语言服务器协议（LSP）将特定语言服务器和开发工具的通信协议标准化，所以一个语言服务器可以在多个开发工具中重复使用，只需付出最小的努力。

### 为Motoko添加一个语言服务器

使用`DFINITY Canister SDK`，当你在配置为识别语言服务器的编辑器或开发环境中打开Motoko程序时，你可以通过调用`dfx _language-service`来为你的编辑器或开发环境客户端添加Motoko的语言服务器。你可以使用任何支持语言服务器协议的编辑器或集成开发环境，以编程方式调用`dfx _language-service`。一旦被调用，语言服务器确保你的开发环境报告Motoko编译器错误，并提供代码完成和重构工具。

例如，如果你使用`Visual Studio Code（VSCode）`或Emacs作为你的开发环境，你可以安装一个插件扩展，使这些编辑器能够自动调用Motoko语言服务器。

目前只有Visual Studio Code (VSCode)插件扩展可用于Motoko。关于安装该插件的信息，请参见安装语言编辑器插件。

### 手动调用语言服务

尽管你很少会在终端外壳中直接启动Motoko语言服务器，但可以通过运行以下命令来实现:`dfx _language-service --force-tty`

注意，你只能在一个项目目录内运行这个命令。例如，如果你的项目名称是hello_world，你的当前工作目录必须是hello_world的顶级项目目录或其子目录之一。

**基本用法**

dfx _language-service [canister_name] [flag]


**参数**

你可以在`dfx _language-service`命令中使用以下可选的参数:

--force-tty , 直接在终端 shell 中启动 Motoko 语言服务器。

-h, --help ,显示帮助信息。

-V, --version ， 显示版本信息。

**入参**

你可以为`dfx _language-service`命令指定以下入参：


程序罐名称（canister_name），指定编译器应该监视的罐子的名称。如果你指定了一个罐子的名字，这个名字应该与你在项目的dfx.json配置文件中配置的罐子名字相匹配。如果你没有指定罐子的名字，在dfx.json配置文件中指定的第一个罐子将被作为目标。

**例子**

如果你想使用集成开发环境来开发my-canister的代码，你应该让开发环境使用以`dfx _language-service`命令来调用语言服务:`dfx _language-service my-canister`


