---
sidebar_position: 9
---

# 排除故障的问题

+ 本节提供信息以帮助您快速排查问题和解决与下列任务有关的常见问题：
  + 下载和安装 DFINITY Canister SDK
  + 创建、构建或部署程序罐
  + 使用 dfx 命令行界面
  + 在开发环境中本地运行IC服务

### 确保Node环境在项目中是可用的

因为项目依靠webpack来提供默认前端的框架，你必须在开发环境中安装node.js，并在项目目录中可以访问。

如果你想不使用默认的webpack配置和canister别名来开发你的项目，你可以从dfx.json文件中删除assets canister，或者使用一个特定的canister名称来构建你的项目。例如，你可以选择只构建hello程序而不使用前端资产，方法是运行以下命令：`dfx build hello`

如果你使用默认的webpack配置，并且运行dfx build失败，你应该尝试在项目目录中运行npm install，然后重新运行dfx build。

如果在项目目录下运行`npm install`不能解决问题，你应该检查webpack.config.js文件的配置是否有语法错误。

### 迁移一个现有的项目

目前，对于你可能使用以前版本的dfx命令行界面创建的任何项目，没有自动迁移或向后兼容。在升级到最新版本后，如果你试图构建或安装一个用以前版本的dfx命令行界面创建的项目，你可能会看到错误或失败信息。

然而，在许多情况下，你可以通过手动修改`dfx.json`配置文件中的dfx设置，然后重建项目，使其与你目前安装的dfx命令行界面的版本兼容，继续使用以前版本的项目。

例如，如果你有一个用`dfx 0.4.9`版本创建的项目，在文本编辑器中打开`dfx.json`文件，将dfx设置改为最新版本，或完全删除该部分。

### 重新启动本地IC

在某些情况下，由于复制的状态错误，在本地启动IC服务会失败。如果你在运行dfx启动启动本地Internet计算机网络时遇到问题。

在显示网络操作的终端中，按Control-C来中断本地网络进程。

通过运行下面的命令停止IC服务：`dfx stop`


通过运行下面的命令，在干净的状态下重新启动因特网计算机:`dfx start --clean`

--clean选项将检查点和陈旧的状态信息从你的项目缓存中移除，这样你就可以在干净的状态下重启互联网计算机的复制和网络服务器进程。

然而，请记住，如果你通过运行`dfx start --clean`来重置状态信息，你现有的程序罐也会被删除。

运行`dfx start --clean`后，通过运行以下命令重新创建你的程序罐。

```
dfx canister create --all
dfx build
dfx canister install --all
```

### 移除canisters目录

如果你在成功连接到互联网计算机并注册了canister标识符后，在构建或部署canisters时遇到问题，你应该在试图重建或重新部署canisters之前删除canisters目录。

你可以通过在项目的根目录下运行以下命令来删除项目的canisters目录。

`sudo rm -rf ./.dfx/* canisters/*`


### 重新安装dfx

许多你可能遇到的错误可以通过卸载和重新安装dfx命令行界面来解决。下面是一些重新安装dfx的方法。

如果你的开发环境中只安装了一个版本的 dfx，你通常可以运行以下命令来卸载和重新安装最新版本的 dfx。

`~/.cache/dfinity/uninstall.sh && sh -ci "$(curl -sSL https://sdk.dfinity.org/install.sh)"`


如果你修改了 dfx 二进制文件的位置，你可能想运行以下命令来卸载你 PATH 中的 dfx 版本，然后重新安装最新版本的 dfx。

`rm -rf ~/.cache/dfinity && rm $(which dfx) && sh -ci "$(curl -sSL https://sdk.dfinity.org/install.sh)"`

### Xcode的环境配置

某些版本的DFINITY Canister SDK提示您在macOS电脑上创建新项目时要安装Xcode。该提示已被删除，dfx new命令不要求您安装任何macOS开发工具。然而，如果你想为你的项目创建一个Git仓库，你应该安装开发者命令行工具。

你可以通过运行`xcode-select -p`来检查你是否安装了开发者工具。你可以通过运行`xcode-select --install`来安装开发者工具。

### 使用虚拟机时构建失败

如果你在Ubuntu或CentOS上使用虚拟机镜像运行dfx，当你试图运行dfx构建命令时，你可能会看到类似这样的错误信息。

```
Building hello...
An error occurred:
Io(
    Os {
        code: 2,
        kind: NotFound,
        message: "No such file or directory",
    },
)
```


### 使用中的地址错误或孤儿进程

如果你在本地开发项目，你经常有一个本地版本的核心互联网计算机进程--统称为副本--在一个单独的终端或在后台运行。如果正在运行的互联网计算机进程没有被正确终止，你可能会看到操作系统错误，表明一个地址已经被使用，或者无法使用dfx stop命令正常停止进程。

有几种情况下，你可能会遇到这个问题。例如，如果你在一个本地项目目录下运行dfx start，然后改变到一个不同的本地项目目录，而没有首先停止互联网计算机进程，你可能会看到这个问题。

如果你遇到一个问题，你怀疑或收到一个地址已经被使用或一个进程已经在后台运行的消息，请执行以下步骤。

如果你使用默认的本地网络绑定，运行下面的命令来查看哪个进程正在监听8000端口:`lsof -i tcp:8000`

运行下面的命令来终止任何无主进程:`killall dfx replica`

关闭当前终端并打开一个新的终端窗口,在新的终端中，运行以下命令，在干净的状态下运行本地互联网计算机:`dfx start --clean --background`


### 内存泄漏

修复内存泄漏是一个持续的过程。如果你遇到任何与内存泄漏有关的错误信息，你应该采取以下措施。

运行`dfx stop`来停止当前运行的进程。

卸载dfx以防止进一步退化。

重新安装dfx

运行`dfx start`来重新启动复制进程。

或者，你可以删除 `.cache/dfinity` 目录并重新安装最新的 dfx 二进制文件。例如:`rm -rf ~/.cache/dfinity && sh -ci "$(curl -sSL https://sdk.dfinity.org/install.sh)"`