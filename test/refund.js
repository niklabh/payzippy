'use strict';

var payzippy = require('./payzippy');

if (!process.argv[2] || !process.argv[3]) {
  return console.log("[USAGE] node refund.js <TXN_ID> <REFUND_AMOUNT>");
}

var data = {
  'merchant_transaction_id': process.argv[2],
  'refund_amount': Number(process.argv[3]),
  'refund_reason': 'Returned'
};

console.log(data);

payzippy.refund(data, console.log);
