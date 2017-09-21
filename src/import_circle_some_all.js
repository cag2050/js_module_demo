// 逐一加载
import { area, circumference } from './export_circle'
// 整体加载
import * as circle from './export_circle'

console.log('圆面积 = ' + area(5))
console.log('圆周长 = ' + circumference(5))

console.log('圆面积 = ' + circle.area(5))
console.log('圆周长 = ' + circle.circumference(5))


