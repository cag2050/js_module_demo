// export写法1
// 导出匿名函数
export default function () {
    console.log('foo1');
}

// export写法2
// 导出非匿名函数
// foo2函数的函数名foo2，在模块外部是无效的。加载的时候，视同匿名函数加载。
// function foo2() {
//     console.log('foo2');
// }
// export default foo2

// export写法3
// 本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字。
// 所以，下面的写法是有效的。
// function foo3() {
//     console.log('foo3');
// }
// export { foo3 as default };
// 等同于
// export default foo3;

// export写法4
// 因为export default本质是将该命令后面的值，赋给default变量，所以可以直接将一个值写在export default之后。
// export default 'foo4'



// 本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字。
// 所以它后面不能跟变量声明语句。
// 正确
// export var a = 1;
// 正确
// var a = 1;
// export default a;
// 错误
// export default var a = 1;

