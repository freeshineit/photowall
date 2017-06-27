
//为了使 Buffer 实例的创建更可靠、更不容易出错，各种 new Buffer() 构造函数已被 废弃，并由 Buffer.from()、Buffer.alloc()、和 Buffer.allocUnsafe() 方法替代。

// Buffer.alloc(size[, fill[, encoding]]) 返回一个指定大小的被填满的 Buffer 实例。 这个方法会明显地比 Buffer.allocUnsafe(size) 慢，但可确保新创建的 Buffer 实例绝不会包含旧的和潜在的敏感数据。
// Buffer.allocUnsafe(size) 与 Buffer.allocUnsafeSlow(size) 返回一个新建的指定 size 的 Buffer，但它的内容必须被初始化，可以使用 buf.fill(0) 或完全写满。

// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10);
console.log(buf1);

const buf2 = Buffer.alloc(10, 1);
console.log(buf2);

// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10);
console.log(buf3);

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);
console.log(buf4);

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('tést');
console.log(buf5);

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');
console.log(buf6);

const buf7 = Buffer.from(buf6); //新的 buffer
console.log(buf7);

//Buffer 和 ES6迭代
const buf8 = Buffer.from([1,2,3]);

for(const b of buf8){
    console.log(b);
}
