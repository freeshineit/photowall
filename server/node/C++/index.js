const addon = require('../../../build/Release/addon');

// console.log(addon.hello());
// console.log('This should be eight:', addon.add(3));

addon((msg) => {
  console.log(msg);
// 打印: 'hello world'
});
