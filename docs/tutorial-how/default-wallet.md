---
sidebar_position: 8
---

# 使用默认的Cycles钱包

+ 正如在通证和Cycles中所讨论的，ICP通证可以转化为Cycles，为程序罐的运行提供动力。Cycles提供了一个基本稳定的价值主张，代表了应用所消耗的通信、计算和存储的运营成本。例如，Cycles反映了在IC服务上运行的应用程序所需的物理硬件、机架空间、能源、存储设备和网络带宽的实际成本。

+ 与ICP令牌不同的是，Cycles只与程序罐相关，而不是与用户或开发者负责人相关。因为只有程序罐需要和消耗Cycles--执行操作和支付他们使用的资源--用户和开发者通过一种特殊类型的程序罐（称为Cycles钱包）管理Cycles的分配和所有权。由于Cycles钱包持有执行操作所需的Cycles，如创建新的寄存器，这些操作默认使用Cycles钱包的寄存器标识符而不是你的用户余额来执行。

+ 出于本地开发的目的，DFINITY Canister SDK会在每个项目中自动为您创建一个默认的Cycle钱包，使用Cycle钱包执行的大多数操作都是在幕后进行的。例如，cycles wallet代表您注册程序罐标识符，并在本地网络上部署程序罐。

+ 然而，在生产环境中，你经常需要明确地注册和转移Cycles到新的程序罐，指定可以作为保管人的委托人，并管理具有所有权的委托人。你可以使用在网络浏览器中运行的默认Cycles钱包应用程序执行其中一些任务。根据你想采取的具体行动，你也可以通过在终端运行dfx wallet命令或直接调用默认cycle wallet canister中的方法来执行这些Cycles和canister管理任务。

+ 然而，你应该记住，对cycles wallet canister的调用是使用与当前选择的用户身份相关的cycles wallet标识符执行的。根据你当前选择的身份，以及与该身份相关的委托人是否被添加为控制器或钱包的保管人，你可能会看到不同的结果或被拒绝访问特定的方法。

+ 要检查你当前使用的身份，运行以下命令：`dfx identity whoami`


### 控制器和保管人角色

一个用户本金或程序罐标识可以分配给一个控制器或保管人角色。

+ 控制器是最有特权的角色，被分配到控制器角色的委托人可以执行特权任务，包括以下内容：
  + 添加和删除其他委托人作为控制人。
  + 授权和取消授权其他委托人为保管人。
  + 向cycles wallet地址簿添加条目。
  + 访问Cycles钱包的余额和所有其他与钱包相关的信息。
  + 发送Cycles给其他保管人。
  + 接收来自其他保管人的Cycles。
  + 在调用其他钱包时，作为 "信息调用者 "的主体。
  + 创建存储罐和额外的Cycles钱包。
  + 重命名Cycles钱包。

+ 被分配到保管人角色的委托人只能执行Cycle钱包管理任务的子集，包括以下内容：
  + 访问Cycles钱包余额和所有其他钱包相关信息。
  + 发送Cycles到其他存储区。
  + 接收来自其他存储区的Cycles。
  + 作为 "消息调用者 "的主体，调用其他存储区。
  + 创建存储罐。

**提示**

+ 授权一个委托人作为保管人并不自动授予委托人对Cycles钱包的访问权。分配给保管人角色的身份也必须被分配一个Cycles钱包的程序罐标识符。例如，如果你授权`alice_custodian`作为本地项目中一个Cycles钱包（`rwlgt-iiaaa-aaaaa-cai`）的保管人，该用户还需要通过`dfx identity set-wallet rwlgt-iiaaa-aaaaa-cai`命令指定使用该钱包。


### 检查Cycles余额

如果你正在进行本地开发，当你使用`dfx canister create`注册一个新的canister标识符时，或者当你使用`dfx deploy`注册、构建和部署一个canister时，你的cycle钱包就会被创建。

如果你在IC服务上部署，你通常通过将ICP代币转换为cycles，将cycles转移到一个新的canister标识符，并使用默认的`cycles wallet WebAssembly模块（WASM）`更新canister来创建cycles钱包。

当你在本地或远程网络上有一个Cycles钱包后，你可以使用dfx wallet balance命令或wallet_balance方法来检查当前的Cycles余额。

### 在本地开发时检查你的Cycles余额

如果你正在进行本地开发，你可以使`dfx wallet balance`命令来检查每个项目的当前Cycles余额。

要检查一个本地项目的Cycles余额。

