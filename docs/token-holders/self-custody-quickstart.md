---
sidebar_position: 2
---

# 自我托管快速启动

在IC生态系统内，IC协议代币（ICP代币）是一种原生的实用代币。ICP代币在IC的治理和经济方面都发挥着关键作用。

这个自我保管快速启动方案的假设是。

你是一个新的ICP代币持有人。

你想了解你能用你的ICP代币做什么。

你想知道如何使用DFINITY Canister SDK命令行界面DFX转换、转移或锁定你的ICP代币。

如果你还不是代币持有者，你需要从交易所购买ICP代币或收到代币授予后才能进行保管。关于如何获得ICP代币和托管选项的概述，请参见如何获得ICP代币和选择数字资产的自我托管。

如果你正在使用其他应用程序--如网络神经系统（NNS）应用程序或硬件钱包提供的用户界面--与你的ICP代币进行互动，你应该参考该应用程序的文档。

本自我监护快速入门仅侧重于使用DFINITY Canister SDK命令行界面DFX与ICP通证进行交互。

### 你如何使用ICP通证

下图提供了你可以使用通证的三种最常见方式的简化概述。

![ICP通证的使用方法](https://sdk.dfinity.org/docs/developers-guide/_images/icp-tokens-how-to-use.svg)

正如该图所示，你如何使用ICP代币主要取决于你获得代币的目标。

如果你是一个开发者或企业家，ICP代币可以被转换为cycle。然后，cycle可以用来建立和部署应用程序，向市场提供产品和服务。

如果你是对参与管理和影响IC方向感兴趣的社区成员，你可以将ICP代币锁定在一个名为神经元的桩上，这样你就可以提交提案并进行投票。

### 开始之前的准备

+ 为了开始，请确认以下几点：
  + 你有互联网连接，并且可以在本地基于英特尔的macOS或Linux电脑上访问一个shell终端。
  + 你知道如何在你的本地电脑上打开一个新的终端shell，以及如何在终端中运行基本的命令行程序。
  + 你在一个自我保管的钱包中持有ICP代币。
  + 你已经下载并安装了DFINITY Canister软件开发工具包（SDK），在本地电脑的终端上运行以下命令：`sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"`
  + 你已经为你用于自我保管的身份创建了一个公钥/私钥的备份副本。

例如，如果你使用的是使用 DFINITY Canister 软件开发工具包 (SDK) dfx 命令行界面创建的默认开发者身份，你应该有一份 `~/.config/dfx/identity/default/identity.pem` 文件的备份，存储在一个安全的地方。(提示，也需要记住一些重要的信息以备开发者身份转移)

你有一个安全的环境，在其中执行涉及 ICP 通证的操作。

作为一个安全的最佳实践，任何涉及ICP通证传输的操作都需要一个具有最小硬件和软件的空中加压计算机和一个连接到网络的计算机。在实践中，这需要在两台计算机之间移动文件，并采取其他预防措施以减少风险。

为了简单起见，本《自我托管快速启动》描述了如何使用一台连接到网络的计算机来完成关键任务。

### 连接到账本并获得你的账户识别码

所有的ICP代币交易都记录在IC上运行的分类帐罐中。这些说明假定你使用的是dfx为你创建的默认开发者身份。

这个身份由一个委托人数据类型和一个委托人的文本表示，通常被称为你的委托人标识符。您身份的这种表示方式类似于比特币或以太坊地址。

然而，与你的开发者身份相关的本金通常与你在分类账中的账户标识符不一样。主体标识符和账户标识符是相关的--两者都提供你的身份的文本表示，但它们使用不同的格式。

要连接到分类账并获得账户信息。

通过运行以下命令，在你的当前目录下创建一个空的dfx.json文件，`echo '{}' > dfx.json`


通过运行以下命令，检查IC网络的当前状态以及你连接到它的能力:`dfx ping ic`


你应该看到类似以下的输出:

```
{
  "ic_api_version": "0.18.0" " impl_hash": "d639545e0f38e075ad240fd4ec45d4eeeb11e1f67a52cdd449cd664d825e7fec" "impl_version": "8dc1a28b4fb9605558c03121811c9af9701a6142" "replica_health_status": "健康" "root_key": [48, 129, 130, 48, 29, 6, 13, 43, 6, 1, 4, 1, 130, 220, 124, 5, 3, 1, 2, 1, 6, 12, 43, 6, 1, 4, 1, 130, 220, 124, 5, 3, 2, 1, 3, 97, 0, 129, 76, 14, 110, 199, 31, 171, 88, 59, 8, 189, 129, 55, 60, 37, 92, 60, 55, 27, 46, 132, 134, 60, 152, 164, 241, 224, 139, 116, 35, 93, 20, 251, 93, 156, 12, 213, 70, 217, 104, 95, 145, 58, 12, 11, 44, 197, 52, 21, 131, 191, 75, 67, 146, 228, 103, 219, 150, 214, 91, 155, 180, 203, 113, 113, 18, 248, 71, 46, 13, 90, 77, 20, 80, 95, 253, 116, 132, 176, 18, 145, 9, 28, 95, 135, 185, 136, 131, 70, 63, 152, 9, 26, 11, 170, 174]
}
```

(可选）通过运行以下命令确认你当前使用的开发者身份:`dfx identity whoami`


在大多数情况下，你应该看到你目前正在使用你的默认开发者身份。例如:"default",此时是默认账户。

(可选）通过运行以下命令查看当前身份的委托人的文本表示：`dfx identity get-principal`


这个命令显示类似于以下的输出:`tsqwz-udeik-5migd-ehrev-pvoqv-szx2g-akh5s-fkyqc-zy6q7-nav6-uqe`

通过运行以下命令获得你的开发者身份的账户标识:`dfx ledger account-id`


这条命令显示与你的开发者身份相关的分类账账户标识符。例如，你应该看到类似以下的输出:`03e3d86f29a069c6f2c5c48e01bc084e4ea18ad02b0eec8fccadf4487183c223`

通过运行以下命令检查你的账户余额:`dfx ledger --network ic balance`


这个命令显示了分类账账户的ICP通证余额。例如，你应该看到类似以下的输出:`10.00000000 icp`

### 将ICP代币转换为cycle

如果你想使用你的分类账账户中的ICP代币为应用开发提供动力，你首先必须将它们转换为cycle，并将cycle转移到一个程序罐里，这将是你的cycle钱包。

要将ICP代币转换为cycle。

通过运行类似于下面的命令，从你的分类账账户中转移ICP代币，创建一个新的cycle程序罐:`dfx ledger --network ic create-canister <controller-principal-identifier> --amount <icp-tokens>.`


这个命令把你`--amount`参数指定的ICP通证数量转换成cycle，并把这些cycle与你指定的委托人控制的新程序罐标识符联系起来。

例如，下面的命令将1.25个ICP代币转换成cycle，并指定默认身份的委托人标识符作为新程序罐的控制人:

`dfx ledger --network ic create-canister tsqwz-udeik-5migd-ehrev-pvoqv-szx2g-akh5s-kyqc-zy6q7-nav6-uqe --amount 1.25`

如果交易成功，账本会记录该事件，你应该看到类似以下的输出。

```
Transfer sent at BlockHeight: 20
Canister created with id: "53zcu-tiaaa-aaaaa-qaaba-cai"

```

通过运行类似以下的命令，在新创建的程序罐占位符中安装cycle钱包代码:`dfx identity --network ic deploy-wallet <canister-identifer>`。


例如:`dfx identity --network ic deploy-wallet 53zcu-tiaaa-aaaaa-qaaba-cai`

这个命令显示的输出与下面类似:

```
Creating a wallet canister on the ic network.
The wallet canister on the "ic" network for user "default" is "53zcu-tiaaa-aaaaa-qaaba-cai"
```

### 转移ICP代币到另一个账户

如果你想把ICP代币转移到分类帐中的另一个帐户，你需要知道接受人帐户的帐户标识符。

要将ICP代币转移到另一个账户。

通过运行下面的命令，检查你是否使用了一个对分类帐账户有控制权的身份：`dfx identity whoami`


通过运行下面的命令检查与你身份相关的分类账账户中的当前余额:`dfx ledger --network ic balance`


通过运行类似下面的命令，将ICP代币转移到另一个账户:`dfx ledger --network ic transfer <destination-ledger-account-id> --icp <ICP-amount> --memo <numeric-memo>`。


比如说:`dfx ledger --network ic transfer ae6e1a76da5725bbbf0c5c035aaf0525b791e0f0f7cce27d8e27826389871406 --icp 5 --memo 12345`

这个例子说明了如何使用`--icp`命令行选项的整数将ICP代币转移到指定账户。

你也可以使用`--e8s`选项，单独或与`--icp`选项一起，指定ICP代币的小数单位`--e8s`。

另外，你可以使用`--amount`来指定要传输的ICP代币的数量，小数点后8位，例如，`5.00000025`。

接收人地址可以是在IC网络上运行的分类账罐中的地址，也可以是你使用网络神经系统应用程序添加的账户，或者是你在交易所的钱包的地址。

如果你把ICP代币转移`Network Nervous System`应用程序中的一个账户，你可能需要刷新浏览器来看到交易的记录。

关于使用`dfx ledger`命令行选项的更多信息，见`dfx ledger`。

### 使用神经元质押ICP代币并锁定ICP代币

如果你想锁定ICP代币来参与治理并获得奖励，你必须使用网络神经系统（NNS）应用程序或dfx程序罐调用命令。

因为在使用DFINITY Canister SDK命令行界面时，锁定ICP代币以创建有桩神经的过程比使用网络神经系统（NNS）应用程序时更复杂，所以本指南不包括这些步骤。

关于网络神经系统的信息，请看了解IC的网络神经系统、神经元和ICP工具令牌。

关于设置神经元的锁定期和溶解延迟的更多细节，[请看入门|IC网络神经系统应用与钱包](https://sdk.nnsdao.com/blog/icp-stacking-guide/)