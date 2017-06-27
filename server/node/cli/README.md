### cli 命令行选项

> **-v , --version**

打印 node 的版本号

> **-h , --help**

打印 node 的命令行选项

> **-e , --eval "script"**

把跟随的参数作为 JavaScript 来执行。 在 REPL 中预定义的模块也可以在 script 中使用。

>  **-p , --print "script"**

与 -e 相同，但会打印结果

> **-c , --check**

在不执行的情况下，对脚本进行语法检查

> **-i , --interactive**

打开 REPL，即使 stdin 看起来不像终端

> **--no-deprecation**

静默废弃的警告

> **--pending-deprecation**   

v8.0.0

Emit pending deprecation warnings

> **--no-warnings**

静默一切进程警告（包括废弃警告)

> **--napi-modules**

v8.0.0

Enable loading native modules compiled with the ABI-stable Node.js API (N-API) (load N-API modules)

> **--redirect-warnings=file**

v8.0.0

write warnings to file instead of stderr

> **--zero-fill-buffers**

自动用 0 填充所有新分配的 Buffer 和 SlowBuffer 实例

> **--prof-process**

处理 v8 分析器的输出，通过使用 v8 选项 --prof 生成

> **--v8-options**

打印 v8 命令行选项

> **--tls-cipher-list=list**

指定备用的默认 TLS 加密列表。 （需要 Node.js 被构建为支持加密。（默认））

> --openssl-config=file

启动时加载 OpenSSL 配置文件

> **--use-bundled-ca**

use bundled CA store (default)

> **--use-openssl-ca**          

use OpenSSL's default CA store


#### 环境变量

> NODE_DEBUG=module[,…]

以 ',' 分隔的应该打印调试信息的核心模块列表

> NODE_DISABLE_COLORS

当设为 1 时，不会在 REPL 中使用颜色

NODE_EXTRA_CA_CERTS

> NODE_ICU_DATA

ICU（Intl 对象）数据的数据路径。 当使用 small-icu编译时，扩展链接的数据。

> NODE_NO_WARNINGS

设置为1时，进程警告将保持沉默

> NODE_OPTIONS

v8.0.0

set CLI options in the environment

> NODE_PATH=path[:…]

以 ':' 分隔的有模块搜索路径作前缀的目录列表。

注意，在 Windows 中，列表是用 ';' 分隔的

> NODE_REPL_HISTORY= file

用于存储持久性的 REPL 历史记录的文件的路径。 默认路径是 ~/.node_repl_history，可被该变量覆盖。 将值设为空字符串（"" 或 " "）会禁用持久性的 REPL 历史记录

> NODE_REDIRECT_WARNINGS = file

v8.0.0

write warnings to path instead of stderr

> OPENSSL_CONF = file

v7.7.0

load OpenSSL configuration from file
