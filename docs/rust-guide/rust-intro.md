---
sidebar_position: 1
---

# Rust学习--Rust编程规范

### 常量

Rust 常量的命名规范是使用下划线分隔的大写字母单词，并且可以在数字字面值中插入下划线来提升可读性。

例如：

`const MAX_POINTS: u32 = 100_000;`

### 变量
Rust 变量的命名规范是 snake case 规范风格。所有字母都是小写并使用下划线分隔单词。

例如：
`let x_y = 5;`

### 全局变量
Rust 全局变量的命名规范是使用下划线分隔的大写字母单词，并且可以在数字字面值中插入下划线来提升可读性。

例如：
`static HELLO_WORLD: &str = "Hello, world!";`

### 函数
Rust 函数的命名规范是 snake case 规范风格。所有字母都是小写并使用下划线分隔单词。

例如：
`fn another_function()`

### 结构体
Rust 结构体的命名规范是camel case(大驼峰)规范风格。其字段的命名规范是 snake case 规范风格

例如：
```
struct User {
    username: String,
    email: String,
    sign_in_count: u64,
    active: bool,
}
```

### 枚举
Rust 枚举的命名规范是camel case(大驼峰)规范风格。其成员的命名规范是camel case(大驼峰)规范风格

例如：
```
enum Option<T> {
    Some(T),
    None,
}
```

### Trait
Rust Trait的命名规范是camel case(大驼峰)规范风格。

例子：
```
pub trait Summary {
    fn summarize(&self) -> String;
}
```

### 模块
Rust 模块的命名规范是 snake case 规范风格。所有字母都是小写并使用下划线分隔单词。

例如：
```
mod front_of_house {
    mod hosting {
        fn add_to_waitlist() {}

        fn seat_at_table() {}
    }

    mod serving {
        fn take_order() {}

        fn server_order() {}

        fn take_payment() {}
    }
}
```

### 文件
Rust 文件的命名规范是 snake case 规范风格。所有字母都是小写并使用下划线分隔单词。

### 目录
Rust 目录的命名规范是 snake case 规范风格。所有字母都是小写并使用下划线分隔单词。

