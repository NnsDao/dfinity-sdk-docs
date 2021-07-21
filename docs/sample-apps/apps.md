---
sidebar_position: 1
---

# 示例代码、应用程序和微服务

由DFINITY开发或由社区贡献的示例代码、应用程序和微服务可从DFINITY公共资源库中获得。

通过访问公共资源库，您可以直接下载、克隆、分叉或分享样本项目。您还可以使用标准的GitHub工作流程为已发布的项目提出更新建议或报告问题，从而做出贡献。

样本项目为你提供了一种实验和与其他开发者合作的方式。然而，这些项目和示例代码并不打算用作商业应用，也不提供任何明确或暗示的支持或任何形式的保证。

本节初步介绍了一些应用程序和微服务的示例代码，你可以复制和修改这些代码来启动自己的项目。

### C语言项目

关于用C语言编写的用于互联网计算机的项目实例，见[C++ 事例项目](https://github.com/dfinity/examples/tree/master/c)。

[冒险游戏](https://github.com/dfinity/examples/tree/master/c/adventure)

[二维码生成器](https://github.com/dfinity/examples/tree/master/c/qr)

[反转游戏](https://github.com/dfinity/examples/tree/master/c/reverse)

### Motoko项目

关于使用Motoko编程语言的项目，见[Motoko示例项目](https://github.com/dfinity/examples/tree/master/motoko)。

[计算器 - 简单功能](https://github.com/dfinity/examples/tree/master/motoko/calc)

[计数器](https://github.com/dfinity/examples/tree/master/motoko/counter)

[echo](https://github.com/dfinity/examples/tree/master/motoko/echo)

[因数](https://github.com/dfinity/examples/tree/master/motoko/factorial)

[你好，世界](https://github.com/dfinity/examples/tree/master/motoko/hello-world)

[Cycle，你好](https://github.com/dfinity/examples/tree/master/motoko/hello_cycles)

[生命的游戏--升级](https://github.com/dfinity/examples/tree/master/motoko/life)

[电话簿](https://github.com/dfinity/examples/tree/master/motoko/phone-book)

[发布/订阅](https://github.com/dfinity/examples/tree/master/motoko/pub-sub)

[快速排序](https://github.com/dfinity/examples/tree/master/motoko/quicksort)

[随机迷宫--加密的随机性](https://github.com/dfinity/examples/tree/master/motoko/random_maze)

[待办事项核对表](https://github.com/dfinity/examples/tree/master/motoko/simple-to-do)

[超级英雄数据库](https://github.com/dfinity/examples/tree/master/motoko/superheroes)

[(whoami)](https://github.com/dfinity/examples/tree/master/motoko/whoami)

### 额外的示例应用程序

本节包括目前在公共资源库中没有的项目的示例代码。

**十六进制编码和解码**

mo-hex项目为Motoko编程语言实现了十六进制的编码和解码程序。

**源代码**

该项目包括以下hex.mo源代码:

```
/**
 * Module      : Hex.mo
 * Description : Hexadecimal encoding and decoding routines.
 * Copyright   : 2020 Enzo Haussecker
 * License     : Apache 2.0 with LLVM Exception
 * Maintainer  : Enzo Haussecker <enzo@dfinity.org>
 * Stability   : Stable
 */

import Array "mo:base/Array";
import Iter "mo:base/Iter";
import Option "mo:base/Option";
import Nat8 "mo:base/Nat8";
import Char "mo:base/Char";
import Result "mo:base/Result";

module {

  private type Result<Ok, Err> = Result.Result<Ok, Err>;

  private let base : Nat8 = 0x10;

  private let symbols = [
    '0', '1', '2', '3', '4', '5', '6', '7',
    '8', '9', 'A', 'B', 'C', 'D', 'E', 'F',
  ];

  /**
   * Define a type to indicate that the decoder has failed.
   */
  public type DecodeError = {
    #msg : Text;
  };

  /**
   * Encode an array of unsigned 8-bit integers in hexadecimal format.
   */
  public func encode(array : [Nat8]) : Text {
    Array.foldLeft<Nat8, Text>(array, "", func (accum, w8) {
      accum # encodeW8(w8);
    });
  };

  /**
   * Encode an unsigned 8-bit integer in hexadecimal format.
   */
  private func encodeW8(w8 : Nat8) : Text {
    let c1 = symbols[Nat8.toNat(w8 / base)];
    let c2 = symbols[Nat8.toNat(w8 % base)];
    Char.toText(c1) # Char.toText(c2);
  };

  /**
   * Decode an array of unsigned 8-bit integers in hexadecimal format.
   */
  public func decode(text : Text) : Result<[Nat8], DecodeError> {
    let next = text.chars().next;
    func parse() : Result<Nat8, DecodeError> {
      Option.get<Result<Nat8, DecodeError>>(
        do ? {
          let c1 = next()!;
          let c2 = next()!;
          Result.chain<Nat8, Nat8, DecodeError>(decodeW4(c1), func (x1) {
            Result.chain<Nat8, Nat8, DecodeError>(decodeW4(c2), func (x2) {
                #ok (x1 * base + x2);
            })
          })
        },
        #err (#msg "Not enough input!"),
      );
    };
    var i = 0;
    let n = text.size() / 2 + text.size() % 2;
    let array = Array.init<Nat8>(n, 0);
    while (i != n) {
      switch (parse()) {
        case (#ok w8) {
          array[i] := w8;
          i += 1;
        };
        case (#err err) {
          return #err err;
        };
      };
    };
    #ok (Array.freeze<Nat8>(array));
  };

  /**
   * Decode an unsigned 4-bit integer in hexadecimal format.
   */
  private func decodeW4(char : Char) : Result<Nat8, DecodeError> {
    for (i in Iter.range(0, 15)) {
      if (symbols[i] == char) {
        return #ok (Nat8.fromNat(i));
      };
    };
    let str = "Unexpected character: " # Char.toText(char);
    #err (#msg str);
  };
};
```

### GF(256) 中的多项式长除法

该程序对 Galois 域 GF(256) 元素执行多项式长除法。

**源代码**

除了标准库之外，该项目还使用了两个主要的 Motoko 源代码文件。

其中Galois.mo文件包含核心编程逻辑。

其中Nat.mo文件包含进口的使用附加功能Galois.mo的文件。

### Galois.mo

```

/**
 * Module     : Galois.mo
 * Copyright  : 2020 DFINITY Stiftung
 * License    : Apache 2.0 with LLVM Exception
 * Maintainer : Enzo Haussecker <enzo@dfinity.org>
 * Stability  : Stable
 */

import Array "mo:base/Array";
import Debug "mo:base/Debug";
import List "mo:base/List";
import Nat "Nat";
import Prelude "mo:base/Prelude";
import Int "mo:base/Int";
import Util "Util"

module {

  type List<T> = List.List<T>;

  public let logs = [
    000, 001, 025, 002, 050, 026, 198, 003, 223, 051,
    238, 027, 104, 199, 075, 004, 100, 224, 014, 052,
    141, 239, 129, 028, 193, 105, 248, 200, 008, 076,
    113, 005, 138, 101, 047, 225, 036, 015, 033, 053,
    147, 142, 218, 240, 018, 130, 069, 029, 181, 194,
    125, 106, 039, 249, 185, 201, 154, 009, 120, 077,
    228, 114, 166, 006, 191, 139, 098, 102, 221, 048,
    253, 226, 152, 037, 179, 016, 145, 034, 136, 054,
    208, 148, 206, 143, 150, 219, 189, 241, 210, 019,
    092, 131, 056, 070, 064, 030, 066, 182, 163, 195,
    072, 126, 110, 107, 058, 040, 084, 250, 133, 186,
    061, 202, 094, 155, 159, 010, 021, 121, 043, 078,
    212, 229, 172, 115, 243, 167, 087, 007, 112, 192,
    247, 140, 128, 099, 013, 103, 074, 222, 237, 049,
    197, 254, 024, 227, 165, 153, 119, 038, 184, 180,
    124, 017, 068, 146, 217, 035, 032, 137, 046, 055,
    063, 209, 091, 149, 188, 207, 205, 144, 135, 151,
    178, 220, 252, 190, 097, 242, 086, 211, 171, 020,
    042, 093, 158, 132, 060, 057, 083, 071, 109, 065,
    162, 031, 045, 067, 216, 183, 123, 164, 118, 196,
    023, 073, 236, 127, 012, 111, 246, 108, 161, 059,
    082, 041, 157, 085, 170, 251, 096, 134, 177, 187,
    204, 062, 090, 203, 089, 095, 176, 156, 169, 160,
    081, 011, 245, 022, 235, 122, 117, 044, 215, 079,
    174, 213, 233, 230, 231, 173, 232, 116, 214, 244,
    234, 168, 080, 088, 175
  ];

  public func log(n : Nat) : Nat {
    let m = n % 256;
    if (m == 0) {
      Debug.print("Error: Logarithm of zero is undefined in GF(256)!");
      Prelude.unreachable()
    };
    logs[m - 1]
  };

  public let alogs = [
    001, 002, 004, 008, 016, 032, 064, 128, 029, 058,
    116, 232, 205, 135, 019, 038, 076, 152, 045, 090,
    180, 117, 234, 201, 143, 003, 006, 012, 024, 048,
    096, 192, 157, 039, 078, 156, 037, 074, 148, 053,
    106, 212, 181, 119, 238, 193, 159, 035, 070, 140,
    005, 010, 020, 040, 080, 160, 093, 186, 105, 210,
    185, 111, 222, 161, 095, 190, 097, 194, 153, 047,
    094, 188, 101, 202, 137, 015, 030, 060, 120, 240,
    253, 231, 211, 187, 107, 214, 177, 127, 254, 225,
    223, 163, 091, 182, 113, 226, 217, 175, 067, 134,
    017, 034, 068, 136, 013, 026, 052, 104, 208, 189,
    103, 206, 129, 031, 062, 124, 248, 237, 199, 147,
    059, 118, 236, 197, 151, 051, 102, 204, 133, 023,
    046, 092, 184, 109, 218, 169, 079, 158, 033, 066,
    132, 021, 042, 084, 168, 077, 154, 041, 082, 164,
    085, 170, 073, 146, 057, 114, 228, 213, 183, 115,
    230, 209, 191, 099, 198, 145, 063, 126, 252, 229,
    215, 179, 123, 246, 241, 255, 227, 219, 171, 075,
    150, 049, 098, 196, 149, 055, 110, 220, 165, 087,
    174, 065, 130, 025, 050, 100, 200, 141, 007, 014,
    028, 056, 112, 224, 221, 167, 083, 166, 081, 162,
    089, 178, 121, 242, 249, 239, 195, 155, 043, 086,
    172, 069, 138, 009, 018, 036, 072, 144, 061, 122,
    244, 245, 247, 243, 251, 235, 203, 139, 011, 022,
    044, 088, 176, 125, 250, 233, 207, 131, 027, 054,
    108, 216, 173, 071, 142
  ];

  public func alog(n : Nat) : Nat {
    let m = n % 256;
    if (m == 255) {
      Debug.print("Error: Antilogarithm of 255 is undefined in GF(256)!");
      Prelude.unreachable()
    };
    alogs[m]
  };

  public type Elem = { unbox : Nat };

  public func elemNew(n : Nat) : Elem {
    { unbox = n % 256 }
  };

  public func elemShow(elem : Elem) : Text {
    debug_show(elem.unbox)
  };

  public func elemToBit(elem : Elem) : Bool {
    elem.unbox > 0
  };

  public func elemFromBit(bit : Bool) : Elem {
    if bit {
      { unbox = 1 }
    } else {
      { unbox = 0 }
    }
  };

  public func elemToBits(elem : Elem) : List<Bool> {
    Util.padLeftTo(8, Nat.natToBits(elem.unbox))
  };

  public func elemFromBits(bits : List<Bool>) : Elem {
    elemNew(Nat.natFromBits(bits))
  };

  public func elemEq(elem1 : Elem, elem2 : Elem) : Bool {
    elem1.unbox == elem2.unbox
  };

  public func elemAdd(elem1 : Elem, elem2 : Elem) : Elem {
    { unbox = Nat.natXor(elem1.unbox, elem2.unbox) }
  };

  public func elemSub(elem1 : Elem, elem2 : Elem) : Elem {
    elemAdd(elem1, elem2)
  };

  public func elemMul(elem1 : Elem, elem2 : Elem) : Elem {
    switch (elem1.unbox, elem2.unbox) {
      case (0, _) { elem1 };
      case (_, 0) { elem2 };
      case (a, b) {
        { unbox = alog((log(a) + log(b)) % 255) }
      }
    }
  };

  public func elemDiv(elem1 : Elem, elem2 : Elem) : Elem {
    switch (elem1.unbox, elem2.unbox) {
      case (_, 0) {
        Debug.print("Error: Division by zero is undefined in GF(256)!");
        Prelude.unreachable()
      };
      case (0, _) {
        { unbox = 0 }
      };
      case (a, b) {
        { unbox = alog((255 + log(a) - log(b)) % 255) }
      }
    }
  };

  public func elemDivMod(elem1 : Elem, elem2 : Elem) : (Elem, Elem) {
    let elem3 = elemDiv(elem1, elem2);
    (elem3, elemSub(elem1, elem3))
  };

  public type Poly = { unbox : List<Elem> };

  public func polyNew(coeffs : [Nat]) : Poly {
    func step(n : Nat, accum : List<Elem>) : List<Elem> {
      List.push<Elem>(elemNew(n), accum)
    };
    let base = List.nil<Elem>();
    { unbox = Array.foldRight<Nat, List<Elem>>(coeffs, base, step) }
  };

  public func polyShow(poly : Poly) : Text {
    switch (List.pop<Elem>(poly.unbox)) {
      case (null, _) { "[]" };
      case (?head, tail) {
        let base = elemShow(head);
        func step(accum : Text, elem : Elem) : Text {
          accum # "," # elemShow(elem)
        };
        "[" # List.foldLeft<Elem, Text>(tail, base, step) # "]"
      }
    }
  };

  public func polyToBits(poly : Poly) : List<Bool> {
    List.map<Elem, Bool>(poly.unbox, elemToBit)
  };

  public func polyFromBits(bits : List<Bool>) : Poly {
    { unbox = List.map<Bool, Elem>(bits, elemFromBit) }
  };

  public func polyLen(poly : Poly) : Nat {
    List.size<Elem>(poly.unbox)
  };

  public func polyTrim(poly : Poly) : Poly {
    func go(elems : List<Elem>) : List<Elem> {
      switch (List.pop<Elem>(elems)) {
        case (?{ unbox = 0 }, tail) { go(tail) };
        case _ { elems }
      }
    };
    { unbox = go(poly.unbox) }
  };

  public func polyOrder(poly : Poly) : Int {
    Int.abs(polyLen(polyTrim(poly))) - 1
  };

  public func polyLeadCoeff(poly : Poly) : Elem {
    switch (List.pop<Elem>(polyTrim(poly).unbox).0) {
      case (?elem) { elem };
      case (null) {
        { unbox = 0 }
      }
    }
  };

  public func polyPadLeft(n : Nat, poly : Poly) : Poly {
    let zeros = List.replicate<Elem>(n, { unbox = 0 });
    { unbox = List.append<Elem>(zeros, poly.unbox) }
  };

  public func polyPadRight(n : Nat, poly : Poly) : Poly {
    let zeros = List.replicate<Elem>(n, { unbox = 0 });
    { unbox = List.append<Elem>(poly.unbox, zeros) }
  };

  public func polyGrow(to : Nat, poly : Poly) : Poly {
    let from = polyLen(poly);
    if (to > from) {
      polyPadLeft(to - from, poly)
    } else poly
  };

  public func polyZipWith(
    poly1 : Poly,
    poly2 : Poly,
    f : (Elem, Elem) -> Elem
  ) : Poly {
    let n1 = polyLen(poly1);
    let n2 = polyLen(poly2);
    let to = if (n1 > n2) n1 else n2;
    { unbox = List.zipWith<Elem, Elem, Elem>(
      polyGrow(to, poly1).unbox,
      polyGrow(to, poly2).unbox,
      f
    ) }
  };

  public func polyEq(poly1 : Poly, poly2 : Poly) : Bool {
    List.equal<Elem>(polyTrim(poly1).unbox, polyTrim(poly2).unbox, elemEq)
  };

  public func polyAdd(poly1 : Poly, poly2 : Poly) : Poly {
    polyZipWith(poly1, poly2, elemAdd)
  };

  public func polySub(poly1 : Poly, poly2 : Poly) : Poly {
    polyAdd(poly1, poly2)
  };

  public func polyScale(alpha : Elem, poly : Poly) : Poly {
    func scale(elem : Elem) : Elem = elemMul(alpha, elem);
    { unbox = List.map<Elem, Elem>(poly.unbox, scale) }
  };

  public type Term = { coeff : Elem; order : Int };

  public func polyAddTerm(poly : Poly, term : Term) : Poly {
    let n = if (term.order <= 0) 0 else Int.abs(term.order);
    polyAdd(poly, polyPadRight(n, polyNew([term.coeff.unbox])))
  };

  public func polyMulTerm(poly : Poly, term : Term) : Poly {
    let n = if (term.order <= 0) 0 else Int.abs(term.order);
    polyScale(term.coeff, polyPadRight(n, poly))
  };

  public func polyDivMod(poly1 : Poly, poly2 : Poly) : (Poly, Poly) {
    let divisorLeadCoeff = polyLeadCoeff(poly2);
    let divisorOrder = polyOrder(poly2);
    func go(currentDividend : Poly, currentDivisor : Poly) : (Poly, Poly) {
      let currentOrder = polyOrder(currentDividend) - divisorOrder;
      if (currentOrder < 0) {
        (currentDivisor, currentDividend)
      } else {
        let currentDividendLeadCoeff = polyLeadCoeff(currentDividend);
        let currentCoeff = elemDiv(currentDividendLeadCoeff, divisorLeadCoeff);
        let currentTerm = { coeff = currentCoeff; order = currentOrder };
        let currentQuotient = polyMulTerm(poly2, currentTerm);
        let nextDividend = polySub(currentQuotient, currentDividend);
        let nextDivisor = polyAddTerm(currentDivisor, currentTerm);
        go(nextDividend, nextDivisor)
      }
    };
    go(poly1, polyNew([]))
  };

}

```

### Nat.mo

```

/**
 * Module      : NatUtil.mo
 * Copyright   : 2019 Enzo Haussecker
 * License     : Apache 2.0 with LLVM Exception
 * Maintainer  : Enzo Haussecker <enzo@dfinity.org>
 * Stability   : Experimental
 */

import Nat8 "mo:base/Nat8";
import List "mo:base/List";

module NatUtil {

  type List<T> = List.List<T>;

  public func natNot(a : Nat) : Nat {
    natMap(a, func (x) { ^ x })
  };

  public func natAnd(a : Nat, b : Nat) : Nat {
    natZipWith(a, b, func (x, y) { x & y })
  };

  public func natOr(a : Nat, b : Nat) : Nat {
    natZipWith(a, b, func (x, y) { x | y })
  };

  public func natXor(a : Nat, b : Nat) : Nat {
    natZipWith(a, b, func (x, y) { x ^ y })
  };

  public func natMap(a : Nat, f : Nat8 -> Nat8) : Nat {
    natFromBytes(List.map<Nat8, Nat8>(natToBytes(a), f))
  };

  public func natZipWith(a : Nat, b : Nat, f : (Nat8, Nat8) -> Nat8) : Nat {
    var xs = natToBytes(a);
    var ys = natToBytes(b);
    let xsLen = List.size<Nat8>(xs);
    let ysLen = List.size<Nat8>(ys);
    if (xsLen < ysLen) {
      xs := List.append<Nat8>(List.replicate<Nat8>(ysLen - xsLen, 0), xs);
    };
    if (xsLen > ysLen) {
      ys := List.append<Nat8>(List.replicate<Nat8>(xsLen - ysLen, 0), xs);
    };
    let zs = List.zipWith<Nat8, Nat8, Nat8>(xs, ys, f);
    let c = natFromBytes(zs);
    c
  };

  public func natToBytes(n : Nat) : List<Nat8> {
    var a = 0;
    var b = n;
    var bytes = List.nil<Nat8>();
    var test = true;
    while test {
      a := b % 256;
      b := b / 256;
      bytes := List.push<Nat8>(Nat8.fromNat(a), bytes);
      test := b > 0;
    };
    bytes
  };

  public func natFromBytes(bytes : List<Nat8>) : Nat {
    var n = 0;
    var i = 0;
    List.foldRight<Nat8, ()>(bytes, (), func (byte, _) {
      n += Nat8.toNat(byte) * 256 ** i;
      i += 1;
    });
    n
  };

  public func natToBits(n : Nat) : List<Bool> {
    var a = 0;
    var b = n;
    var bits = List.nil<Bool>();
    var test = true;
    while test {
      a := b % 2;
      b := b / 2;
      bits := List.push<Bool>(a == 1, bits);
      test := b > 0;
    };
    bits
  };

  public func natFromBits(bits : List<Bool>) : Nat {
    var n = 0;
    var i = 0;
    List.foldRight<Bool, ()>(bits, (), func (test, _) {
      if test { n += 2 ** i };
      i += 1;
    });
    n
  };

}

```