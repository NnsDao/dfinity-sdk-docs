---
sidebar_position: 9
---

#  Rust学习--Cargo环境变量

### 概述
Cargo设置和读取许多环境变量，这些环境变量在代码中可以检测或覆盖的。

### Environment Variables Read For Cargo
可以覆盖以下环境变量以更改 Cargo 在系统上的行为。

CARGO_HOME
Cargo维护着注册表索引和从git checkouts 的crate的本地缓存。默认情况下，它们存储在$HOME/.cargo下（Windows 上为 %USERPROFILE%\.cargo），但CARGO_HOME变量会覆盖此目录的位置。一旦 crate 被缓存，clean 命令不会将其删除。

CARGO_TARGET_DIR
放置所有生成的文件的位置，其相对于当前工作目录。

RUSTC
指定Cargo 使用的编译器。默认为rustc。

RUSTFLAGS
要传递给 Cargo 执行的所有编译器调用的标志列表，标志以空格分隔。与cargo rustc 相比，这对于将标志传递给所有编译器实例很有用。

RUSTC_WRAPPER
Cargo 不是简单地运行 rustc，而是执行这个指定的包装器，将 rustc作为其命令行第一个参数传递。 用于设置构建缓存工具，例如 sccache。

RUSTC_WORKSPACE_WRAPPER
Cargo 不是简单地运行 rustc，而是只为工作区成员执行这个指定的包装器，将 rustc作为其命令行第一个参数传递。 它影响文件名哈希，以便包装器产生的文件被单独缓存。

RUSTDOC
Cargo 将执行此指定的 rustdoc 实例，而不是运行 rustdoc。

RUSTDOCFLAGS
要传递给 Cargo 执行的所有 rustdoc 调用标志列表，标志以空格分隔。与cargo rustdoc 相比，这对于将标志传递给所有 rustdoc 实例很有用。

CARGO_INCREMENTAL
如果设置为 1，则 Cargo 将强制为当前编译启用增量编译，设置为 0 时将强制禁用它。如果此环境变量不存在，则将使用cargo的默认值。

CARGO_CACHE_RUSTC_INFO
如果设置为 0，则 Cargo 不会尝试缓存编译器版本信息。

CARGO_NAME
用于cargo new的author name。

CARGO_EMAIL
用于cargo new的author email。

HTTPS_PROXY
要使用的 HTTP 代理。https_proxy 或 http_proxy的环境变量同样有效。

HTTP_TIMEOUT
HTTP 超时（以秒为单位）。

TERM
如果这设置为dumb，它会禁用进度条。

BROWSER
指定执行cargo doc's' --open命令时打开的浏览器。

RUSTFMT
执行cargo fmt命令时将执行这个指定的 rustfmt 实例，而不是原来的rustfmt。

### Environment Variables Read For Configuration

Cargo 读取以下环境变量覆盖对应配置值：

