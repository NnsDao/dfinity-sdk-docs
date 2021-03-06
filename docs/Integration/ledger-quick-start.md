---
sidebar_position: 3
---

# 与互联网计算机总账整合

+ 本指南是对互联网计算机协议（ICP）组件的介绍，用于代币分配、交易管理、基于代币的质押挖矿和服务的支付。该文件包括对支持互联网计算机协议通证管理的设计、实现、安全保证、系统要求和应用编程接口（API）的概述。

+ 与互联网计算机总账的整合是作为一个高层次的概述，供需要了解互联网计算机协议（ICP）实用通证的术语和整体交易管理流程的组织和开发人员使用。

+ 当你阅读本指南时，请注意在后续文件中可能会有关于特定组件或接口的额外细节，以补充本文件中提供的概述。此外，本概述着重于如何使用Rosetta API与互联网计算机集成。其他的整合选项也是可能的。有关其他集成选项和程序的信息可能会在未来的文档中提供。

### 基本术语

+ 互联网计算机主要是一个运行软件的分布式和分散式的平台。当你编写在互联网计算机上运行的应用程序时，你将你的程序部署在一个叫做程序罐的概念性计算单元的形式中。一个程序罐类似于一个 "智能合约"，因为它由程序的源代码以及它的运行状态组成，并在区块链网络上复制，以保证安全性和灵活性。

+ 终端用户或其他罐可以向罐提供的函数发送消息，以执行特定的操作。这些消息可以是检索信息而不保存应用数据状态的查询调用，也可以是改变和保存状态的更新调用。执行更新的顺序是通过使用所有运行程序罐的互联网计算机节点之间的共识协议来协商的。

### 总账(总账)程序罐概览

+ 互联网计算机协议（ICP）使用一个专门的程序罐实现通证管理，称为总账(总账)程序罐。有一个单一的总账罐，与互联网计算机上的所有其他程序罐一起运行。账本罐基本上是一个智能合约，持有账户和交易。这些交易或者为账户铸造ICP代币，将ICP代币从一个账户转移到另一个账户，或者烧毁ICP代币，使其不存在。账本容器保持着所有交易的可追溯历史，从它的起源或开始状态开始。

### 帐户

+ 一个账户属于并由账户所有者控制，而账户所有者必须是一个IC委托人。任何账户都不能由两个或更多的IC负责人拥有（没有 "联合账户"）。

+ 一个账户所有人可以控制一个以上的账户。在这种情况下，每个账户对应于一对（账户所有者，子账户）。子账户是一个可选的位串，有助于区分同一所有者的不同子账户。

+ 账本上的一个账户是由其地址来识别的，这个地址是由主ID和子账户标识符衍生出来的。

+ 在这种情况下，你可以认为主标识符大致相当于比特币或以太坊的用户公钥的哈希值。你使用相应的秘钥来签署信息，从而对账本程序罐进行认证，并对委托人的账户进行操作。程序罐也可以在总账程序罐中拥有账户，但目前这种账户的功能是有限的。总账罐使用互联网计算机内部的管理操作进行初始化。作为初始化过程的一部分，账簿罐被创建为一组账户和相关的ICP通证余额。

### 交易类型

+ 有三种操作可以改变账簿罐的内部状态:
  + 为账户铸造ICP代币
  + 在账户之间转移ICP代币
  + 销毁ICP代币

+ 所有操作都作为交易记录在总账罐中。

+ 账本以哈希区块链的形式维护交易。随着状态变化的记录，每个新的交易都被放在一个区块中，并分配一个唯一的索引。整个链是通过签署最新的链路来定期认证的。用于认证链的签名可以由任何能够访问互联网计算机根公钥的第三方进行验证。具体的交易可以通过查询账本来检索。

### 使用Rosetta API与互联网计算机的分类帐罐进行整合

+ 人们可以通过多种方式与互联网计算机和总账罐进行互动。本文概述了如何使用Rosetta应用编程接口与总账罐集成。这是一个有据可查的开放标准，旨在支持多种区块链数据格式和结构化通信的交换交易。

+ 该接口由集成软件-`dfinity/rosetta-api`实现。这个软件使你能够在互联网计算机网络之外部署一个被动的Rosetta节点，并使用该节点与互联网计算机上运行的总账罐进行通信。

下图提供了Rosetta节点和互联网计算机之间使用dfinity/rosetta-api集成软件进行通信的简化视图。

