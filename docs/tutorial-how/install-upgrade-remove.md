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


### TODOTODO 