打开一个终端，切换到项目的根目录。

通过运行以下命令在本地启动IC服务：`dfx start --background`


通过运行下面的命令，显示与当前选择的身份相关的Cycles钱包中的Cycles余额:`dfx wallet balance`


该命令显示的输出类似于以下内容:78000000000000个Cycles

### 检查IC服务上的Cycles余额

如果你已经在IC服务的主网络上部署了一个Cycles钱包，你可以使用 `dfx wallet balance `命令来检查网络上当前的Cycles余额。

要检查IC服务上的Cycles余额。

打开一个终端，导航到一个包含dfx.json配置文件的目录。

通过运行以下命令检查你与IC服务的连接:`dfx ping ic`

通过运行以下命令，显示与当前选择的身份相关的Cycles钱包的Cycles余额:`dfx wallet --network ic balance`


该命令显示的输出类似于以下内容:`67991783875995个Cycles。`

### 调用cycles wallet_balance方法

你也可以通过直接调用cycles钱包罐中的wallet_balance方法来检查Cycles余额。例如，如果你的principal是`h5aet-waaaa-aaaab-qaamq-caiCycles`钱包的控制器，你可以通过运行以下命令来检查当前的Cycles余额:`dfx canister --network ic call h5aet-waaaa-aaaab-qaamq-cai wallet_balance`

该命令使用Candid格式返回余额，作为一个记录，其中有一个金额字段（用哈希值3_573_748_184表示），余额为6,895,656,625,450个Cycles，像这样:`(record { 3_573_748_184 = 6_895_656_625_450 })`

### 添加一个控制器

如果你是一个Cycles钱包的控制器，你可以向控制器角色添加其他委托人或程序罐标识符。将一个委托人添加到控制器角色中，也会自动将委托人添加到保管人角色中。

要在本地项目中为Cycle钱包添加一个控制器。

打开一个终端，切换到项目的根目录，通过运行以下命令在本地启动IC服务：`dfx start --background`


通过运行类似下面的命令，显示与当前选择的身份相关的Cycles钱包中的Cycles余额:`dfx wallet add-controller <controller-principal-identifier>.`


例如，你可以运行下面的命令来添加主标识符b5quc-npdph-l6qp4-kur4u-oxljq-7uddl-vfdo6-x2uo5-6y4a6-4pt6v-7qe所代表的用户为本地Cycle钱包的控制人:`dfx wallet add-controller b5quc-npdph-l6qp4-kur4u-oxljq-7uddl-vfdo6-x2uo5-6y4a6-4pt6v-7qe`

该命令显示的输出与下面类似: `Added b5quc-npdph-l6qp4-kur4u-oxljq-7uddl-vfdo6-x2uo5-6y4a6-4pt6v-7qe as a controller.`

### 列出当前的控制者

你可以使用 `dfx wallet controllers`命令或get_controllers方法来列出对指定的cycles wallet程序罐拥有完全控制权的负责人。

要列出一个本地项目中cycles wallet的控制器。

打开一个终端，切换到项目的根目录,通过运行以下命令在本地启动IC服务：`dfx start --background`


