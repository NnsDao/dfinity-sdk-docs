---
sidebar_position: 4
---

# 管理项目

你可以通过修改每个项目的dfx.json配置文件来修改单个项目的一些关键设置。你可以使用dfx config命令以编程方式改变这些设置，或者直接手动编辑dfx.json文件。

### 如何改变源代码目录

在你使用dfx build命令为你的项目编译源代码之前，你可能想检查一下存储程序源代码的默认位置。默认情况下，你用来创建新项目的名称是一个数据智能合约罐（canister_name）和一个资产罐（canister_name_assets）所使用的名称，程序源代码预计会在src/canister_name目录下。同样，前端源代码的默认位置是在src/canister_name_assets/src目录下，前端输出位于dist/canister_name_assets目录下。

然而，根据你的应用程序的复杂性和结构，你可能想修改程序源代码、前端源代码或前端输出的默认位置。

例如，对于一个简单的程序，你可能想取消一个目录级别，将源代码放在src目录下。

  `"main"."src/main.mo"`,


对于更复杂的程序，你可能想使用一个多层目录结构:

```
"canisters": {
  "profiles": {
    "main": "src/profiles/utils/main.mo"
  },
  "events": {
    "main": "src/events/calendar/main.mo"
  },
  "media": {
    "main": "src/events/reports/main.mo"
  }
}
```


:::note 提示

如果你修改了源代码目录的默认设置，要确保dfx.json配置文件中的设置与文件系统中的目录位置相匹配。

:::

### 如何改变主程序的文件名

在你使用dfx build命令编译项目的源代码之前，你应该验证你的程序源代码所使用的位置和文件名。

例如，如果你想为阶乘程序构建一个智能合约罐，而该程序的源代码位于 `src/math/factorial.mo` 中，你应该确定你在配置文件的罐子部分为主程序设置指定了正确的路径。

比如说:`"main": "src/math/factorial.mo"`,


请记住，改变程序文件名的配置设置只会影响dfx构建命令寻找源代码的位置来进行编译。在配置文件中进行修改并不会重命名文件系统中的任何文件或目录。如果你改变了主程序文件的路径或文件本身的名称，请确保同时改变了项目目录中的名称和位置。

### 如何改变为应用程序前端服务的位置

你可以通过修改dfx.json配置文件中的本地网络设置来改变为应用程序前端服务的默认主机名和端口号:

例如，你可以通过修改bind设置来改变本地网络的IP地址:

```
"networks": {
  "local": {
    "bind": "192.168.47.1:8000",
    "type": "ephemeral"
  }
}
```