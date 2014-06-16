'use strict';

var messages = {
  response: {
    SUCCESS: "The transaction is successful",
    _3DS_AUTH_FAILED: "3D Secure password entered by customer is incorrect",
    _3DS_AUTH_UNSUPPORTED: "The card issuing bank is not enabled for 3D Secure authentication",
    ACQUIRER_TECHNICAL_ERROR: "There was a technical error at the bank's end",
    ADDRESS_VERIFICATION_FAILED: "The card billing address is incorrect",
    BANK_RESPONSE_DELAYED: "There was a delay in receiving the bank's response",
    BANK_UNAVAILABLE: "The bank for processing this payment request is currently unavailable",
    BIN_BLOCKED_BY_ACQUIRER: "The card number series is blocked by the bank",
    CANCELLED_BY_USER: "Transaction has been cancelled by user",
    CARD_EXPIRED: "The card is either inactive or expired",
    CARD_EXPIRY_DATE_INVALID: "The card expiry date entered by user is not valid",
    CARD_NOT_ENROLLED: "The card is not enrolled for 3D Secure authentication",
    CARD_NUMBER_INVALID: "The card number is incorrect",
    COUNTRY_NOT_SUPPORTED: "Cards issued in the given country are currently not supported by PayZippy for the merchant",
    CVV_INCORRECT: "The CVV number is incorrect",
    CVV_MISSING: "The CVV number is missing",
    DECLINED_BY_ACQUIRER: "Transaction has been declined by bank",
    DECLINED_BY_ISSUER: "Transaction has been declined by the card issuing bank",
    DECLINED_BY_PAYZIPPY: "Transaction has been declined by PayZippy risk management system",
    DECLINED_BY_RISK: "Transaction amount exceeds the risk limits defined by the bank for this card",
    DUPLICATE_TXN_REQUEST: "Merchant has sent a duplicate transaction id",
    INSUFFICIENT_FUNDS: "There is insufficient balance in the customer's account",
    INVALID_PARAM_FORMAT: "Invalid format received for param(s) - (comma separated list of param & value pairs)",
    INVALID_PARAM_VALUE: "Invalid value received for param(s) - (comma separated list of param & value pairs)",
    INVALID_USER_INPUT: "Invalid input received from user for (comma separated list of params)",
    ISSUER_TECHNICAL_ERROR: "There was a technical error at the card issuing bank",
    MANDATORY_PARAM_MISSING: "Mandatory param(s) is/are missing - (comma separated list of missing params)",
    MERCHANT_AUTH_FAILED: "PayZippy was unable to authenticate the request due to hash mismatch",
    MID_NOT_ACTIVE: "The MID is not active. Please contact merchant.care@payzippy.com",
    MID_NOT_FOUND: "The MID sent in payment request is incorrect",
    NETBANKING_LIMIT_EXCEEDED: "Transaction amount exceeds the daily net banking limit for this account",
    NETBANKING_NOT_ENABLED: "Net banking facility is currently not enabled for this account",
    PAYZIPPY_TECHNICAL_ERROR: "There was a technical error at PayZippy's end",
    USER_REFRESH_COUNT_EXCEEDED: "The user refreshed the payment page too many times",
    USER_SESSION_TIMED_OUT: "Transaction was not processed due to prolonged user inactivity"
  },

  refund: {
    SUCCESS: "Your refund request has been successfully acknowledged by the bank.",
    DUPLICATE_REFUND_REQUEST: "Refund for this transaction has already been initiated",
    EXCESS_REFUND_AMOUNT: "The refund amount exceeds the maximum refundable amount allowed for this transaction.",
    INSUFFICIENT_BALANCE: "Merchant doesn't have sufficient outstanding balance in nodal account to pay for the refund. Merchant needs to transfer funds to PayZippy to enable refunds.",
    MULTIPLE_REFUNDS_UNSUPORTED: "Multiple refunds are not supported for this transaction.",
    PARTIAL_REFUNDS_UNSUPPORTED: "Partial refunds are not supported for this transaction. Merchant should initiate the refund for full transaction amount.",
    PAYZIPPY_TECHNICAL_ERROR: "Refund could not be processed due to a technical error at PayZippy's end.",
    ACQUIRER_TECHNICAL_ERROR: "Refund could not be processed due to a technical error at the bank's end.",
    REFUND_NOT_SUPPORTED: "Refunds are not supported for this transaction.",
    REFUND_REQUEST_ACCEPTED: "Your refund request has been successfully accepted by us.",
    REFUND_REQUEST_SENT: "Your refund request has been successfully sent to the bank.",
    REFUND_WINDOW_EXPIRED: "Refund on this transaction cannot be initiated beyond X days from sale transaction date.",
    REFUNDED: "Refund amount has been credited into your customer's card/bank account.",
    SALE_TRANSACTION_UNSUCCESSFUL: "Refund cannot be processed because the sale transaction is unsuccessful.",
    SIMILAR_PREVIOUS_PARTIAL_REFUND_DETECTED: "We have detected previous partial refund of the same amount a short while back.Please try again after sometime.",
    TXNID_NOT_FOUND: "No matching sale transaction found for the given sale transaction Id."
  },

  status: {

  }
};

module.exports = messages;
