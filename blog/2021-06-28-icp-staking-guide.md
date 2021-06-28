---
slug: icp-stacking-guide
title: 【ICP科普】如何使用策略配置质押挖矿ICP，并获取最高收益
author: kk德米安
author_title: kk德米安
author_url: https://github.com/nnsdao
author_image_url: https://gateway.pinata.cloud/ipfs/QmaoreTJUaidZ7cqM5RKHPnGciN3F3QUWKfH1W3shuAu4x
tags: [icp, SailFash, Dfinity, nnsdao,grants,Polychain,dapp,DSCVR,icpscan,icpdrops,NDT ]
---

# # 【ICP科普】如何使用策略配置质押挖矿ICP，并获取最高收益


如果你想使你拥有的ICP总数收益最大化（不管它们是否在质押挖矿），那么你应该用尽可能长的溶解延迟将你的ICP锁在被质押的神经元中。这将保证你在ICP上获得最好的回报。

如果你想在8年内获得最大数量的ICP（假设没有复利），那么你应该将你的溶解延迟设置得尽可能高，在这种情况下是8年，并立即点击溶解。这比4年的溶解延迟和4年的锁定（以累积年龄奖励），然后在最后4年解锁要好。任何其他保持和溶解的组合，都不如将解锁延迟时间设置得越长越好。溶解延迟奖金比币领收益要好，所以它似乎每次都能胜出。总是把你的ICP锁定在尽可能长的时间内，以使收益最大化。

真正有趣的问题是复利是如何影响回报的，特别是按锁定的ICP与流动的ICP来细分。我所说的复利是指将ICP的质押回报再投资于质押的神经元。我们将研究4种不同的情况进一步说明。


### 4种分类



每个条件都假定有100个ICP被质押，并有8年的溶解延迟。

1.锁定复利。锁定你的ICP，有8年的溶解延迟，并进行复利，即把你的ICP奖励再投资到你所锁定的ICP神经元里。

2.锁定无复利。锁定您的ICP，有8年的溶解延迟，并且没有复利，这意味着您可以提取您的ICP奖励，然后做您想做的事情。

3.溶解复利。锁定您的ICP，有8年的溶解延迟，立即点击溶解，然后复利，即把您的ICP奖励再投资到您溶解的ICP神经元中。

4.溶解不复利。锁定你的ICP，有8年的溶解延迟，立即点击溶解，然后提取ICP奖励，做你想做的事情。


### 结论

让我们直接进入结果！下表显示了在 8 年期末，在 4 个条件下，有多少 ICP 仍被锁定/抵押在神经元中，以及有多少 ICP 是流动性的。总数是锁定和流动性 ICP 的总和。


![icp质押](https://gateway.pinata.cloud/ipfs/Qme5C9m8SLM8vZxVzT1kDicBGmzn4SpchifMXQ7EVUcVdB)



锁定的复利：请注意，将你的ICP锁定在一个有8年溶解延迟的神经元中，永远不点击溶解，并将所有ICP奖励复利到已锁定的神经元中，会产生最多的ICP。这是有道理的，因为NNS的设计是为了奖励那些对他们所投资的ICP有较长的时间范围的人。还要注意的是，在这种情况下，所有的ICP仍然被锁定在8年的溶解延迟神经元中，所以即使它导致了最高数量的ICP，你也不能获得任何的ICP，因为没有任何的流动性ICP。而且你必须等待8年的时间来溶解ICP，然后才能获取其中的奖励和本金。

被锁住无复利：看一下 "锁定质押挖矿"的情况，真正说明了复利的力量。锁定复利 "条件的收益是 "锁定无复利 "条件的2.65倍（454.1/171.3）。这是一个相当显著的复利效应。还要注意的是，在这个条件下，我们有171.3个流动的ICP和100个质押的ICP，这比 "锁定复利 "条件下的流动性更强，但却牺牲丢失了一部分奖励。


为了简单起见，我使用了每日复利模型，而不是每隔一周的复利模型（这大约是你现在用一个具有100个ICP的8年溶解延迟神经元会得到的结果）。因此，真正的复利效应会比我在这里引用的数据略低。虽然NNS团队正在开发一个自动复利功能，这可能会使这个分析更现实一点（如果他们实施每日复利的话）。

溶解性复利：有趣的是，"溶解性质押复利"条件导致了最多的流动性ICP。你所有的ICP都是流动性的，因为你的神经元正在溶解，而你正在不断地将奖励的ICP加回到你的溶解的神经元中。因此，如果你想在8年后将你的流动性ICP最大化，你要将你的溶解延迟设置得尽可能高，立即点击溶解，然后将你的奖励ICP复利到你的溶解神经元中。你将牺牲一些奖励来获得流动性ICP（如果你把它全部锁起来，奖励是2.05倍），但最终你的所有ICP都将是流动性的。

溶解无复利：最后，"不溶解任何质押"的条件可以预见是总体收益率最低的条件，但会产生第二多的流动性ICP。


### 总结


如果你想要最多的ICP，并且不在乎你是否能获得它，那么使用8年的溶解延迟，并将你所有的ICP奖励重新投资到你所投资的神经元中。

如果你不想复利，而且你想在8年内获得流动性最强的ICP，那么将你的溶解延迟设置得越高越好，并立即点击溶解，仍然是最有意义的。解散延迟奖励 > 其他任何方式。

如果你想在8年内最大限度地增加流动ICP的数量，就用8年的溶解延迟来抵押你的ICP，然后将你的ICP奖励复利到你的溶解神经元中。

最后，即使你的时间框架是2年、4年、20年或任何介于两者之间的时间，这些相同的原则仍然适用，尽管随着你的时间框架越来越短，你将看到条件之间的差异越来越小。
 
原文：https://icp.guide/the-best-staking-strategy-to-maximize-liquid-icp/

作者：icp.guide

翻译：kk德米安