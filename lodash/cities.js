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
