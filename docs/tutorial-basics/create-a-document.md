---
sidebar_position: 2
---

# 网络部署

本快速入门方案假设您是第一次安装DFINITY Canister SDK，并在远程运行的Internet计算机上部署默认项目。

如果您只在本地开发环境中部署项目，请参阅本地开发方案。

首先，让我们建立并部署一个简单的Hello应用程序，它只有一个函数--greet。greet函数接受一个文本参数，如果你使用命令行运行应用程序，则在终端中返回类似于Hello, everyone！的问候语，如果你在浏览器中访问该应用程序，则在HTML页面中返回问候语。

### 在你开始之前

+ 在您下载和安装这个版本的DFINITY Canister SDK之前，请确认以下几点:

  + 您的本地macOS或Linux电脑上有互联网连接和访问shell终端。
  + 目前，DFINITY Canister SDK只能在装有macOS或Linux操作系统的电脑上运行。
  + 如果你想访问默认项目的前端页面，确保你已经安装了node.js。
  + 你有ICP代币或Cycles供你使用。


+ 你必须有可用的Cycles才能完成本教程。要获得Cycles，你必须将ICP令牌转换为Cycles，或者从其他来源提供Cycles，例如，从其他开发者控制的程序罐或第三方Cycles提供者那里。本教程假设你有一个可用的ICP代币的账户，并说明如何将ICP代币转换成Cycles，并将这些Cycles转移到你控制的Cycles钱包。

+ 提示:**关于如何获得ICP代币的信息，请看如何获得ICP代币。关于使用网络神经系统应用程序来管理ICP代币的介绍，请看网络神经系统应用程序快速入门。关于在你创建默认Cycles钱包后使用它的信息，请参阅使用默认Cycles钱包。**

+ 本教程假定你知道如何在你的电脑上执行常见的任务，如打开终端和运行命令。如果你不知道如何打开一个新的终端外壳，或如何安装像node.js这样的软件包，请看新手的初步步骤。如果你可以在没有指示的情况下满足先决条件，继续下载和安装。

### 下载并安装

+ 你可以在本地计算机的终端外壳内直接下载最新版本的DFINITY Canister软件开发工具包（SDK）。如果您之前已经安装了DFINITY Canister SDK，您可以跳过本节，开始创建一个新项目。

+ 进行以下步骤(下载和安装):
  + 在您的本地计算机上打开一个 terminal。
  + 例如，打开 "应用程序"、"实用工具"，然后双击 "终端 "或按⌘+空格键打开 "搜索"，然后输入 terminal。
  + 通过运行以下命令下载并安装DFINITY Canister SDK包。
  + `sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"`
  + **该命令提示您在本地计算机上安装DFINITY执行命令行界面（CLI）及其依赖项之前，请阅读并接受许可协议。**
  + 输入y并按回车键，继续安装。(命令显示本地计算机上正在安装的组件的信息。)

### 验证SDK是否可以使用

如果安装脚本运行时没有任何错误，那么你开始开发在互联网计算机区块链上运行的程序所需要的一切将在你的本地计算机上可用。

为了验证SDK是否可以使用。

如果您还没有打开的话,在您的本地电脑上打开一个终端。

检查您是否安装了DFINITY执行命令行界面（CLI），并且DFX可执行文件在您的PATH中可用，请运行以下命令。

`dfx --version` (该命令显示dfx命令行执行程序的版本信息，类似于下面的输出。)

dfx 0.7.2

通过运行下面的命令来预览其他dfx命令行子命令的使用信息。

`dfx --help` (该命令显示dfx父命令及其子命令的使用信息。)

### 创建一个新的项目

互联网计算机的应用程序以项目形式启动。你使用dfx父命令和它的子命令创建项目。

在本教程中，我们将从默认的示例应用程序开始，以说明使用项目中的启动文件创建一个应用程序。当你创建一个新项目时，dfx命令行界面会给你的工作区添加一个默认的项目目录结构。我们在探索默认项目的教程中介绍了组成项目目录的模板文件。

要为你的第一个应用程序创建一个新项目。


在本地电脑上打开一个终端窗口,通过运行以下命令创建一个名为hello的新项目:`dfx new hello`


该命令为您的项目创建一个新的hello项目目录、模板文件和一个新的hello Git 存储库。

如果使用的名字不是hello，请记下您使用的名称。hello在这些说明中，您需要使用该项目名称代替项目名称。

通过运行以下命令切换到您的项目目录：`cd hello`

### 检查网络连接

+ 在 ICP上部署您的第一个项目之前，您需要连接到在您可以访问的子网上远程运行的网络网关。有一个保留的网络别名，您可以使用它来访问在数据中心节点上远程运行的 ICP。网络别名是内部定义的系统设置，因此默认情况下您无需在项目中配置任何内容。

