## 项目说明

### 1. 技术栈

- 脚本：TypeScript
- 前端框架：React
- 路由管理：React-router-dom
- 用户界面：Antd
- 全局状态管理：Redux
- 异步状态更新：redux-saga
- 路由状态同步：connected-react-router
- 网络请求：Axios
- 调试工具：redux-devtools-extension
- 脚本：Node.js
- 数据库：Mongodb
- 数据库可视化：Robo 3T -> [下载地址](https://robomongo.org/download)

#### 2.1 安装 mongodb 数据库 (Mac)

1. 安装 [homebrew](https://brew.sh/index_zh-cn)

   Homebrew 是mac系统中的软件包管理器

   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
   ```

2. 添加 mongodb 仓库源

   ```bash
   brew tap mongodb/brew
   ```

3. 安装 mongodb

   安装前确保系统已经安装 xcode 命令行编译开发工具

   ```bash
   xcode-select --install 
   ```

   ```bash
   brew install mongodb-community
   ```

4. 启动 mongodb

   ```bash
   brew services run mongodb-community
   ```

5. 停止 mongodb

   ```bash
   brew services stop mongodb-community
   ```

6. 文件位置

  - 数据库配置文件：/usr/local/etc/mongod.conf
  - 数据库文件默认存放位置：/usr/local/var/mongodb
  - 日志存放位置：/usr/local/var/log/mongodb/mongo.log

#### 2.4 启动服务器端应用程序

- Mac 用户将服务器端应用程序文件夹拖拽到终端中，windows 用户打开服务器端应用程序文件夹，按住 shift 同时单击鼠标右键，选择在此处打开命令行工具 (cmd 或者 powershell)
- 执行 `npm install` 命令安装程序依赖文件
- 执行 `npm start` 命令启动服务器端应用程序，服务器端应用程序默认监听 `80` 端口