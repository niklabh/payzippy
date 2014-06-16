'use strict';

var payzippy = require('./payzippy');

if (!process.argv[2] || !process.argv[3]) {
  return console.log("[USAGE] node status.js <TXN_ID> <TXN_AMOUNT>");
}

var data = {
  'buyer_email_address':'niklabh811@gmail.com',
  'merchant_transaction_id': process.argv[2],
  'transaction_amount': Number(process.argv[3]),
  'ui_mode':'REDIRECT',
  'buyer_phone_no':'9999999999',
  'product_info1':'Apple iPhone 4S',
  'product_info2':'Black, 8 GB',
  'product_info3':'10% off',
  'buyer_unique_id': Number(Date.now()) + '',
};

payzippy.charge(data, console.log);