![Rosetta节点](https://sdk.dfinity.org/docs/integration/_images/basic-rosetta-api-integration.svg)

+ 如该图所示，Rosetta节点维护着互联网计算机总账罐的本地副本。运行在Rosetta节点上的dfinity/rosetta-api软件定期更新其本地总账视图，方法是查询总账罐中最新的总账链块，然后查询任何缺失的总账块。Rosetta节点使用互联网计算机的根密钥来确保总账的本地副本是真实的。集成软件还允许你使用Rosetta节点向互联网计算机总账提交交易。

### 整合工作流程概述

+ 如果你使用Rosetta节点与互联网计算机总账罐通信，下面总结了传输ICP通证的基本操作流程。在这种情况下，你必须是互联网计算机的委托人，使用存储在钱包中的签名密钥对互联网计算机进行认证。

+ 在用户向Rosetta节点提交请求进行交易后，该请求被传递给运行在该节点上的集成软件，与互联网计算机互动，并完成以下操作。

+ 它从账本的本地副本中读取，以确定最新交易索引的状态和由最新 -- 索引标签标识的区块高度。

+ 它生成一个随机的nonce值--用于确保交易是唯一的。

+ 它为分类帐罐子创建一个入口信息，调用发送函数并指定交易的金额和目的地: `send(nonce, latest_index, dst, amount)`

+ 它使用存储在钱包中的密钥对入口信息进行签名，以确定所有者的主要ID。

+ 它将消息转发到互联网计算机上的总账罐。

### 设置 Rosetta 节点

+ 你可以设置符合 Rosetta API 的节点来与 Internet 计算机交互并交换 Internet 计算机协议 (ICP) 通证。为使说明保持简单，我们使用 Docker 镜像创建与 Rosetta API 的集成 - 还可以使用源代码构建和运行二进制文件。如果你的本地计算机上还没有 Docker，请下载并安装最新版本。

+ 要设置 Rosetta 节点（连接到测试网）：
  + 1.安装 Docker并启动 Docker 守护进程。(dockerd当你重新启动计算机时，Docker 守护进程 ( ) 应该会自动启动。如果你手动启动 Docker 守护程序，则说明因本地操作系统而改变。)
  + 2.dfinity/rosetta-api通过运行以下命令从 Docker Hub拉取最新镜像：`docker pull dfinity/rosetta-api`
  + 3.运行以下命令启动集成服务：
  
```
docker run \
    --interactive \
    --tty \
    --publish 8080:8080 \
    --rm \
   dfinity/rosetta-api

```

命令在本地主机上启动软件并输出类似于以下内容：

```
Listening on 0.0.0.0:8080
Starting Rosetta API server
```

默认情况下，该软件不会连接到运行在ICP主网上的总账容器，而是连接到测试网之一。

如果你被分配了一个测试网络和相应的账本容器标识符，你可以通过指定一个额外的canister参数来针对该网络运行该命令。例如，以下命令说明了通过将canister参数设置为来连接到测试网络上的账本容器`2xh5f-viaaa-aaaab-aae3q-cai`。

```

docker run \
    --interactive \
    --tty \
    --publish 8080:8080 \
    --rm \
   dfinity/rosetta-api
   --canister 2xh5f-viaaa-aaaab-aae3q-cai

```

**提示:第一次运行命令时，节点可能需要一些时间才能赶上链的当前链接。当节点被追上时，你应该会看到类似于以下内容的输出：You are all caught up to block height 109**

+ 完成此步骤后，节点继续作为不参与出块的被动节点运行。

+ 打开一个新的终端窗口或选项卡并运行ps命令以验证服务的状态。

+ 如果你要停止服务，请按 `Crtl+C`。例如，你可能希望这样做以更改你正在使用的容器标识符。

+ 要在设置节点后测试集成，你需要编写一个程序来模拟委托人提交交易或查找帐户余额。

### 在生产中运行 Rosetta 节点

当你完成测试后，你应该没有运行在生产模式Docker 镜像, --interactive，--tty 以及 --rm 命令行选项。这些命令行选项用于附加交互式终端会话并删除容器，主要用于测试目的。

要在生产环境中运行该软件，你可以使用--detach在后台运行容器的选项启动 Docker 映像，并且可以选择指定--volume用于存储块的命令。

要将 Rosetta 节点实例连接到主网，请添加标志：` --mainnet和--not-whitelisted`。

有关 Docker 命令行选项的更多信息，请参阅[Docker 参考文档](https://docs.docker.com/engine/reference/commandline/run/)。

### 要求和限制

+ Docker镜像中提供的集成软件有一个要求，不是标准Rosetta API规范的一部分。

+ 对于涉及ICP通证的交易，未签署的交易必须在网络收到签署的交易前24小时内创建。原因是每个交易的'created_at'字段指的是一个现有的交易（基本上是交易创建时本地可用的最后指数）。任何提交的交易如果指向一个太旧的交易，都会被拒绝，以保持运行效率。

+ 除了这个要求，Rosetta API集成软件完全符合所有标准的Rosetta节点，并通过了所有的rosetta-cli测试。该软件可以接受任何有效的Rosetta请求。然而，集成软件只提示交易要使用Ed25519签名，而不是这里列出的所有签名方案，并且只回复规范支持的一小部分潜在响应。例如，该软件没有实现Rosetta的任何UTXO功能，所以你不会在任何软件响应中看到任何UTXO信息。

### ICP工具通证的基本属性

+ ICP代币与管理比特币等去中心化网络的实用代币相似，但也有重要的不同之处。

+ ICP代币在以下方面与比特币相似:
  + 每个ICP代币可以被分割10^8次。
  + 所有的交易都从创世的初始状态开始存储在账本上。
  + 代币是完全可替换的。
  + 账户标识符是32个字节，大致相当于公钥的哈希值，可以选择加上一些额外的子账户标识符。

+ ICP代币在以下方面与比特币不同:
  + 不使用工作证明，而是用一个变种的门槛BLS签名来同意链的有效状态。
  + 任何交易都可以存储一个8字节的备忘录 - 这个备忘录字段被Rosetta API用来存储区分交易的nonce。然而，该字段的其他用途也是可能的。


### 常见的问题

以下问题取自开发者社区最常报告的关于Rosetta与互联网计算机整合的问题和阻止。

+ **Rosetta节点**
  + 我怎样才能运行Rosetta节点的实例？

+ 一个简单的方法是使用[dfinity/rosetta-api](https://hub.docker.com/r/dfinity/rosetta-api/tags?page=1&ordering=last_updated) Docker镜像来完成。一旦节点初始化并同步了所有区块，你就可以通过调用节点上的Rosetta API来执行查询和提交事务。节点的监听端口为8080。

+ **我如何将Rosetta节点连接到主网**？
  + 使用标志--mainnet和--not-whitelisted

+ **我怎么知道节点是否已经赶上了测试网**?
  + 搜索Starting Rosetta API服务器的启动日志。会有一个日志条目说你已经全部赶上了XX区块。这条信息确认了你已经赶上了所有的区块。

+ **如何坚持同步的区块数据**？
  + 把/data目录挂到其他地方。

+ **Rosetta节点是否有版本**？
  + 还没有。在发布之前，当我们推送到dfinity/rosetta-api:最新的镜像时，通常是一个重大的更新，我们会事先在沟通渠道中公布。

  + 我们很快就会实现镜像的夜间构建，CI会在推送前确保其工作。除了最新的，那些镜像也会被标记上构建日期，所以为了更多的可重复性，可以使用特定日期标记的镜像，而不是最新的。我们会在夜间构建可用时宣布。

+ **我怎样才能连接到主网而不是测试网**？
  + 用 --help 启动 dfinity/rosetta-api，你可以看到一些可以传递的额外CLI参数。其中有--canister-id和--ic-url，可以用来配置账本目的地。目前，它们默认为测试网。

**注意：主网还没有上线；它将在公开宣布的日期前一段时间上线，我们将推送更新的图像以指向主网，确保你能提前在主网上进行测试。**

### ICP特有的Rosetta API细节

+ 帐户是如何生成和验证的？
  + 生成一个ED25519密钥对。
  + 私钥用于签署交易。
  + 公钥用于生成一个自我认证的校长ID。欲了解更多信息，请参见：https://sdk.dfinity.org/docs/interface-spec/index.html#_principals。
  + Principal ID经过散列处理，生成账户地址。

+ 如何使用公钥来生成其账户地址？
  + 用十六进制编码的32字节公钥调用[/construction/derive](https://www.rosetta-api.org/docs/ConstructionApi.html#constructionderive) 端点。
  + 调用JavaScript SDK中的pub_key_to_address函数。

+ 如何验证账户地址的校验和？
  + 十六进制解码后，前4个字节是地址其余部分的大-序数CRC32校验和。
  + 在JavaScript SDK中调用[address_from_hex](https://github.com/dfinity/rosetta-client#working-with-account-addresses)。如果校验和不匹配，它会返回错误。
  + [Here](https://gist.github.com/TerrorJack/d6c79b33e5b5d0f5d52f3a2c5cdacc60)是一个地址验证逻辑的Java实现。

+ **什么是ED25519的签名_类型和曲线_类型**？
  + signature_type是 "ED25519"。
  + 曲线类型是 "Edwards25519"。

+ **一个区块中可以出现什么样的交易，它们意味着什么？**
  + 从[/block](https://www.rosetta-api.org/docs/BlockApi.html#block)端点查询到的每个区块正好包含一个交易。请注意，有些操作，如烧毁，在Rosetta API调用中是不支持的。
  + 转移
    + 第1步：输入 "TRANSACTION"，从原账户中减去转账金额。
    + 第2步：输入 "TRANSACTION"，将相同的转账金额加到目的地账户。
    + 第3步：输入 "FEE"，从原账户中减去费用。
  + 不要依赖上面的顺序，你可以在/construction/payloads调用中重新排列它们，当解析块中的交易时，你应该检查交易类型和金额符号，而不是。
  + 铸造币
    + 第一步：输入 "MINT"，将铸币金额添加到目标账户。
  + 销毁币
    + 第一步：输入 "BURN"，从原账户中减去烧毁的金额。
  + "状态 "总是 "COMPLETED"，失败的交易不会显示在轮询的区块中

+ **需要什么费用**？我可以定制费用吗？
  + 通过调用[/construction/metadata](https://www.rosetta-api.org/docs/ConstructionApi.html#constructionmetadata)，你可以得到建议的费用。
  + 目前，recommended_fee是一个常量，转让中指定的费用必须等于它。
  + 手续费不适用于Mint或Burn操作。

+ **我怎么知道提交的交易是否运行在链上**？
  + Rosetta服务器会在调用/construction/submit后等待一小段时间，如果交易运行在链上，它就会被返回。
  + 如果账本出现错误，错误信息会在/construction/submit结果中出现。
  + 仍然有可能一个/construction/submit的调用已经成功返回，但离它运行在链上还有一些时间。你可以轮询最新的区块并搜索交易哈希值。我们还实现了[/search/transactions](https://www.rosetta-api.org/docs/SearchApi.html#searchtransactions)端点的一个子集，可以根据交易的哈希值搜索交易。
  + 5分钟是一个最坏的超时情况。
  + 不要使用mempool APIs，我们的实现是一个空存根。

+ **我从Rosetta API的调用中可能得到什么样的错误？**
  + 成功的调用总是有200的响应状态码。

  + 失败的调用总是有500的响应状态码，并有一个包含更多信息的JSON返回。可能的Rosetta错误代码和它们的文字描述可以在/network/options调用结果中看到。

+ **我如何发送Mint或Burn交易？**
  + Mint是一个特权操作；我们目前不支持通过Rosetta API调用Burn。

+ **如果同一个签名的交易被多次提交会怎样？**
  + 账本会拒绝重复的交易。只有第一笔交易会进入链中，对于重复提交的交易，/construction/submit调用会失败。

+ **如何在不调用Rosetta API的情况下签署一个交易？**
  + JavaScript SDK包含一个离线签名逻辑的[实现](https://github.com/dfinity/rosetta-client/blob/master/lib/construction_combine.js)。这与内部实现细节有很深的耦合问题，所以我们强烈建议你尽可能调用/construction/combine来签署交易。

+ **如何配置进站时间段？**
  + 在/construction/payloads调用中，你可以添加一个或全部的ingress_start / ingress_end字段来指定进入的时间段。它们是自Unix纪元以来的纳秒数，并且必须是在未来24小时内。这样就可以生成和签署一个事务，但将实际提交推迟到较晚的时间。

+ **如何反序列化一个已签名的事务**？**
  + JavaScript SDK支持[反序列化](https://github.com/dfinity/rosetta-client/blob/master/lib/signed_transaction_decode.js)一个签名交易的十六进制字符串，并恢复一些关于传输的信息。如果你想执行健全性检查，这可能很有用。