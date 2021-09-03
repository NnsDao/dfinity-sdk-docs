---
sidebar_position: 5
---


# 【ICP开发】Candid数据文本表示

```
text
""
"Hello"
"Escaped characters: \n \r \t \\ \" \'"
"Unicode escapes: \u{2603} is ☃ and \u{221E} is ∞"
"Raw bytes (must be utf8): \E2\98\83 is also ☃"

blob
blob ""
blob "Hello"
blob "Escaped characters: \n \r \t \\ \" \'"
blob "Unicode escapes: \u{2603} is ☃ and \u{221E} is ∞"
blob "Raw bytes (must be utf8): \E2\98\83 is also ☃"

nat
1234
1_000_000
0xDEAD_BEEF

int
1234
-1234
+1234
1_000_000
-1_000_000
+1_000_000
0xDEAD_BEEF
-0xDEAD_BEEF
+0xDEAD_BEEF

natN/intN
100 : nat8
-100 : int8
(42 : nat64)

float32/float64
1245.678
+1245.678
-1_000_000.000_001
34e10
34E+10
34e-10
0xDEAD.BEEF
0xDEAD.BEEFP-10
0xDEAD.BEEFp+10

bool
true
false

null
null

vec t
vec {}
vec { "john@doe.com"; "john.doe@example.com" };

opt t
null
opt true
opt 8
opt null
opt opt "test"

record { n : t, … }
record {}
record { first_name = "John"; second_name = "Doe" }
record { "name with spaces" = 42; "unicode, too: ☃" = true }
record { "a"; "tuple"; null }

variant { n : t, … }
variant { ok = 42 }
variant { "unicode, too: ☃" = true }
variant { fall }

func (…) → (…)
func "w7x7r-cok77-xa".hello
func "w7x7r-cok77-xa"."☃"
func "aaaaa-aa".create_canister

service {…}
service "w7x7r-cok77-xa"
service "zwigo-aiaaa-aaaaa-qaa3a-cai"
service "aaaaa-aa"

principal
principal "w7x7r-cok77-xa"
principal "zwigo-aiaaa-aaaaa-qaa3a-cai"
principal "aaaaa-aa"

reserved
reserved

empty
没有响应的文本表示方式，因为没有值。

```

作者 : ma

Github地址:[machenjie](https://github.com/machenjie/dfinity-study)
