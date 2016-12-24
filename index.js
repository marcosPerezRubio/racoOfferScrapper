'use strict';

const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const app = koa();
const request = require('koa-request');
const parser = require('./parser.js');
const _ = require('lodash');
const querystring = require('querystring');
const moment = require('moment');


const FIB_URL = "http://www.fib.upc.edu/es/empresa/borsa.html"
const SAMPLE_URL = "http://www.fib.upc.edu/es/empresa/borsa.html?tipus=pract&nom_empresa=PIM%20PAM%20RADAR&ciutat=&inici=18-11-2016"
const DATE_FORMAT = "DD-MM-YYYY";

const DEFAULT_QUERY_OBJECT = {
    ciutat: "",
    inici: moment().day(-31).format(DATE_FORMAT), //mandatory value
    nom_empresa: "",
    projectes: "on", // When "on", only final degree projects are shown
    tipus: "pract" // value can be pract || borse
};

function *handleRequest() {
  var query = _.merge({}, DEFAULT_QUERY_OBJECT, this.request.body);

  var options = {
      url: FIB_URL + '?' + querystring.stringify(query)
  };

  var response = yield request(options);

  if (response.statusCode < 300) {
      this.body = parser.parseHTML(response.body);
  }
}

router.post('/', handleRequest);
router.get('/', handleRequest);

app.use(bodyParser());
app.use(router.routes());
app.listen(3000);