通过运行下面的命令，列出在当前项目中完全控制Cycle钱包的主标识符:`dfx wallet controllers


该命令显示对cycles钱包有控制权的委托人的文本表示，输出类似于下面:

```
tsqwz-udeik-5migd-ehrev-pvoqv-szx2g-akh5s-fkyqc-zy6q7-nav6-uqe
b5quc-npdph-l6qp4-kur4u-oxljq-7uddl-vfdo6-x2uo5-6y4a6-4pt6v-7qe
```

### 删除一个控制器

你可以使用`dfx wallet remove-controller`命令或`remove_controller`方法来删除一个作为控制器的委托人。

要删除本地项目中的Cycle钱包的控制器,打开一个终端，切换到项目的根目录，通过运行以下命令在本地启动IC服务：`dfx start --background`

通过运行类似下面的命令，指定要从当前项目的控制器角色中删除的主标识符:

`dfx wallet remove-controller b5quc-npdph-l6qp4-kur4u-oxljq-7uddl-vfdo6-x2uo5-6y4a6-4pt6v-7qe`


命令输出类似于以下内容:

`Removed b5quc-npdph-l6qp4-kur4u-oxljq-7uddl-vfdo6-x2uo5-6y4a6-4pt6v-7qe as a controller.`

### 授权给一个保管人

你可以使用`dfx wallet authorize`命令或`authorize`方法来授权一个委托人作为一个Cycle钱包的保管人。

要授权一个委托人作为本地项目中cycles钱包的监护人,打开一个终端，切换到项目的根目录,通过运行以下命令在本地启动IC：`dfx start --background`


通过运行类似下面的命令，指定要授权的委托人标识符，作为当前项目和当前身份的保管人:`dfx wallet authorize b5quc-npdph-l6qp4-kur4u-oxljq-7uddl-vfdo6-x2uo5-6y4a6-4pt6v-7qe`


命令输出类似于以下内容:

`Authorized b5quc-npdph-l6qp4-kur4u-oxljq-7uddl-vfdo6-x2uo5-6y4a6-4pt6v-7qe as a custodian.`

### 列出当前的托管人

你可以使用`dfx wallet custodians`命令或者`get_custodians`方法来返回当前被定义为Cycle钱包保管人的负责人列表。

要列出本地项目中cycles wallet的监护人,打开一个终端，切换到项目的根目录,通过运行以下命令在本地启动IC服务：`dfx start --background`


通过运行下面的命令，列出在当前项目中拥有Cycle钱包的监护人角色的主要标识符:`dfx wallet custodians`


该命令显示类似于以下的输出:
```
tsqwz-udeik-5migd-ehrev-pvoqv-szx2g-akh5s-fkyqc-zy6q7-nav6-uqe
b5quc-npdph-l6qp4-kur4u-oxljq-7uddl-vfdo6-x2uo5-6y4a6-4pt6v-7qe
```

### 删除对一个托管人的授权

你可以使用`dfx wallet deauthorize`命令或者`deauthorize`方法来移除一个委托人作为Cycle钱包的保管人。取消授权之前被添加为控制人的委托人也会自动将该委托人从控制人的角色中移除。

要删除本地项目中Cycle钱包的监管人,打开一个终端，切换到项目的根目录,通过运行以下命令在本地启动IC服务:`dfx start --background`


通过运行类似下面的命令，指定要从当前项目的保管人角色中删除的委托人标识符：`dfx wallet deauthorize b5quc-npdph-l6qp4-kur4u-oxljq-7uddl-vfdo6-x2uo5-6y4a6-4pt6v-7qe`


命令输出类似于以下内容:

`Deauthorized b5quc-npdph-l6qp4-kur4u-oxljq-7uddl-vfdo6-x2uo5-6y4a6-4pt6v-7qe as a custodian.`

### 发送Cycles到一个程序罐

你可以使用`dfx wallet_send`方法中的`wallet_send`命令来发送特定数量的Cycle到一个特定的程序罐。请记住，你指定的程序罐必须是一个Cycle钱包，或者有一个`wallet_receive`方法来接受Cycle。

如果你已经在IC服务主网络上部署了一个Cycle钱包，你可以使用dfx钱包发送命令在网络上运行的程序罐之间发送Cycle。

要发送Cycle到另一个运行在IC服务上的程序罐,打开一个终端，导航到一个包含dfx.json配置文件的目录,通过运行下面的命令检查你与IC服务的连接:`dfx ping ic`


获取你想接收Cycle的程序罐的标识符。

例如，运行以下命令，显示与IC上当前用户身份相关的Cycle钱包标识:`dfx identity --network ic get-wallet`


该命令显示cycles钱包罐的标识符，输出类似于以下内容:`gastn-uqaaa-aaa-aaafq-cai`

通过运行类似下面的命令，将Cycle发送到程序罐的标识符上：`dfx wallet --network ic send <destination> <amount>`.


比如说:`dfx wallet --network ic send gastn-uqaaa-aaa-aaafq-cai 10000000000`

如果传输成功，该命令不显示任何输出。

Cycle钱包中可以存储的最大Cycle数是2到64的幂（264或18,446,744,073,709,551,616Cycle）。

通过运行以下命令，检查Cycle钱包的余额，查看最新的可用Cycle数量:`dfx wallet --network ic balance`


比如说:67991699387090个Cycle。

### 列出地址簿条目

你可以使用`dfx wallet addresses`命令或者`list_addresses`方法来列出已经为cycles钱包配置的主标识符和角色。

要查看在IC上运行的cycle钱包的地址簿条目。

打开一个终端，切换到一个包含dfx.json配置文件的目录,通过运行以下命令检查你与IC的连接：`dfx ping ic`


通过运行以下命令获得Cycle钱包的地址簿列表:`dfx wallet --network ic addresses`


该命令显示了Cycle钱包的控制器和托管人，输出类似于以下内容：
```

