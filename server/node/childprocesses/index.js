const {spawn,exec} = require('child_process');
const ls = spawn('ls',['-lh','/']);

//child_process.spawn() 方法会异步地衍生子进程，且不会阻塞 Node.js 的事件循环。
//child_process.spawnSync() 函数则以同步的方式提供了同样的功能，但会阻塞事件循环，直到衍生的子进程退出或终止。

ls.stdout.on('data',(data) => {
    console.log(`stdout: ${data}`);
})

ls.stderr.on('data',(data) => {
    console.log(`stderr: ${data}`);
})
ls.on('close',(code) => {
    console.log(`子进程退出码：${code}`);
})
// 
// exec('cat *.js bad_file | wc -l', (error, stdout, stderr) => {
//   if (error) {
//     console.error(`exec error: ${error}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
//   console.log(`stderr: ${stderr}`);
// });
