// 方法1：
// export let firstName = 'jeff'
// export let lastName = 'chen'
// export let year = 1984
// export function multiply(x, y) {
//     return x * y
// }

// 方法2：
let firstName = 'jeff'
let lastName = 'chen'
let year = 1984

function multiply(x, y) {
    return x * y
}

// as 用来重命名，重命名后，可以用不同的名字输出两次。
export { firstName, lastName, year, multiply as multi }
