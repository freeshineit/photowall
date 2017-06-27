const path = require('path');
const util = require('util');
//全局变量


// Buffer
// 用于处理二进制数据
console.log(Buffer.from([1,2,3,4]));

// __dirname
// 当前模块的目录名,等同于 __filename 的 path.dirname()。
console.log(__dirname);

// __filename
// 当前模块的文件名。 这是当前模块文件的解析后的绝对路径。
console.log(__filename);
console.log(path.dirname(__filename));

//clearImmediate(immediateObject)

//clearInterval(intervalObject)


//clearTimeout(timeoutObject)

//console  打印
