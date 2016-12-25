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
const serve = require('koa-static');
const send = require('koa-send');
const iconv = require('node-iconv');
var Buffer = require('buffer').Buffer;

const FIB_URL = "http://www.fib.upc.edu/es/empresa/borsa.html";
const DATE_FORMAT = "DD-MM-YYYY";

const DEFAULT_QUERY_OBJECT = {
    ciutat: "",
    inici: moment().day(-31).format(DATE_FORMAT), //mandatory value
    nom_empresa: "",
    projectes: "on", // When "on", only final degree projects are shown
    tipus: "pract" // value can be pract || borsa --> Right now, only pract offers can be correctly parsed
};

function *handleRequest() {
  var query = _.merge({}, DEFAULT_QUERY_OBJECT, this.request.body);

  var options = {
      url: FIB_URL + '?' + querystring.stringify(query)
  };

  var response = yield request.get(options);

  if (response) {
      var ic = new iconv.Iconv('iso-8859-1', 'utf-8');
      var buf = ic.convert(response.body);
      var utf8String = buf.toString('utf-8');
      this.body = parser.parseHTML(utf8String);

      // this.body = response.data;
  }
}

router.post('/api/jobs', handleRequest);
router.get('/api/jobs', handleRequest);

app.use(serve(__dirname + '/public'));
app.use(bodyParser());
app.use(router.routes());

app.use(function* index() {
  yield send(this, __dirname + 'public/index.html');
});

app.listen(3000);