+ 要检查与 ICP网络的连接：

  + 如果需要，请检查您是否位于项目的根目录中。
  + 通过为网络别名运行以下命令，检查 ICP网络的当前状态以及连接到它的能力ic： `dfx ping ic`
  + 验证该dfx ping ic命令是否返回有关您正在连接的 ICP网络的信息。

例如，您应该会看到类似于以下内容的输出：

```
    {
    “ic_api_version”： “0.18.0”， “impl_hash”： “d639545e0f38e075ad240fd4ec45d4eeeb11e1f67a52cdd449cd664d825e7fec” “impl_version”： “8dc1a28b4fb9605558c03121811c9af9701a6142” “replica_health_status”： “健康”， “root_key”：[48，129，130，48，29，6，13，43 , 6, 1, 4, 1, 130, 220, 124, 5, 3, 1, 2, 1, 6, 12, 43, 6, 1, 4, 1, 130, 220, 124, 5, 3, 2 , 1, 3, 97, 0, 129, 76, 14, 110, 199, 31, 171, 88, 59, 8, 189, 129, 55, 60, 37, 92, 60, 55, 27, 32 , 134, 60, 152, 164, 241, 224, 139, 116, 35, 93, 20, 251, 93, 156, 12, 213, 70, 217, 104, 95, 4, 14 14 , 197, 52, 21, 131, 191, 75, 67, 146, 228, 103, 219, 150, 214, 91, 155, 180, 203, 113, 113, 4, 3, 12, 12 , 77, 20, 80, 95, 253, 116, 132, 176, 18, 145, 9, 28, 95, 135, 185, 136, 131, 70, 63, 152, 9, 2611, 170, 174]
    }
```

### 确认你的开发者身份和分类帐账户(ledger账户)

+ 所有的ICP代币交易都记录在互联网计算机上运行的ledger账户中。ledger罐由所有ICP代币持有者的账户标识和余额组成。

+ 在你转移你在分类账账户中持有的任何ICP代币之前，你需要发送一个安全的、正确签名的信息，向分类账验证你的身份，并授权你的开发者身份来完成交易。

+ 根据你为持有ICP代币而设置的保管方式，连接到分类账并完成交易所需的硬件、软件和步骤可能有所不同。例如，您可以通过硬件钱包、使用硬件安全模块（HSM）设备、通过网络神经系统（NNS）前端应用程序或使用`DFINITY Canister SDK dfx`命令行界面连接到分类账并开始交易。每种方法都提出了一个不同的接口，用于签署和发送消息到分类账，并代表你作为账户持有人的身份。

### 关于你的开发者身份

+ 在您第一次使用DFINITY Canister SDK时，dfx命令行工具会为您创建一个默认的开发者身份。该身份由一个委托人数据类型和一个委托人的文本表示，通常被称为您的委托人标识符。每个身份账户的这种表示方法类似于比特币或以太坊地址。

+ 然而，与你的开发者身份相关的本金通常与你在分类账中的账户标识符不一样。主体标识符和账户标识符是相关的--两者都提供你的身份的文本表示，但它们使用不同的输出格式。

### 连接到分类账以获得账户信息

+ 在本教程中--没有硬件钱包或外部应用程序连接到分类账--我们将使用你的开发者身份来检索你的分类账账户标识，然后将ICP代币从分类账账户标识转移到由你的开发者身份控制的Cycles钱包程序罐。

+ 要在分类账中查找你的账户:
  + 通过运行以下命令确认你当前使用的开发者身份: `dfx identity whoami`
  + 在大多数情况下，你应该看到你目前正在使用默认的开发者身份。例如: `default`
  + 通过运行以下命令查看当前身份的本金的文本表示: `dfx identity get-principal` (这个命令显示的输出类似于以下内容:`tsqwz-udeik-5migd-ehrev-pvoqv-szx2g-akh5s-fkyqc-zy6q7-nav6-uqe`)
  + 通过运行以下命令获得你的开发者身份的账户标识:`dfx ledger account-id` (这条命令显示与你的开发者身份相关的分类账账户标识符。例如，你应该看到类似以下的输出:03e3d86f29a069c6f2c5c48e01bc084e4ea18ad02b0eec8fccadf4487183c223)
  + 通过运行以下命令检查你的账户余额: `dfx ledger --network ic balance` (这个命令显示了分类账账户的ICP令牌余额。)例如，你应该看到类似以下的输出:10.00000000 icp


### 将ICP代币转换为Cycles

现在你已经确认了你的账户信息和当前的ICP代币余额，你可以将其中的一些ICP代币转换成Cycles，并将它们转移到Cycles钱包中。

要转移ICP代币来创建一个Cycles钱包。

