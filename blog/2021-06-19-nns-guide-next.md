---
slug: icp-nns-dfinity-next
title: 神经元网络——Dfinity的算法自治之路（下）
author: 原力区
author_title: 原力区
author_url: https://github.com/nnsdao
author_image_url: https://gateway.pinata.cloud/ipfs/QmaoreTJUaidZ7cqM5RKHPnGciN3F3QUWKfH1W3shuAu4x
tags: [icp, SailFash, Dfinity, nnsdao,grants,Polychain,dapp,DSCVR ]
---

## 神经元网络——Dfinity的算法自治之路（下）


本文将继续从NNS的重要组件-账本出发继续解读Dfinity的去中心化治理机制。

![神经元网络——Dfinity的算法自治之路](https://www.dailybtc.cn/wp-content/uploads/2021/06/frc-94965a9decbad0fbfd3d6728c97f8192.png)


账本（Ledger）是神经网络系统（NNS）中负责管理（质押、支付和销毁）效用代币ICP的组件，也记录着互联网计算机IC区块链信息。



终端用户或者调用容器通过给容器发送消息触发被调用容器中的方法来实现用户或调用容器的操作。



这些消息可以用来查询（而不改变）应用状态，也可以用来更新并保存状态，至于这些更新以什么顺序被执行，则由IC网络中节点运行的共识协议决定。

![神经元网络——Dfinity的算法自治之路](https://www.dailybtc.cn/wp-content/uploads/2021/06/frc-a8b2ad88023ddce0b5c9a63595c2efb6.png)

上文提到的在神经元中的质押、账户之间的转账、IC发放Token奖励以及ICP销毁转化为燃料都是通过账本来管理的，而账本的操作则是通过账本容器（Ledger Canister）来具体实施的。



需要注意的是，整个物联网计算机只有一个账本容器，而这个账本容器会伴随所有其它容器执行。

账本还与NNS中的其它组件：神经元、效用代币、容器、提案存在诸多关联和协作，如下图所示：

![【图1】NNS中Ledger和其它组件的关系](https://www.dailybtc.cn/wp-content/uploads/2021/06/frc-05dcdc7b13ed6962d7bb88cb7c094c20.png)



下面我们就以账本为中心展开讨论。



Dfinity的区块链账本托管在NNS上，它记录着账户以及账户对应的余额。账本是以一种电子表格的形式记录，每行都代表一个账户，一个账户主要包含两条信息：账户ID和余额。



账户ID可以理解为比特币或以太坊中公钥的哈希。账户标识符包括一个主体ID（Principal）和子账户。其中，主体可以是一个公钥所有者也可以是另一个NNS或互联网计算机中的容器。



![神经元网络——Dfinity的算法自治之路](https://www.dailybtc.cn/wp-content/uploads/2021/06/frc-6573308dec762b240fc97150d3f445db.png)

在发生转账交易时，如果账户内代币余额为零，也就是没有操作的对象，则从账本中注销该账户。



如果收款账户是NNS容器（如，治理容器账户），打款人可以让账本发送消息通知收款账户执行某条命令。



例如，在创建神经元时，用户X在创建一个神经元而质押效用代币的时候，就是通过向NNS发送一条命令通知Governance Canister，从自己的账户A划转一定数量的ICP到一个新的账户A’。质押完成，则完成一个新的神经元的创建，而A和A’的所有者都是用户X。

![神经元网络——Dfinity的算法自治之路](https://www.dailybtc.cn/wp-content/uploads/2021/06/frc-dbf9ff1d079fcc48669eea0bbc1ffb9e.jpeg)

X也可以通过对神经元的操控（投票，增减质押数），表达自己的网络的意愿。



所以，账本容器的管理对象即包括账户中的代币（ICP）也包括容器之间通信的消息。



注：目前交易的流程是通过向运行在Rosetta节点（不属于Dfinity网络）上的dfinity/rosetta-api这个中间件提交交易的方式，帮助用户和互联网计算机进行交互的。

关于rosetta的具体使用细节，请参考官方文档：

https://sdk.dfinity.org/docs/integration/ledger-quick-start.html

![神经元网络——Dfinity的算法自治之路](https://www.dailybtc.cn/wp-content/uploads/2021/06/frc-527a0e518952953b46d67c6416485720.png)

神经元网络中的容器主要有三种，治理容器、注册容器和账本容器。其中，治理容器负责收集提案和参与投票的神经元；注册容器保存了互联网计算机的系统配置信息，供节点查询。



如【图1】所示，神经元投票的发起者是账本中账户背后的公钥持有者。他通过账本容器向治理容器中发送ICP代币进行质押，即创建神经元而发起提案。

其它神经元通过治理容器查询正在投票的提案。每个神经元都有自己的投票权力，NNS会根据权力占比决定提案是否通过。



如果提案通过，治理容器则发送提案的最终的结果到注册容器，更新IC系统配置，完成投票奖励分发。如此，完成一轮NNS治理。

来源:网络