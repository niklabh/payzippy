'use strict';

// placeholder for real configuration
var api_base = 'https://www.payzippy.com/payment/api';
var api_version = '/v1';

var config = { 
  merchant_id: '',
  secret_key: '',
  merchant_key_id: '',
  callback_url: '',
  transaction_type: 'SALE',
  currency: 'INR',
  hash_method:'SHA256',
  timeout: 20*1000, // 20 sec Timeout
  strictSSL: true,
  endpoints: {
    charging: api_base + '/charging' + api_version,
    refund: api_base + '/refund' + api_version,
    status: api_base + '/query' + api_version
  }
};

module.exports = config;

