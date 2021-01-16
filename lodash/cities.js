const _ = require('lodash');
const cities = require('./data.json');

// const output = _(cities)
//   .filter(c => c.lat > 10)
//   .countBy(c => c.country)
//   .toPairs()
//   .map(c => _.zipObject(['country', 'cities'], c))
//   .orderBy(c => c.cities, 'desc')
//   .take(5)
//   .value()

// console.log(output);

// =======================

const greaterThan = _.curryRight(_.gte)
const latGreaterThan = num => _.conforms({lat: greaterThan(num)})
const zip = _.curry(_.zipObject)

const out = _(cities)
.filter(latGreaterThan(30))
.countBy('country')
.toPairs()
.map(zip(['country', 'cities']))
.orderBy('cities', 'desc')
.take(6)
.value()

console.log(out)
