---
sidebar_position: 2
---

# 安装、升级或删除软件

正如快速入门中所述，您可以通过在终端外壳中运行命令来下载和安装最新版本的DFINITY Canister SDK包。本节中的主题提供了有关安装、升级和删除DFINITY Canister SDK的其他信息。

### 直接从终端安装最新版本

+ 要从终端shell中下载并安装。
  + 在您的本地计算机上打开一个终端shell。
    + 例如，在macOS上打开Applications文件夹，然后打开Utilities，双击终端。

  + 通过运行以下curl命令下载并安装SDK包:`sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"`


### 从终端安装一个特定的版本

如果你想安装一个特定的版本，例如，针对以前的版本进行测试，你可以修改安装命令以包括一个版本。

+ 要从终端外壳下载并安装一个特定的版本:
  + 在你的本地计算机上打开一个终端shell。
  + 将DFX_VERSION环境变量设置为您要安装的DFINITY Canister SDK包的版本，作为curl命令的前缀。

+ 例如，要安装0.7.0版本，你可以运行以下命令:`DFX_VERSION=0.7.0 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"`

提示:如果您使用DFX_VERSION环境变量来安装尚未公开的DFINITY Canister SDK版本，请参阅这篇[文章](https://sdk.dfinity.org/docs/developers-guide/http-middleware.html)以了解变化情况。

### 审查许可协议
在您的本地计算机上安装dfx命令行界面可执行文件及其附属文件之前，安装脚本会提示您阅读并接受DFINITY Canister SDK许可协议。您必须键入“y”并按回车键以继续安装。

在您接受许可协议后，安装脚本会显示有关在本地计算机上安装的组件的信息。


### 安装什么 

DFINITY Canister SDK 在执行脚本之后安装了很多组件。下面描述了安装脚本运行后的开发环境组件默认路径:

| 组件 | 描述   | 默认位置 | 
| ----- | --------- | ----------- | 
| dfx | DFINITY 的命令行界面默认命令  |             | 
| moc  | Motoko 编译和运行环境     | `/usr/local/bin/dfx`     |
| replica  | Internet 计算机本地网络二进制文件     | `~/.cache/dfinity/versions/<VERSION>/moc`    |
| uninstall.sh  | 卸载DFINITY Canister SDK 以及其他组件的脚本     | `~/.cache/dfinity/versions/<VERSION>/replica`  |
| versions  | 缓存目录，其中包含您安装的每个 DFINITY Canister SDK 版本的子目录     | `~/.cache/dfinity/versions`    |


### 版本目录下的核心组件

`~/.cache/dfinity/versions` 目录存储了 DFINITY Canister SDK 的一个或多个版本的子目录。每个版本的子目录包含 `DFINITY Canister SDK` 的特定版本所需的所有目录和文件。例如，先查看当前的dfx版本,然后在运行  `ls -l ~/.cache/dfinity/versions/0.7.2 ` 目录的内容，你可以看到以下核心组件:

![dfx-core-compent](https://gateway.pinata.cloud/ipfs/QmR4SfCXxbXGvEvsCGnnWeUnEmQV4TvwR3ZtaiZQ28eC4A)

### Motoko基础目录

DFINITY Canister SDK的版本子目录中的基础目录包含与该版本的DFINITY Canister SDK兼容的Motoko基础库模块。由于Motoko基础库发展迅速，您应该只使用与您所安装的DFINITY Canister SDK版本打包的基础模块。

### Bootstrap目录

Bootstrap目录包含了已经废弃的网络服务器代码。从0.7.0版本开始，代理可以调用一个HTTP中间件服务器，而不是引导代码。这一变化使程序罐能够直接响应HTTP请求，并更像传统的基于Web的应用程序的操作。

### 升级到最新版本

如果在您初次安装后，DFINITY Canister SDK的新版本可供下载，您应在方便时尽早安装更新的版本，以尽快获得最新的修复和改进。您可以使用dfx升级命令(`sudo dfx upgrade`)来比较您当前安装的版本和可下载的最新版本。如果有更新的dfx版本，dfx升级命令(`sudo dfx upgrade`)会自动下载并安装最新版本。

比如把DFX从:`dfx 0.7.0-beta.8`升级到最新版,如下图所示:

![dfx upgrade](https://gateway.pinata.cloud/ipfs/QmVszFPV2JrHJiCozY88Kxhja3myjPTEP4NQAiRu7gq5yH)

注意，在安装新版本之前，你不需要卸载软件。然而，如果你想执行一个干净的安装而不是升级，你可以先按照移除软件中的描述卸载软件，然后重新运行下载和安装命令。

关于最新版本中的功能和修复的信息，请参见[历史发行版本](https://sdk.dfinity.org/docs/release-notes/sdk-release-notes.html)。

### 删除软件

当您安装DFINITY Canister SDK时，安装脚本会将所需的二进制文件放在本地目录中并创建一个缓存。您可以通过运行位于.cache文件夹中的卸载脚本从本地计算机上删除SDK二进制文件和缓存。

比如说:`~/.cache/dfinity/uninstall.sh`

如果你卸载是因为你想立即重新安装一个最新的干净dfx版本，你可以运行以下命令:`~/.cache/dfinity/uninstall.sh && sh -ci "$(curl -sSL https://sdk.dfinity.org/install.sh)"`