+ CARGO_ALIAS_name：Command alies, see ali.
+ CARGO_BUILD_JOBS：Number of parallel jobs, see build.jobs.
+ CARGO_BUILD_RUSTC：The rustc executable, see build.rustc.
+ CARGO_BUILD_RUSTC_WRAPPER：The rustc wrapper, see build.rustc-wrapper.
+ CARGO_BUILD_RUSTC_WORKSPACE_WRAPPER：The rustc wrapper for workspace members, see build.rustc-workspace-wrapper.
+ CARGO_BUILD_RUSTDOC：The rustdoc executable, see build.rustdoc.
+ CARGO_BUILD_TARGET：The default target platform, see build.target.
+ CARGO_BUILD_TARGET_DIR：The default output directory, see build.target-dir.
+ CARGO_BUILD_RUSTFLAGS：Extra rustc flags, see build.rustflags.
+ CARGO_BUILD_RUSTDOCFLAGS：Extra rustdoc flags, see build.rustdocflags.
+ CARGO_BUILD_INCREMENTAL：Incremental compilation, see build.incremental.
+ CARGO_BUILD_DEP_INFO_BASEDIR：Dep-info relative directory, see build.dep-info-basedir.
+ CARGO_BUILD_PIPELINING：Whether or not to use rustc pipelining, see build.pipelining.
+ CARGO_CARGO_NEW_NAME：The author name to use with cargo new, see cargo-new.name.
+ CARGO_CARGO_NEW_EMAIL：The author email to use with cargo new, see cargo-new.email.
+ CARGO_CARGO_NEW_VCS：The default source control system with cargo new, see cargo-new.vcs.
+ CARGO_HTTP_DEBUG：Enables HTTP debugging, see http.debug.
+ CARGO_HTTP_PROXY：Enables HTTP proxy, see http.proxy.
+ CARGO_HTTP_TIMEOUT：The HTTP timeout, see http.timeout.
+ CARGO_HTTP_CAINFO：The TLS certificate Certificate Authority file, see http.cainfo.
+ CARGO_HTTP_CHECK_REVOKE：Disables TLS certificate revocation checks, see http.check-revoke.
+ CARGO_HTTP_SSL_VERSION：The TLS version to use, see http.ssl-version.
+ CARGO_HTTP_LOW_SPEED_LIMIT：The HTTP low-speed limit, see http.low-speed-limit.
+ CARGO_HTTP_MULTIPLEXING：Whether HTTP/2 multiplexing is used, see http.multiplexing.
+ CARGO_HTTP_USER_AGENT：The HTTP user-agent header, see http.user-agent.
+ CARGO_INSTALL_ROOT：The default directory for cargo install, see install.root.
+ CARGO_NET_RETRY：Number of times to retry network errors, see net.retry.
+ CARGO_NET_GIT_FETCH_WITH_CLI：Enables the use of the git executable to fetch, see net.git-fetch-with-cli.
+ CARGO_NET_OFFLINE：Offline mode, see net.offline.
+ CARGO_PROFILE_name_BUILD_OVERRIDE_key：Override build script profile, see profile.name.build-override.
+ CARGO_PROFILE_name_CODEGEN_UNITS：Set code generation units, see profile.name.codegen-units.
+ CARGO_PROFILE_name_DEBUG：What kind of debug info to include, see profile.name.debug.
+ CARGO_PROFILE_name_DEBUG_ASSERTIONS：Enable/disable debug assertions, see profile.name.debug-assertions.
+ CARGO_PROFILE_name_INCREMENTAL：Enable/disable incremental compilation, see profile.name.incremental.
+ CARGO_PROFILE_name_LTO：Link-time optimization, see profile.name.lto.
+ CARGO_PROFILE_name_OVERFLOW_CHECKS：Enable/disable overflow checks, see profile.name.overflow-checks.
+ CARGO_PROFILE_name_OPT_LEVEL：Set the optimization level, see profile.name.opt-level.
+ CARGO_PROFILE_name_PANIC：The panic strategy to use, see profile.name.panic.
+ CARGO_PROFILE_name_RPATH：The rpath linking option, see profile.name.rpath.
+ CARGO_REGISTRIES_name_INDEX：URL of a registry index, see registries.name.index.
+ CARGO_REGISTRIES_name_TOKEN：Authentication token of a registry, see registries.name.token.
+ CARGO_REGISTRY_DEFAULT：Default registry for the --registry flag, see registry.default.
+ CARGO_REGISTRY_TOKEN：Authentication token for crates.io, see registry.token.
+ CARGO_TARGET_triple_LINKER：The linker to use, see target.triple.linker.
+ CARGO_TARGET_triple_RUNNER：The executable runner, see target.triple.runner.
+ CARGO_TARGET_triple_RUSTFLAGS：Extra rustc flags for a target, see target.triple.rustflags.
+ CARGO_TERM_VERBOSE：The default terminal verbosity, see term.verbose.
+ CARGO_TERM_COLOR：The default color mode, see term.color.
+ CARGO_TERM_PROGRESS_WHEN：The default progress bar showing mode, see term.progress.when.
+ CARGO_TERM_PROGRESS_WIDTH：The default progress bar width, see term.progress.width.

`Environment Variables Set For Crate`
Cargo 在编译时将给crate暴露一些环境变量。可以使用以下方式在 Rust 程序中获取这些变量的值：
`let version = env!("CARGO_PKG_VERSION");`

