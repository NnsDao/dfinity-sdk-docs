---
sidebar_position: 2
---

# 环境变量

你可以使用环境变量为你的`DFINITY Canister SDK`执行环境配置某些属性。

本节列出了目前支持的环境变量以及如何使用它们的例子。在大多数情况下，你可以通过在终端执行命令或在你的`.profile`文件中添加类似以下的命令为一个会话设置环境变量：`export DFX_TELEMETRY_DISABLED=1`

**CANISTER_CANDID_PATH_{canister.name}**

使用带有`CANISTER_CANDID_PATH`前缀的环境变量来引用程序罐的Candid描述文件的路径，这些程序罐在你项目的dfx.json文件中被列为依赖项。

例如，如果你有一个`whoami_assets`程序罐，在依赖项下列出了whoami，你可以使用`CANISTER_CANDID_PATH_whoami_assets`环境变量来引用`whoami.did`文件的位置，对于本地开发来说可能是:`$PROJECT_ROOT/.dfx/local/canisters/whoami/whoami.did`

**CANISTER_ID_{canister.name}**

使用带有`CANISTER_ID`前缀的环境变量来引用你项目的`dfx.json`文件中每个程序罐的标识符。

例如，如果你有一个由`linkedup`和`connectd`两个程序罐组成的linkedup项目，你可以使用`CANISTER_ID_linkedup`和`CANISTER_ID_connectd`环境变量来引用为你的项目创建的程序罐标识符--例如`ryjl3-tyaaa-aaaaa-aaaba-cai`和`rkah-fqaaa-aaaaa-cai`。

**dfx_config_root**

使用`DFX_CONFIG_ROOT`环境变量来指定一个不同的位置来存储`dfx`的`.cache`和`.config`子目录。

默认情况下，`.cache和.config`目录位于你的开发环境的主目录中。例如，在macOS上，默认位置是在`/Users/<YOUR-USER-NAME>`目录下。使用`DFX_CONFIG_ROOT`环境变量为这些目录指定一个不同的位置:`DFX_CONFIG_ROOT=~/ic-root`

**dfx_installation_root**

如果你不使用操作系统的默认位置，请使用 `DFX_INSTALLATION_ROOT` 环境变量为 dfx 二进制文件指定一个不同的位置。

`.cache/dfinity/uninstall.sh` 脚本使用此环境变量来确定你的` DFINITY Canister SDK `安装的根目录。

**dfx_telemetry_disabled**

使用 `DFX_TELEMETRY_DISABLED` 环境变量可选择不收集有关 dfx 使用的数据。

默认情况下，dfx被配置为收集匿名的--即没有识别信息，如IP地址或用户信息--有关dfx命令活动和错误的数据。收集匿名数据是默认启用的，目的是根据使用模式和行为来改善开发者的体验。

然而，如果你想阻止收集有关dfx使用的数据，你可以通过设置DFX_TELEMETRY_DISABLED环境变量来明确选择退出:`dfx_telemetry_disabled=1`

**DFX_VERSION**

使用DFX_VERSION环境变量来确定你要安装的`DFINITY Canister SDK`的特定版本:`DFX_VERSION=0.7.2 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"`