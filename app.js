const moment = require('moment');
const moment_timezone = require('moment-timezone');

function billingCycle(startTime, numMonths) {
  const t = moment(startTime).add(numMonths, 'month');
  return t.tz('Australia/Sydney').format('MMMM Do YYYY, h:mm:ss a z');
}

const start = new Date('2017-01-31T16:45');
console.log('Billing start ' + start);
const numMonths = 12;
const dates = [...Array(numMonths).keys()].map(month => billingCycle(start, month));
console.log('Monthly billing for ' + numMonths + ' months: ' + JSON.stringify(dates, null, 2));
