var gateway = require('./gateway');

module.exports = function (config) {
	return gateway.configure(config);
};
