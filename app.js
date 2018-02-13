var router = require("./router.js");

//Problem: We need a simple way to look at a users batch about and Javascript points from a web browser

//Solution: Use Node.js to perform the profile lookups and serve our templates via HTTP

//Create a web server

var http = require('http')
http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(3000);
console.log('Server runnig at http://localhost:3000/')
