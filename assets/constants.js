'use strict';


module.exports = {

  request: {
    params: {
      // Mandatory Parameters For Making a charge request
      'merchant_id': {type: 'string', maxLength: 32},
      'buyer_email_address': {mandatory: true, type:'string', maxLength: 100},
      'merchant_transaction_id': {mandatory: true, type:'string', maxLength: 100},
      'transaction_type':{type: 'string', maxLength: 20, values: ['SALE','REFUND']},
      'transaction_amount': {mandatory: true, type:'number'},
      'payment_method': {type: 'string', values: ['CREDIT','DEBIT','EMI','NET','PAYZIPPY','CARD_CAPTURE']},
      'bank_name': {type: 'string'},
      'emi_months': {type: 'number', values:[3,6,9,12]},
      'currency': {type: 'string', values:['INR']},
      'ui_mode': {mandatory: true, type:'string',values:['REDIRECT','IFRAME']},      
      'hash_method': {type:'string',values:['MD5','SHA256']},
      'merchant_key_id': {type: 'string', maxLength:20},
      'buyer_phone_no': {mandatory: true, type:'string', maxLength: 50},
      'product_info1': {mandatory: true, type:'string', maxLength: 100},
      'product_info2': {mandatory: true, type:'string', maxLength: 100},
      'product_info3': {mandatory: true, type:'string', maxLength:100},

      // Optional Parameters
      'buyer_unique_id': {type: 'string', maxLength: 100},
      'shipping_address': {type: 'string', maxLength: 100},
      'shipping_city': {type: 'string', maxLength: 50},
      'shipping_state': {type: 'string', maxLength: 50},
      'shipping_zip': {type: 'string', maxLength: 50},
      'shipping_country': {type: 'string', maxLength: 50},
      'source': {type: 'string', maxLength: 20},
      'callback_url': {type: 'string', maxLength: 256},
      'billing_name': {type: 'string', maxLength: 255},
      'billing_address': {type: 'string', maxLength: 100},
      'billing_city': {type: 'string', maxLength: 50},
      'billing_state': {type: 'string', maxLength: 50},
      'billing_zip': {type: 'string', maxLength: 50},
      'billing_country': {type: 'string', maxLength: 50},
      'is_user_logged_in': {type: 'boolean'},
      'item_total': {type: 'string', maxLength: 100},
      'item_vertical': {type: 'string', maxLength: 100},
      'timegmt': {type: 'string', maxLength: 13},
      'udf1': {type: 'string', maxLength: 100},
      'udf2': {type: 'string', maxLength: 100},
      'udf3': {type: 'string', maxLength: 100},
      'udf4': {type: 'string', maxLength: 100},
      'udf5': {type: 'string', maxLength: 100},

      // Card Capture Optional Parameters
      'name_on_card': {type: 'string', maxLength: 100},
      'card_number': {type: 'string'},
      'cvv': {type: 'string'},
      'expiry_month': {type: 'number', moreThan: 1, lessThan: 12},
      'expiry_year': {expiry_year: 'number'}
    }
  },

  refund: {
    params: {
      'merchant_id': {type: 'string', maxLength: 32},
      'merchant_transaction_id': {type: 'string', maxLength: 100},
      'payzippy_sale_transaction_id': {type: 'string', maxLength: 20},
      'refund_amount': {mandatory: true, type: 'number'},
      'hash_method': {type:'string',values:['MD5','SHA256']},
      'merchant_key_id': {type: 'string', maxLength: 20},
      'refund_reason': {type: 'string', maxLength: 512},
      'refunded_by': {type: 'string', maxLength: 100},
      'udf1': {type: 'string', maxLength: 100},
      'udf2': {type: 'string', maxLength: 100},
      'udf3': {type: 'string', maxLength: 100},
      'udf4': {type: 'string', maxLength: 100},
      'udf5': {type: 'string', maxLength: 100},
      'timegmt': {type: 'string', maxLength: 13}
    }
  },

  status: {
    params: {
      'merchant_id': {type: 'string', maxLength: 32},
      'merchant_key_id': {type: 'string', maxLength: 20},
      'merchant_transaction_id': {mandatory: true, type:'string', maxLength: 100},
      'hash_method': {type:'string',values:['MD5','SHA256']},
      'payzippy_transaction_id': {type: 'string', maxLength: 20},
      'transaction_type':{type: 'string', maxLength: 20, values: ['SALE','REFUND']}
    }
  }

};

