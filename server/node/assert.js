//断言
const assert = require('assert');

const obj1 = {
    a:{
        b:1
    }
};
const obj2 = {
    a:{
        b:2
    }
};
const obj3 = {
    a:{
        b:1
    }
};

const obj4 = Object.create(obj1);

assert.deepEqual(obj1, obj1);
// 通过，对象与自身相等

try {
    assert.deepEqual(obj1, obj2);
} catch (e) {
    // console.log('error:',e);
} finally {

}

// 抛出 AssertionError: { a: { b: 1 } } deepEqual { a: { b: 2 } }
// b 的值不同

assert.deepEqual(obj1, obj3);
// 通过，两个对象相等

try {
    assert.deepEqual(obj1, obj4);
    // 抛出 AssertionError: { a: { b: 1 } } deepEqual {}
    // 原型会被忽略
} catch (e) {
    // console.log('error:',e);
} finally {

}


// deepstrictEqual


assert.deepEqual({a: 1}, {a: '1'});
// 通过，因为 1 == '1'

try {
    assert.deepStrictEqual({a: 1}, {a: '1'});
    // 抛出 AssertionError: { a: 1 } deepStrictEqual { a: '1' }
    // 因为 1 !== '1' 使用全等运算符
} catch (e) {
    // console.log('error:',e);
} finally {

}


// The following objects don't have own properties
const date = new Date();
const object = {};
const fakeDate = {};

Object.setPrototypeOf(fakeDate, Date.prototype);

assert.deepEqual(object, fakeDate);
// OK, doesn't check [[Prototype]]
try {
    assert.deepStrictEqual(object, fakeDate);
    // AssertionError: {} deepStrictEqual Date {}
    // Different [[Prototype]]
} catch (e) {
    // console.log('error:',e);
} finally {

}


assert.deepEqual(date, fakeDate);
// OK, doesn't check type tags
try {
    assert.deepStrictEqual(date, fakeDate);
    // AssertionError: 2017-03-11T14:25:31.849Z deepStrictEqual Date {}
    // Different type tags
} catch (e) {
    // console.log('error:',e);
} finally {

}



//assert.doesNotThrow(block[, error][, message])

// assert.doesNotThrow(
//   () => {
//     throw new TypeError('错误');
//   },
//   SyntaxError
// );
//
// assert.doesNotThrow(
//   () => {
//     throw new TypeError('错误');
//   },
//   TypeError
// );

//assert.ifError

assert.ifError(0);
// 通过
// assert.ifError(1);
// 抛出 1
// assert.ifError('error');
// 抛出 'error'
assert.ifError(new Error());
// 抛出 Error
