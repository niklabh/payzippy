'use strict';


module.exports = {

  request: {
    params: {
      'merchant_id':{},
      'merchant_key_id':{},
      'transaction_type':{},
      'currency':{},
      'callback_url': {},
      'buyer_email_address': {mandatory: true, type:'string'},
      'merchant_transaction_id': {mandatory: true, type:'string'},
      'transaction_amount': {mandatory: true, type:'number'},
      'ui_mode': {mandatory: true, type:'string',values:['REDIRECT','IFRAME']},
      'hash_method': {mandatory: true, type:'string',values:['MD5','SHA256']},
      'buyer_phone_no': {mandatory: true, type:'string'},
      'product_info1': {mandatory: true, type:'string'},
      'product_info2': {mandatory: true, type:'string'},
      'product_info3': {mandatory: true, type:'string'}
    }
  },

  refund: {
    params: []
  },

  status: {
    params: []
  }

};

