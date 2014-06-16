# payzippy
Payzippy payment gateway api implementation for node. Provides API for charging, handling response, refund and status check.

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
All transaction amount is in INR paisa.
Response API accepts a HttpReq Object from express server.

For More ducumentation Refer
https://www.payzippy.com/apidoc

## Examples
Example Express Server Using Payzippy API

https://github.com/niklabh/payzippy-example

## Contributing
Contributions are most welcome

## Release History
0.0.1
------
- BASIC API definations and project structure
- CHECKSUMHASH check works on request and response

0.0.2
------
- Dependencies fix

0.0.3
------
- Completed request, refund, status APIs
- Added Tests

## License
Licensed under the MIT license.
