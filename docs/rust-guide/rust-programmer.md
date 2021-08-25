---
sidebar_position: 3
---

# Rust学习--语言语法

**词汇结构**

## **Whitespace**
whitespace是仅包含具有 Pattern\_White\_Space Unicode 属性字符的任何非空字符串，即：

- U+0009 (horizontal tab, '\t')
- U+000A (line feed, '\n')
- U+000B (vertical tab)
- U+000C (form feed)
- U+000D (carriage return, '\r')
- U+0020 (space, ' ')
- U+0085 (next line)
- U+200E (left-to-right mark)
- U+200F (right-to-left mark)
- U+2028 (line separator)
- U+2029 (paragraph separator)

Rust 是一种“自由形式”语言，这意味着所有形式的whitespace仅用于分隔语法中的token，并没有语义意义。因此whitespace可以是任意的形式，而不会使Rust程序产生不同的含义。

## **Comments**
### **非文档注释**
Rust 代码中的注释遵循行 (//) 和块 (/\* ... \*/) 注释形式的一般 C++ 样式。支持嵌套块注释。

非文档注释被解释为whitespace



-------

更多请查看PDF文档或word文档：

[Rust学习--语言语法PDF](./rust-learn-programmer.pdf)


作者 : machenjie

Github地址:[machenjie](https://github.com/machenjie/dfinity-study)