通过运行类似下面的命令，从你的分类账账户转移ICP代币，创建一个新的Cycles钱包:

`dfx ledger --network ic create-canister <principal-identifier> --amount <icp-tokens>`


这个命令把你为--amount参数指定的ICP令牌数量转换成Cycles，并把这些Cycles与你指定的委托人控制的新程序罐标识符联系起来。

例如，下面的命令将0.25个ICP令牌转换为Cycles，并指定默认身份的委托人标识符作为新程序罐的控制人。

`dfx ledger --network ic create-canister tsqwz-udeik-5migd-ehrev-pvoqv-szx2g-akh5s-kyqc-zy6q7-nav6-uqe --amount 0.25`

如果交易成功，账本会记录该事件，你应该看到类似以下的输出:

```
在BlockHeight发送的转账：20
创建的程序罐ID为："gastn-uqaaa-aaaae-aaafq-cai"
```

通过运行类似以下的命令，在新创建的程序罐占位符中安装Cycles钱包代码: `dfx identity --network ic deploy-wallet <canister-identifer>`


例如: `dfx identity --network ic deploy-wallet gastn-uqaaa-aaaae-aaafq-cai`

这个命令显示的输出与下面类似:

```

在IC网络上创建一个钱包罐
default用户在IC主网上的钱包罐是 "gastn-uqaaa-aaaae-aaafq-cai"

```

### 验证你的Cycles钱包

将 ICP 代币转换为Cycles后，您可以验证Cycles钱包罐并检查您当前的Cycles余额。

要验证您的Cycles钱包：

通过运行以下命令验证您部署的Cycles钱包的容器标识符： `dfx identity --network ic get-wallet`


该命令显示您的Cycles钱包的罐标识符，输出类似于以下内容： `gastn-uqaaa-aaaae-aaafq-cai`

通过运行类似于以下的命令，检查您的Cycles钱包罐是否已正确配置并保持Cycles平衡： `dfx wallet --network ic balance`


该命令返回您的cycles 钱包的余额。例如：`15430122328028812 个Cycles`

您还可以使用类似于以下内容的 URL 在 Web 浏览器中访问您的默认Cycles钱包： `https://<WALLET-CANISTER-ID>.raw.ic0.app`

第一次访问该应用程序时，你会看到一条通知，提示您正在使用匿名设备，并提示您验证您的身份、授权访问钱包并注册您的设备。

单击“身份验证”以继续使用 Internet 身份服务。

如果您之前已注册身份或注册为新用户，请输入您的用户ID。

**提示:有关 Internet 身份服务以及如何注册多个身份验证设备和方法的详细信息，请参阅如何使用 Internet 身份服务。**

使用您的用户ID和您注册的身份验证方法（例如，安全密钥或指纹）进行身份验证。

单击继续以访问默认Cycles钱包应用程序。

通过复制“注册设备”页面中显示的命令并在终端中运行它来注册您用于此会话的设备。

例如，authorize使用类似于以下的命令调用Cycles钱包罐的方法：

`dfx canister --no-wallet --network ic call "gastn-uqaaa-aaaae-aaafq-cai" 授权'(principal "ejta3-neil3-qek6c-i7rdw-sxreh-lypfe-v6hjg-6so7x-5ugze-3iohr-2e" )'`

确保您复制的命令具有--no-wallet选项和正确的网络 ( ic) 参数。您应该将程序罐标识符（在本例中）识别为gastn-uqaaa-aaaae-aaafq-cai与您的身份相关联的Cycles钱包。但是，如果这是你在网络上的第一个钱包，您可能无法识别被授权的委托人。在这种情况下，使用不同的主体是预期的行为。

运行上面命令authorize授权浏览器刷新时，将显示您的主账户的Cycles钱包的一些信息。

在浏览器中查看您的Cycles余额和运行状态。

