# [ICP科普]一个例子看懂如何验证互联网身份认证的代码

![互联网身份认证的代码](https://gateway.pinata.cloud/ipfs/QmazV3oMAxAFp3gD5Ygci8HuWVunSi3bnpymFHT1cDSkqx)


在互联网计算机上,用户可以使用ICP的身份认证系统登陆各种dapp,例如:NNS Dapp、OpenChat等,在这样做时,他们相信该服务会妥善保管他们的凭据-但他们可能直接确认ICP的身份认证系统真的没有追踪他们。

ICP的身份认证系统是否真的用它它说表述的形式在运行代码?为了帮助您回答这个问题,我将引导您完成验证步骤。

（当然，以下内容也适用于其他容器，但在这种情况下，我将坚持使用ICP的身份认证系统。）

### 找出正在运行的内容

互联网计算机上的智能合约，即程序罐智能合约，是一个WebAssembly模块。互联网计算机故意不允许你直接下载任何罐子的Wasm代码，因为也许有些开发者想保留他们的代码。但它确实公开了Wasm模块的哈希值。最简单的方法是使用dfx查看(你需要在一个有dfx配置文件的项目内运行以下命令):


输入: `dfx canister --no-wallet --network ic info rdmx6-jaaaa-aaaaa-aaadq-cai`


![dfx canister](https://gateway.pinata.cloud/ipfs/QmZFfwkJi56giRb4mcWRVjPjLnLEvYdqMnLw5dU7uzoTAg)

这里的 "控制器 "是治理罐的程序罐ID。这告诉你互联网身份认证是由网络神经系统(NNS)控制的，它的代码只能通过投票的提案来改变。这是有利的；如果控制者只是单个人，比如说:“我，我可以直接改变互联网身份的代码并接管你们所有的身份。”

模块哈希值 "是所部署的.wasm的SHA-256哈希值。因此，让我们跟随这个唯一ID。


### 找到正确的提交
由于互联网身份信息的升级是通过对NNS的提案完成的，我们应该在`https://github.com/ic-association/nns-proposals` 仓库中的`[proposal/network_canister_management](https://github.com/ic-association/nns-proposals/tree/main/proposals/network_canister_management/)`目录下找到这样的提案描述。

![network_canister_management ](https://miro.medium.com/max/700/0*2G6V3QS6VLLEd3EZ)

我们必须找到升级互联网身份的最新提案。不幸的是，这个文件夹包含了许多程序罐的提案，而且文件的命名也不是超级给力。我通常从底部翻阅列表，看第二列，其中包含创建或修改文件的最新提交的标题。

在这种情况下，倒数第二栏是我们关心的：`https://github.com/ic-association/nns-proposals/blob/main/proposals/network_canister_management/20210527T2203Z.md`。这个文件列出了理由，给出了修改的概述，最重要的是，说`bd51eab`是我们要升级的提交。

该文件还说，wasm的哈希值是`d4af9277f3e8d26fd8cdc7874a9f47b6456587fbb2a64d61b6b6880d144d3c04`，这与我们之前在上面看到的一致。这很好：看来我们真的找到了最新的升级互联网身份的提案，而且该提案确实通过了。

警告：如果你是偏执狂，不要相信这个文件。没有任何东西可以阻止提案者创建一个指向一个修订版的文件，而实际上在提案中包含了不同的代码。这就是为什么接下来的步骤有必要进行验证。

### 获取源代码
现在我们有了修订版，我们可以获得源码并克隆出指定的版本`bd51eab`。

![克隆源代码](https://gateway.pinata.cloud/ipfs/QmaoMKoWAGfrN9uGJtq7q1vcwXkb8ZHkoPzjqgH5aXDjG2)

`bd51eab (HEAD, tag: mainnet-20210527T2203Z) Registers the seed phrase before showing it (#301)`

在最后一行，你可以看到互联网身份认证团队已经为该修订版打上了标签，标签名称包含了提案描述文件的名称。非常整洁!

### 重新构建
README.md有以下构建说明。

![互联网身份认证的代码](https://miro.medium.com/max/700/1*TBhZs_66YrcvMjHwE87rlw.png)


实际上，运行第一条命令就足够了，因为它也会打印出哈希值（我们不需要将.wasm从Docker罐中复制出来）。

![互联网身份认证的代码](https://gateway.pinata.cloud/ipfs/QmRJywcawt7NRiyuoWoQypdYfS3TRXCeB3pei9Y9tMN4FU)


成功! 哈希值完美匹配。

你不相信我？自己试试吧（如果你得到一个不同的哈希值，请告诉我们，也许我被黑了）。如果你没有为Docker配置足够的内存，这可能会失败；8GB应该足够了。
在这一点上，你有一个信任路径，从坐在你面前的代码到运行在`https://identity.ic0.app` 的Internet Identity，包括前端代码，你可以开始审计源代码。


### 程序罐的ID是什么？

如果你仔细观察，你可能已经注意到我们得到了`rdmx6-jaaaa-aaaaa-aaadq-cai`这个罐子的模块，但是我们正在访问一个网络应用，网址是`https://identity.ic0.app`。那么他们是如何连接的呢？

在未来，我希望互联网计算机上有某种形式的类似DNS的 "好的主机名称注册表"，它存储了从好的名称到程序罐ID的映射，并且你将能够以安全的方式（例如使用认证变量）查询 "哪个罐子为`rdmx6-jaaaa-aaaaa-aaadq-cai`服务"。但是，由于我们还没有这个能力，但是仍然希望你能够使用一个好的名字来表示互联网身份（并且不必在以后改变这个名字，这将导致头痛），所以我们现在已经实现了这个映射。

这里的相关代码是你的浏览器在访问任何`*.ic0.app`网址时下载的 "认证服务工作程序"。这段代码将拦截对该域的所有请求，将其映射为查询调用，然后使用认证变量来验证响应。而事实上，映射就在这个拦截的代码中:

`const hostnameCanisterIdMap: Record<string, [string, string]> = {
  'identity.ic0.app': ['rdmx6-jaaaa-aaaaa-aaadq-cai', 'ic0.app'],
  'nns.ic0.app': ['qoctq-giaaa-aaaaa-aaaea-cai', 'ic0.app'],
  'dscvr.ic0.app': ['h5aet-waaaa-aaaab-qaamq-cai', 'ic0.page'],
};`

### 其他程序罐有什么不同呢？

+ 原则上，同样的方法也适用于其他程序罐，无论是OpenChat，还是NNS程序罐和dApp等。但细节实现上会有所不同，因为每一个代码集的开发者可能都有自己的编码方式:
    + 检测他们的代码库的位置和修订情况
    + 构建代码库(程序罐)

特别指出，如果没有一个可复制的构建程序罐的方法，这将会失败，这就是为什么像`https://reproducible-builds.org/` 这样的项目在总体上是如此重要。

如果你想讨论这个帖子，请考虑加入DFINITY论坛并发表评论：`https://forum.dfinity.org/t/verifying-the-code-of-the-internet-identity-service-a-walk-through/4650`

在`sdk.dfinity.org`开始构建，在`forum.dfinity.org`加入我们的开发者社区。

原文地址: https://medium.com/dfinity/verifying-the-internet-identity-code-a-walkthrough-c1dd7a53f883

原作者: Joachim Breitner，DFINITY的高级研究员和工程师

翻译:kk德米安