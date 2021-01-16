const _ = require('lodash');

function multiple(a,b) {
  return a*b;
}

function divide(a,b) {
  return a/b;
}

// function double(num) {
//   return multiple(num, 2)
// }

// function partial(fn, ...fixed) {
//   return function(...args) {
//     return fn.apply(this, fixed.concat(args))
//   }
// }

// function partial(fn) {
//   const fixed = _.tail(_.toArray(arguments))
//   return function(...args) {
//     return fn.apply(this, _.concat(fixed, arguments))
//   }
// }

const double = _.partial(multiple, 2)

// const half = _.partialRight(divide, 2)
const half = _.partial(divide, _, 2)

// console.log(half(4))
const curiedDivide = _.curry(divide);
// console.log(curiedDivide(10)(2))

const notFlatArray = [1, 2, 3, [4, 5]];
// console.log(_.sum(notFlatArray));

const sumFlat = _.flow([_.concat, _.flattenDeep, _.sum])

console.log(sumFlat(notFlatArray));