例如：![Cycles余额](https://sdk.dfinity.org/docs/quickstart/_images/cycles-wallet.png)

有关可用于使用默认Cycles钱包的命令和方法的更多信息，请参阅如何使用默认Cycles钱包。

### 注册、构建和部署应用程序

在验证您的Cycles钱包余额后，您可以注册、构建和部署您的示例应用程序。

+ 在 ICP上部署您的第一个应用程序：
  + 在终端 shell 中，检查您是否仍在项目的根目录中。
  + 初始化前端环境,确保你已经可以使用node环境：运行 `npm install` 
  + 通过运行以下命令注册、构建和部署您的第一个应用程序：`dfx deploy --network ic`

参数 --network 选项指定用于部署应用程序的网络别名或 URL。在ICP主网上部署安装需要此选项,否则默认为本地环境。

命令 `dfx deploy`关于它执行的操作命令输出显示信息:

例如，此步骤注册两个特定于网络的标识符——一个用于`hello`主程序，一个用于`hello_assets`前端用户界面——以及类似于以下的安装信息：

```

Deploying all canisters.
Creating canisters...
Creating canister "hello"...
"hello" canister created on network "ic" with canister id: "5o6tz-saaaa-aaaaa-qaacq-cai"
Creating canister "hello_assets"...
"hello_assets" canister created on network "ic" with canister id: "5h5yf-eiaaa-aaaaa-qaada-cai"
Building canisters...
Building frontend...
Installing canisters...
Installing code for canister hello, with canister_id 5o6tz-saaaa-aaaaa-qaacq-cai
Installing code for canister hello_assets, with canister_id 5h5yf-eiaaa-aaaaa-qaada-cai
Authorizing our identity (default) to the asset canister...
Uploading assets to asset canister...
  /index.html 1/1 (472 bytes)
  /index.html (gzip) 1/1 (314 bytes)
  /index.js 1/1 (260215 bytes)
  /index.js (gzip) 1/1 (87776 bytes)
  /main.css 1/1 (484 bytes)
  /main.css (gzip) 1/1 (263 bytes)
  /sample-asset.txt 1/1 (24 bytes)
  /logo.png 1/1 (25397 bytes)
  /index.js.map 1/1 (842511 bytes)
  /index.js.map (gzip) 1/1 (228404 bytes)
  /index.js.LICENSE.txt 1/1 (499 bytes)
  /index.js.LICENSE.txt (gzip) 1/1 (285 bytes)
Deployed canisters.

```

如果您没有将足够的 ICP 代币转换为Cycle来完成操作，您可以通过运行类似于以下的命令将Cycle添加到您的Cycle钱包：`dfx ledger --network ic top-up gastn-uqaaa-aaaae-aaafq-cai --amount 1.005`

此命令将额外的1.005ICP 代币转换为`gastn-uqaaa-aaaae-aaafq-cai` 这个钱包下标​余额Cycle。该命令返回类似于以下内容的输出：

```
在某某区块高度发送转账：81520
罐已充值！

```

通过运行以下命令调用hello容器和预定义greet函数： `dfx canister --network ic call hello greet everyone`


+ 让我们仔细看看这个例子的每个参数：
  + 参数 --network ic 选项表示您要调用的容器已部署在ic网络上。该ic网络别名是用于访问互联网的电脑一个内部保留的别名。
  + 请注意，参数 --network ic 选项必须位于操作子命令之前，在这种情况下，它是 `dfx canister call`命令。
  + hello参数指定要通知的程序罐的名称。
  + greet参数指定要在调用的函数的名称hello罐。
  + 文本字符串everyone是您要传递给greet函数的入参。

验证命令显示greet函数的返回值:

例如：`("Hello, everyone!")`

重新运行 `dfx wallet balance` 命令或刷新浏览器以查看新的Cycle余额和最近的状态。

### 测试前端应用程序

+ 现在你已经验证了你的应用程序已经部署并使用命令行测试了其操作，让我们验证您是否可以使用您的 Web 浏览器访问前端。

+ 要访问应用程序前端：
  + 打开浏览器
  + 使用由`hello_assets`标识符和`boundary.ic0.app`后缀组成的 URL 导航到应用程序的前端。

如果您没有记下容器标识符，则可以通过运行以下命令来查找它：`dfx canister --network ic id hello_assets`


例如，完整的 URL 应类似于以下内容：`https://gsueu-yaaaa-aaaae-aaagq-cai.raw.ic0.app`

跳转到此 URL 将显示模板应用程序的 HTML 条目页面。将显示如下页面：

![模板应用程序](https://sdk.dfinity.org/docs/quickstart/_images/net-front-end-prompt.png)

键入问候语，然后单击“Click Me !” 以返回输入的问候语。

### 下一步

既然您已经了解了如何在 ICP网络上部署应用程序，您就可以开发和部署您自己的程序了。

您可以在整个文档中找到更详细的示例和教程，以帮助您了解如何使用 Motoko 以及如何为 ICP开发应用程序。

+ 以下是有关下一步去哪里的一些建议：
  + 探索在本地开发环境中构建前端和后端应用程序的教程。
  + 什么是Candid？了解 Candid 接口描述语言如何实现服务互操作性和可组合性。
  + [Motoko 概览以了解使用 Motoko 的功能和语法](https://sdk.nnsdao.com/docs/quick-start/motoko)

### 快速开始IC开发指南

[集成Internet Identity和登陆功能](https://sdk.nnsdao.com/docs/quick-start/dfinity-progarmming-practice)

[DFX命令最全指南学习心得和实践](https://sdk.nnsdao.com/docs/quick-start/dfx-guide)

[IC学习心得](https://sdk.nnsdao.com/docs/quick-start/ic)