以下是Cargo编译时会设置的环境变量：
+ CARGO：执行构建的cargo二进制文件的路径。
+ CARGO_MANIFEST_DIR：包含包的cargo.toml的目录。
+ CARGO_PKG_VERSION：包的完整版本号。
+ CARGO_PKG_VERSION_MAJOR：包的主版本号。
+ CARGO_PKG_VERSION_MINOR：包的次版本号。
+ CARGO_PKG_VERSION_PATCH：包的补丁版本号。
+ CARGO_PKG_VERSION_PRE：包的预发布版本。
+ CARGO_PKG_AUTHORS：cargo.toml中设置的作者列表，以冒号分隔。
+ CARGO_PKG_NAME：包名。
+ CARGO_PKG_DESCRIPTION：cargo.toml中设置的包描述。
+ CARGO_PKG_HOMEPAGE：cargo.toml中设置的包主页。
+ CARGO_PKG_REPOSITORY：cargo.toml中设置的包仓库。
+ CARGO_PKG_LICENSE：cargo.toml中设置的包许可。
+ CARGO_PKG_LICENSE_FILE：cargo.toml中设置的包许可文件。
+ CARGO_CRATE_NAME：当前正在编译的 crate 的名称。
+ CARGO_BIN_NAME：当前正在编译的二进制文件的名称。名称不包含文件扩展名，如".exe"。
+ OUT_DIR：如果包有构建脚本，则将其设置为构建脚本的输出文件夹。
+ CARGO_BIN_EXE_name：二进制目标可执行文件的绝对路径。这仅在构建集成测试或基准测试时设置。
+ CARGO_PRIMARY_PACKAGE：如果正在构建的包是主包，则此环境变量有值。构建依赖项时不会设置此环境变量。
+ PATH：动态链接库路径，仅windows有效。
+ LD_LIBRARY_PATH：动态链接库路径，仅unix有效。
+ DYLD_FALLBACK_LIBRARY_PATH：动态链接库路径，仅macos有效。

### Environment Variables Set For Build Script
Cargo 在构建脚本运行时会设置一些环境变量。可以使用以下方式在构建脚本运行时获取这些变量的值：
```
use std::env;
let out_dir = env::var("OUT_DIR").unwrap();
```

以下是Cargo构建脚本运行时会设置的环境变量：
+ CARGO：执行构建的cargo二进制文件的路径。
+ CARGO_MANIFEST_DIR：包含正在构建的包的cargo.toml的目录（包含构建脚本的包）。
+ CARGO_MANIFEST_LINKS：cargo.toml链接值。
+ CARGO_MAKEFLAGS：包含 Cargo 的作业服务器实现并行化子流程所需的参数。
+ CARGO_FEATURE_name：对于正在构建的包的激活特性，其中 name 是大写的功能名称，并将 - 转换为 _。
+ CARGO_CFG_cfg：对于正在构建的包的配置选项，此环境变量将包含配置的值，其中 cfg 是大写的配置名称，并将 - 转换为 _。
+ OUT_DIR：应放置所有输出的文件夹。
+ TARGET：正在编译的目标三元组。
+ HOST：Rust 编译器的主机三元组。
+ NUM_JOBS：指定的顶层并行度。
+ OPT_LEVEL, DEBUG：当前正在构建的配置文件的相应变量的值。
+ PROFILE：当前使用的profile，可以时debug或release。
+ RUSTC, RUSTDOC：Cargo 决定使用的编译器和文档生成器，传递给构建脚本，以便它也可以使用它。
+ RUSTC_LINKER：Cargo 已解析用于当前目标的链接器二进制文件的路径。

### Environment Variables Sets For 3rd Party Subcommands

+ Cargo 将以下环境变量暴露给第三方子命令：
    + CARGO：执行构建的cargo二进制文件的路径。


### Notice 

部分标签闭合去掉了尖括号，React中mdx语法无法编译。

作者 : machenjie

Github地址:[machenjie](https://github.com/machenjie/dfinity-study)