// as:将输入的变量重命名。重命名后，只能用重命名的名字。
// lastName, lastName as last ===写成这样的话，能使用 lastName和last
// lastName as last ===写成这样的话，只能使用 last
import { firstName, lastName, lastName as last, year, multiply, multi } from './export'

console.log('firstName:', firstName)
console.log('lastName', lastName)
console.log('last:', last)
console.log('year:', year)
console.log('multiply:', multiply)
console.log('multi:', multi)
