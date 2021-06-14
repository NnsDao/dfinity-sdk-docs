---
sidebar_position: 1
---

# Motoko 编程语言


Motoko编程语言会跟随DFINITY Canister SDK的新版本和Motoko编译器的持续更新而不断发展迭代。常常回来看看，尝试新的功能，看看有什么新功能。

Motoko编程语言是一种新的、现代的、类型健全的语言，是为那些希望建立下一代应用程序和服务直接在互联网计算机协议上运行的开发人员所设计。Motoko是专门为支持互联网计算机的独特功能而设计的，并提供一个熟悉而强大的编程环境。作为一种新的语言，Motoko在不断发展，支持新的功能和改进。请继续查看更新消息和Motoko作为一个开放源码项目的公告。

### 原生程序罐支持

Motoko具有对互联网计算机软件罐的本地支持，这些软件罐被表述为行动者，是封装其状态并通过异步消息进行通信的自主对象。

```
actor Counter {

  var value = 0;

  public func inc() : async Nat {
    value += 1;
    return value;
  };
}
```

### 以直接方式顺序编码

在 Internet 计算机上，程序容器罐异步调用其他程序罐，但 Motoko 使您能够以直接方式对系统进行顺序编程。异步消息是返回未来的函数调用，并且 await 构造允许链接调用，就好像它们是同步通知的一样。

```

actor Factorial {

  var last = 1;

  public func next() : async Nat {
    last *= await Counter.inc();
    return last;
  }
};

ignore await Factorial.next();
ignore await Factorial.next();
await Factorial.next();

```

### 现代类型系统

Motoko 被设计为对熟悉 Javascript 和其他流行语言的人来说是直观的，但提供了现代功能，例如健全的结构类型、泛型、变体类型和检查模式匹配。

```
type Tree<T> = {
  #leaf : T;
  #branch : {left : Tree<T>; right : Tree<T>};
};

func iterTree<T>(tree : Tree<T>, f : T -> ()) {
  switch (tree) {
    case (#leaf(x)) { f(x) };
    case (#branch{left; right}) {
      iterTree(left, f);
      iterTree(right, f);
    };
  }
};

// Compute the sum of all leaf nodes in a tree
let tree = #branch { left = #leaf 1; right = #leaf 2 };
var sum = 0;
iterTree<Nat>(tree, func (leaf) { sum += leaf });
sum
```

### 自动生成的 IDL 文件

SDK 以一种称为 的语言中性格式导出您的接口定义Candid，因此其他容器、浏览器驻留代码和具有权限的智能手机应用程序可以调用您的函数。Motoko 编译器还可以读写接口定义文件，允许 Motoko 与用其他语言编程的容器无缝交互。

例如，前面的Counteractor 生成以下CandidIDL：

```
service Counter : {
  inc : () -> (nat);
}
```

### 正交的持久性

互联网计算机会将你的罐子运行的内存页持久化。因此，一个行为体的状态和它所有的内存数据结构可以无限期地存活，它们不需要明确地被 "保存"。

例如，在下面的注册服务中，为文本名称分配顺序的ID，哈希表的状态在不同的调用中被保存下来，尽管罐子的状态在许多节点上被复制，而且通常不常驻在内存中。

```
import Text "mo:base/Text";
import Map "mo:base/HashMap";

actor Registry {

  let map = Map.HashMap<Text, Nat>(10, Text.equal, Text.hash);

  public func register(name : Text) : async () {
    switch (map.get(name)) {
      case null {
        map.put(name, map.size());
      };
      case (?id) { };
    }
  };

  public func lookup(name : Text) : async ?Nat {
    map.get(name);
  };
};

await Registry.register("hello");
(await Registry.lookup("hello"), await Registry.lookup("world"))
```

### 升级
Motoko提供了许多功能来帮助你利用正交持久性，包括当你升级一个罐子的软件时，允许你的堆自我迁移的语言功能。

例如，Motoko允许你声明某些变量为稳定变量(stable)。(stable)稳定变量的值会在软件升级时自动保存下来。

设定一个稳定的计数器:

```
actor Counter {

  stable var value = 0;

  public func inc() : async Nat {
    value += 1;
    return value;
  };
}
```

下面这个例子可以被安装，递增n次，然后不间断地升级到更好的迭代功能。

```
actor Counter {

  stable var value = 0;

  public func inc() : async Nat {
    value += 1;
    return value;
  };

  public func reset() : async () {
    value := 0;
  }
}
```

因为value已被声明stable类型，服务的当前状态n在升级后被保留。计数将从n开始继续，而不是从0重新开始。

因为新的接口与以前的接口兼容，引用该服务的现有客户端将继续工作，但新的客户端将能够利用其升级后的功能（额外的重置(reset)功能）。

对于不能单独使用稳定变量解决的情况，Motoko提供了用户可定义的升级钩子，在升级前后立即运行，并允许你将任意的状态迁移到稳定变量。

###  更多关于Motoko的语法


Motoko提供了许多其他的开发者生产力特性，包括子类型、任意精度的算术和垃圾回收。

Motoko不是，也不打算成为实现程序罐的唯一语言。如果它不适合你的需求，我们也在努力为SDK添加Rust支持。我们的目标是使任何语言（具有针对WebAssembly的编译器）能够产生在互联网计算机上运行的程序罐，并通过语言中立的Candid接口与其他可能是外国(不知道是不是指非ICP生态的应用)的程序罐互操作。


其量身定制的设计意味着 Motoko 应该是互联网计算机上最简单、最安全的编码语言，至少在可预见的未来是这样。


### 名次解释

[正交持久性](https://www.wikiwand.com/en/Persistence_(computer_science))