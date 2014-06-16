'use strict';

var debug = require('debug')('payzippy');
var crypto = require('crypto');
var request = require('request');

var assets = require('./assets');
var constants = assets.constants; 
var defaults = assets.defaults;
var messages = assets.messages;

var config = require('./config');

///////////////////// Private Functions /////////////////////////
function paramsToString(params) {
  var data = '';
  var tempKeys = Object.keys(params).sort();
  tempKeys.forEach(function (key) {
    if (typeof params[key] !=='undefined' && key !== 'hash'){
      data += (params[key] + '|');
    }
  });
  return data;
}

function generateChecksumHash(params, key) {
  var data = paramsToString(params) + key;
  console.log(data);
  var hash = crypto.createHash(params.hash_method).update(data).digest('hex');
  params.hash = hash;
  return params;
}

function validateData(data, type, cb) {
  var key, param;
  if (!data){
    return new Error("No params provided");
  }
  for(key in constants[type].params) {
    param = constants[type].params[key];
    if (param.mandatory && !data[key]) {
      return cb(new Error("Missing mandatory Parameter: " + key));
    }
    if (data[key] && param.type && typeof data[key] !== param.type){
      return cb(new Error("Parameter " + key + " must be a " + param.type));
    }
    if (data[key] && param.length && data[key].length > param.length){
      return cb(new Error("Parameter " + key + " length must be less than " + param.length));
    }
    if (data[key] && param.values && param.values.indexOf(data[key]) === -1) {
      return cb(new Error ("Parameter " + key + " value must be one of " + param.values));
    }
  }
  return cb(null);
}

function getRequestParams(data, type) {
  var params = {};
  Object.keys(constants[type].params).forEach(function(p){
    params[p] = config[p] || data[p] || defaults[type][p];
  });
  return generateChecksumHash(params, config.secret_key);
}

function verifychecksum(params, key) {
  if (!params) {
    debug('Params Missing for checksum verification');
    return false;
  }
  var data = paramsToString(params) + key;
  console.log(data);
  if (params.hash && params.hash_method) {
    var hash = crypto.createHash(params.hash_method).update(data).digest('hex');
    console.log(hash, params.hash);
    if (hash === params.hash) {
      return true;
    } else {
      debug('Checksum is wrong');
      return false;
    }
  } else {
    debug('Checksum not found');
    return false;
  }
}
///////////////////// Private Functions /////////////////////////

///////////////////// Public Functions //////////////////////////

var gateway = {

  name: 'payzippy',

  enabled: true,

  configure: function(configuration) {
    if (!configuration || !Object.keys(configuration).length) {
      throw new Error('Missing Configuration error');
    }
    Object.keys(configuration).forEach(function(c){
      config[c] = configuration[c];
    });
    
    for(var key in config) {
      if (config[key] === '') {
        throw new Error('Configuration Error: Missing mandatory Parameters: ' + key);
      }
    }

    return this;
  },

  charge: function (data, cb) {
    validateData(data, 'request', function(err){
      if (err) {
        return cb(err);
      }
      var url;
      var params = getRequestParams(data, 'request');
      url = config.endpoints.charging + '?';
      for (var key in params) {
        url += key + '=' + encodeURIComponent(params[key]) + '&';
      }
      url = url.substr(0,url.length-1);
      return cb({
        url: url
      });
    });    
  },

  response: function (req, cb) {
    if (!req.query || !req.body) {
      return cb(new Error("req is not a HTTP request Object"));
    }
    var err;    
    var res = Object.keys(req.query).length? req.query : req.body;
    debug('Received Payment Response:', res);
    if (!verifychecksum(res, config.secret_key)) {
      debug('Checksum Failed');
      err = new Error('Error: checksum failed');
      err.response = res;
      return cb(err);
    }
    return cb({response: res});
  },

  refund: function (data, cb) {
    validateData(data, 'refund', function(err){
      if (err) {
        return cb(err);
      }
      var params = getRequestParams(data, 'refund');
      var options = {
        url: config.endpoints.refund,
        query: params,
        timeout: config.timeout,
        strictSSL: config.strictSSL
      };
      debug('[Refund] Making call to pg');
      request.get(options, function (err, resp, body) {
        cb(err, body);
      });
    });
  },

  status: function (data, cb) {
    validateData(data, 'status', function(err){
      if (err) {
        return cb(err);
      }
      var params = getRequestParams(data, 'status');
      var options = {
        url: config.endpoints.status,
        query: params,
        timeout: config.timeout,
        strictSSL: config.strictSSL
      };
      debug('[Status] Making call to pg');
        request.get(options, function (err, resp, body) {
        cb(err, body);
      });
    });
  },
};

module.exports = gateway;

///////////////////// Public Functions /////////////////////////

///////////////////// TEST CODE ////////////////////////////////

(function () {
  if (require.main === module) {

  }
}());

///////////////////// TEST CODE ////////////////////////////////
