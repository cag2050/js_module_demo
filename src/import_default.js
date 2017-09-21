// import写法1
// 此处import可以用任意名称指向export_default.js输出的方法，这时就不需要知道原模块输出的函数名。
// 需要注意的是，这时import命令后面，不使用大括号。
// import foo from './export_default'
// foo()

// import写法2
// import foo22 from './export_default'
// foo22()

// import写法3
// import { default as foo3 } from './export_default';
// 等同于
// import foo3 from './export_default'
// foo3()

// import写法4
import foo4 from './export_default'
console.log(foo4)