Id: tsqwz-udeik-5migd-ehrev-pvoqv-szx2g-akh5s-fkyqc-zy6q7-snav6-uqe, Kind: Unknown, Role: Controller, Name: No name set.
Id: ejta3-neil3-qek6c-i7rdw-sxreh-lypfe-v6hjg-6so7x-5ugze-3iohr-2qe, Kind: Unknown, Role: Custodian, Name: No name set.
Id: b5quc-npdph-l6qp4-kur4u-oxljq-7uddl-vfdo6-x2uo5-6y4a6-4pt6v-7qe, Kind: Unknown, Role: Controller, Name: No name set.
```

### 默认Cycle钱包中的其他方法

默认的Cycle钱包包括一些没有作为dfx钱包命令公开的附加方法。这些额外的方法支持更高级的Cycle管理任务，如创建新的钱包和管理事件。

**创建一个新的Cycle钱包**

使用`wallet_create_wallet`方法来创建一个新的Cycle钱包罐，它有一个初始的Cycle余额，并且可以选择将一个特定的委托人作为它的控制器。如果你没有指定一个控制主体，你用来创建新钱包的Cycle钱包将成为新钱包的控制器。

例如，你可以运行类似下面的命令来创建一个新的钱包，并指定一个委托人作为控制器:

`dfx canister --network call f3yw6-7qaaa-aaaab-qaabq-cai wallet_create_wallet '(record { cycles = 5000000000000 : nat64; controller = principal "vpqee-nujda-46rtu-4noo7-qnxmb-zqs7g-5gvqf-4gy7t-vuprx-u2urx-gqe"})`

该命令返回新钱包的余额。

`(record { 1_313_628_723 = principal "dcxxq-jqaaa-aaaab-qaavq-cai" })`

### 注册一个新的存储罐标识符

使用`wallet_create_canister`方法，在IC上注册一个新的程序罐标识符。该方法创建了一个新的 "空 "储币罐占位符，并有一个初始Cycle余额，还可以选择将一个特定的委托人作为其控制人。在你注册了程序罐标识符之后，你可以作为一个单独的步骤为你的应用程序安装代码。

例如，你可以运行类似下面的命令来创建一个新的钱包并指定一个委托人作为控制器：

`dfx canister --network call f3yw6-7qaaa-aaaab-qaabq-cai wallet_create_canister '(record { cycles = 5000000000000 : nat64; controller = principal "vpqee-nujda-46rtu-4noo7-qnxmb-zqs7g-5gvqf-4gy7t-vuprx-u2urx-gqe"})`

该命令返回你创建的新程序罐的负责人:

`(record { 1_313_628_723 = principal "dxqg5-iyaaa-aaaab-qaawa-cai" })`


**从一个程序罐里接收Cycle**

使用wallet_receive方法作为端点来接收Cycle。

**从一个钱包转发调用**

使用wallet_call方法来转发使用cycles钱包标识符的呼叫。

**管理地址**

使用以下方法来管理地址簿列表：

```
add_address: (address: AddressEntry) → ();

remove_address: (地址: principal) → ();

```

**管理事件**

使用以下方法来检索事件和图表信息:

```

get_events: (opt record { from: opt nat32; to: opt nat32; }) → (vec Event) query;
get_chart: (opt record { count: opt nat32; precision: opt nat64; } ) → (vec record { nat64; nat64; }) query;

```

例如，你可以使用get_events方法来返回canister_create和其他事件，运行类似以下的命令。

`dfx canister call <cycles-wallet-identifier> get_events '(record {from = null; to = null})`

如果cycles wallet ( gastn-uqaaa-aaaae-aaafq-cai) 部署在Internet Computer 主网络上，您可以运行如下命令来返回事件：

`dfx canister --network ic call gastn-uqaaa-aaaae-aaafq-cai get_events '(record {from = null; to = null})'`

该命令的输出采用类似于以下内容的 Candid 格式：

