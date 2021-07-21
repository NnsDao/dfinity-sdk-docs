---
sidebar_position: 6
---

# 添加前端资产

+ 此节教程介绍了为你的项目建立前端用户界面的一些基本方法。例如，其中包括了:

    + 使用Candid作为基本接口来公开和测试程序罐中的功能。

    + 使用原始HTML和JavaScript来显示一个简单的HTML入口页面。

    + 使用React和编译的JavaScript来直接在页面中嵌入HTML属性和元素。

    + 使用React和TypeScript从外部文件导入CSS属性。

本节仔细研究了默认的前端模板、前端配置选项，以及使用其他框架来构建项目的用户界面。


### 如何使用默认模板

+ 正如你在教程中可能已经看到的那样，项目包括模板`index.js`和`webpack.config.js`等文件。

+ 默认情况下，该`index.js`文件显式实例化 HTTP 代理的实例。该代理为面向用户的前端和 IC 之间的交互提供了一个接口。创建代理后，该`index.js`文件会为项目`dfx.json`文件中定义的程序罐构造一个参与者。

+ 如果你查看index.js文件中的代码，你会看到它使用以下代码块执行这些步骤：

```
import { Actor, HttpAgent } from '@dfinity/agent'; //引入agent包 
import { idlFactory as hello_idl, canisterId as hello_id } from 'dfx-generated/hello'; //使用hello例子

const agent = new HttpAgent(); //启动一个代理
const hello = Actor.createActor(hello_idl, { agent, canisterId: hello_id });

```

在为项目创建代理和Actor方法之后，该index.js文件为用于与应用程序的文档对象模型 (DOM) 和 HTML 交互的 JavaScript 提供了一个占位符。

### 修改 webpack 配置

+ webpack 是一个流行的、高度可配置的模块打包服务，用于基于 JavaScript 的应用程序，新项目创建一个默认`webpack.config.js`文件，可以轻松添加特定的模块——例如react和markdown。

+ 如果你查看模板`webpack.config.js`文件中的代码，会看到它为项目`dfx.json`文件中定义的程序罐构造别名。然后，当前端作为模块导入时，别名可用于引用程序罐。

+ 你可以在以下代码块中看到这些步骤：

```

// List of all aliases for canisters. This creates the module alias for
// the `import ... from "dfx-generated/canisters/xyz"` where xyz is the name of a
// canister.
const aliases = Object.entries(dfxJson.canisters).reduce(
  (acc, [name, _value]) => {
    // Get the network name, or `local` by default.
    const networkName = process.env["DFX_NETWORK"] || "local";
    const outputRoot = path.join(
      __dirname,
      ".dfx",
      networkName,
      "canisters",
      name
    );

    return {
      ...acc,
      ["dfx-generated/" + name]: path.join(outputRoot, name + ".js"),
    };
  },
  {}
);

```

### 输入输出配置

+ 创建程序罐别名后，模板`webpack.config.js`文件会为前端生成一个 webpack 配置，并将生成的文件添加到项目目录的输出目录中。

+ 在很多情况下，你可以`webpack.config.js`按原样使用默认文件，无需任何修改，也可以添加插件、模块和其他自定义配置以满足多样化需求。你对`webpack.config.js`配置所做的具体更改很大程度上取决于你要使用框架和工具服务。

+ 例如，如果你尝试过自定义前端或添加样式表前端教程，你可能已经修改了以下部分以使用 React JavaScript：

```

    module: {
      rules: [
        { test: /\.(ts|tsx|jsx)$/, loader: "ts-loader" },
        { test: /\.css$/, use: ['style-loader','css-loader'] }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, info.frontend.entrypoint),
        filename: 'index.html',
        chunks: ['index'],
      })
    ],
  };
}

```

### 确保节点在项目中可用

+ 因为项目依赖webpack为默认前端提供框架，所以你必须已经`node.js`安装在你的开发环境中并且可以在项目目录中访问。

+ 如果你想在不使用默认 webpack 配置和程序罐别名的情况下开发你的项目，你可以assets从`dfx.json`文件中删除程序罐或使用特定程序罐名称构建你的项目。例如，你可以通过运行以下命令来选择仅构建 hello 程序，而无需前端资产：`dfx build hello`

+ 如果你使用默认的 webpack 配置并且运行dfx build失败，你应该尝试npm install在项目目录中运行然后重新运行dfx build.

+ 如果`npm install`在项目目录中运行不能解决问题，你应该检查`webpack.config.js`文件的配置是否存在语法错误。

### 在 React 框架中使用其他模块

示例存储库中的几个教程和示例项目说明了如何使用该`npm install`命令添加 React 模块。你可以使用这些模块来构建要在项目中使用的用户界面组件。例如，你可以运行以下命令来安装react-router模块：

`npm install --save react react-router-dom`


然后，你可以使用该模块构建类似于以下内容的导航组件：

```

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/myphotos">Remember</NavLink></li>
        <li><NavLink to="/myvids">Watch</NavLink></li>
        <li><NavLink to="/audio">Listen</NavLink></li>
        <li><NavLink to="/articles">Read</NavLink></li>
        <li><NavLink to="/contribute">Write</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;

```


### 使用 webpack-dev-server 实时更新开发环境代码

+ 你可以使用一些简单的快捷方式在开发环境中加快迭代速度。例如，你可以选择仅构建和部署特定程序罐，而不是项目中的所有程序罐。

+ 如果你的大部分更改都在应用程序的前端，则可以更快地进行迭代的最有效方法之一是安装和配置 webpack 开发服务器。webpack 开发服务器webpack-dev-server——提供对 webpack 资产的内存访问，使你能够进行更改并使用实时重新加载立即在浏览器中看到它们的反映。

+ 安装和配置webpack-dev-server：

创建一个新项目并切换到你的项目目录。

webpack-dev-server通过运行以下命令将 安装在项目目录中：`npm install webpack-dev-server`


`webpack.config.js`在文本编辑器中打开项目文件。

output在`webpack.config.js`文件部分之后添加你的网络主机名和端口信息。

例如，如果你使用默认主机和端口信息进行本地开发，则应将以下内容添加到`webpack.config.js`文件中：

```
devServer: {
 proxy: {
   "/api": "http://localhost:8000",
 },
},
```


保存更改并关闭`webpack.config.js`文件以继续。

`package.json`在文本编辑器中打开项目文件。

`"build": "webpack"`在该脚本部分之后添加一个逗号。

`"start": "webpack serve"`在该脚本部分中添加一个新行。

例如：

`"start": "webpack serve"`


保存更改并关闭`package.json`文件以继续。

如有必要，在本地启动 IC 服务，然后像往常一样进行部署，例如，通过运行`dfx deploy`命令。

通过运行以下命令启动 webpack 开发服务器：`npm start`


打开 Web 浏览器并使用端口 8080 导航到你的应用程序的资产程序罐。

例如：

`http://localhost:8080/?canisterId=ryjl3-tyaaa-aaaaa-aaaba-cai`

打开一个新的终端窗口或选项卡并导航到你的项目目录。

`index.js`在文本编辑器中打开项目文件并更改内容。

例如，你可以使用 JavaScript 向页面添加一个元素：`document.body.onload = addElement;`

```

document.body.onload = addElement;

function addElement () {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Test live page reloading!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
```

保存对index.js文件的更改，但保持编辑器打开以继续进行更改。

刷新浏览器或等待它自行刷新以查看修改的内容。

当你完成项目的前端工作后，你可以按键盘上的 Control-C 停止 webpack 开发服务器。