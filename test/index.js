'use strict';

var conf = require('../myconf');
var payzippy = require('../')(conf);

var data = {
  'buyer_email_address':'niklabh811@gmail.com',
  'merchant_transaction_id':Number(Date.now()) + '',
  'transaction_amount':32,
  'ui_mode':'REDIRECT',
  'hash_method':'SHA256',
  'buyer_phone_no':'9999999999',
  'product_info1':'Apple iPhone 4S',
  'product_info2':'Black, 8 GB',
  'product_info3':'10% off',
};

payzippy.charge(data, console.log);
