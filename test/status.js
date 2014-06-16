'use strict';

var payzippy = require('./payzippy');

if (!process.argv[2]) {
	return console.log("[USAGE] node status.js <TXN_ID>");
}

var data = {
  'merchant_transaction_id': process.argv[2],
};

payzippy.status(data, console.log);