```

(
  vec { record { 23_515 = 0; 1_191_829_844 = variant { 4_271_600_268 = record { 23_515 = principal "tsqwz-udeik-5migd-ehrev-pvoqv-szx2g-akh5s-fkyqc-zy6q7-snav6-uqe"; 1_224_700_491 = null; 1_269_754_742 = variant { 4_218_395_836 };} }; 2_781_795_542 = 1_621_456_688_636_513_683;}; record { 23_515 = 1; 1_191_829_844 = variant { 4_271_600_268 = record { 23_515 = principal "ejta3-neil3-qek6c-i7rdw-sxreh-lypfe-v6hjg-6so7x-5ugze-3iohr-2qe"; 1_224_700_491 = null; 1_269_754_742 = variant { 2_494_206_670 };} }; 2_781_795_542 = 1_621_461_468_638_569_551;}; record { 23_515 = 2; 1_191_829_844 = variant { 1_205_528_161 = record { 2_190_693_645 = 11_000_000_000_000; 2_631_180_839 = principal "gvvca-vyaaa-aaaae-aaaga-cai";} }; 2_781_795_542 = 1_621_462_573_993_647_258;}; record { 23_515 = 3; 1_191_829_844 = variant { 1_205_528_161 = record { 2_190_693_645 = 11_000_000_000_000; 2_631_180_839 = principal "gsueu-yaaaa-aaaae-aaagq-cai";} }; 2_781_795_542 = 1_621_462_579_193_578_440;}; record { 23_515 = 4; 1_191_829_844 = variant { 1_955_698_212 = record { 2_190_693_645 = 0; 2_374_371_241 = "install_code"; 2_631_180_839 = principal "aaaaa-aa";} }; 2_781_795_542 = 1_621_462_593_047_590_026;}; record { 23_515 = 5; 1_191_829_844 = variant { 1_955_698_212 = record { 2_190_693_645 = 0; 2_374_371_241 = "install_code"; 2_631_180_839 = principal "aaaaa-aa";} }; 2_781_795_542 = 1_621_462_605_779_157_885;}; record { 23_515 = 6; 1_191_829_844 = variant { 1_955_698_212 = record { 2_190_693_645 = 0; 2_374_371_241 = "authorize"; 2_631_180_839 = principal "gsueu-yaaaa-aaaae-aaagq-cai";} }; 2_781_795_542 = 1_621_462_609_036_146_536;}; record { 23_515 = 7; 1_191_829_844 = variant { 1_955_698_212 = record { 2_190_693_645 = 0; 2_374_371_241 = "greet"; 2_631_180_839 = principal "gvvca-vyaaa-aaaae-aaaga-cai";} }; 2_781_795_542 = 1_621_463_144_066_333_270;}; record { 23_515 = 8; 1_191_829_844 = variant { 4_271_600_268 = record { 23_515 = principal "ejta3-neil3-qek6c-i7rdw-sxreh-lypfe-v6hjg-6so7x-5ugze-3iohr-2qe"; 1_224_700_491 = null; 1_269_754_742 = variant { 2_494_206_670 };} }; 2_781_795_542 = 1_621_463_212_828_477_570;}; record { 23_515 = 9; 1_191_829_844 = variant { 1_955_698_212 = record { 2_190_693_645 = 0; 2_374_371_241 = "wallet_balance"; 2_631_180_839 = principal "gastn-uqaaa-aaaae-aaafq-cai";} }; 2_781_795_542 = 1_621_878_637_071_884_946;}; record { 23_515 = 10; 1_191_829_844 = variant { 4_271_600_268 = record { 23_515 = principal "b5quc-npdph-l6qp4-kur4u-oxljq-7uddl-vfdo6-x2uo5-6y4a6-4pt6v-7qe"; 1_224_700_491 = null; 1_269_754_742 = variant { 4_218_395_836 };} }; 2_781_795_542 = 1_621_879_473_916_547_313;}; record { 23_515 = 11; 1_191_829_844 = variant { 313_999_214 = record { 1_136_829_802 = principal "gastn-uqaaa-aaaae-aaafq-cai"; 3_573_748_184 = 10_000_000_000;} }; 2_781_795_542 = 1_621_977_470_023_492_664;}; record { 23_515 = 12; 1_191_829_844 = variant { 2_171_739_429 = record { 25_979 = principal "gastn-uqaaa-aaaae-aaafq-cai"; 3_573_748_184 = 10_000_000_000; 4_293_698_680 = 0;} }; 2_781_795_542 = 1_621_977_470_858_839_320;};},
)

```

在此示例中，有十二个事件记录。Role 字段（由 hash 表示1_269_754_742）指定主体是控制器（由 hash 表示4_218_395_836）还是保管人（由 hash 表示2_494_206_670）。此示例中的事件还说明了一个金额字段（由 hash 表示3_573_748_184），其中传输了 10,000,000,000 个Cycle。