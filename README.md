# payzippy [![Build Status](https://secure.travis-ci.org/niklabh/payzippy.png?branch=master)](http://travis-ci.org/niklabh/payzippy)

Payzippy payment gateway api implementation for node

## Getting Started
Install the module with: `npm install payzippy`

```javascript
var payzippy = require('payzippy').configure(CONFIGURATIONS);
payzippy.charge(data, cb); // Charging API
payzippy.response(req, cb); // Response from callback url
payzippy.refund(data, cb); // Refund API
payzippy.status(data, cb); //Status Check API
```

## Documentation
https://www.payzippy.com/apidoc

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.0.1
------
- BASIC API definations and project structure
- CHECKSUMHASH check works on request and response

## License
Licensed under the MIT license.
