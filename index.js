  (function() {
      'use strict';

      var koa = require('koa');
      var app = koa();
      var request = require('koa-request');
      var parser = require('./parser.js');

      const FIB_URL = "http://www.fib.upc.edu/es/empresa/borsa.html?tipus=pract&nom_empresa=PIM%20PAM%20RADAR&ciutat=&inici=18-11-2016"


      var obj = {
        ciutat :"",
        inici : "",
        nom_empresa : "",
        projectes: "on",
        tipus: "pract | borsa"
      };

      // response
      app.use(function*() {
          var that = this;
          var options = {
              	url: FIB_URL,
                headers : {
                  "Content-Type" : "text/html; charset=ISO-8859-1"
                }
              };

              var response = yield request(options); //Yay, HTTP requests with no callbacks!
              if (response.statusCode < 300) {
                this.body = parser.parseHTML(response.body);
              }

      });




      app.listen(3000);
  })()
