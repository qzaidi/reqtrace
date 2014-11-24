
/**
 * Module dependencies.
 */

var express = require('express');
var app = express();
var http = require('http');
var reqtrace = require('..');

// all environments
app.set('port', process.env.PORT || 3000);


app.use(reqtrace.init('com.paytm.cart'));

app.get('/', function(req,res,next) {
  testcb(function() {
    var flag = Date.now() & 0x1;
    if (flag) {
      reqtrace.trace('hello ',flag);
      res.send('OK');
    } else {
      reqtrace.trace('hello ',flag);
      next(new Error('test error'));
    }
  });
});

app.use(function(err,req,res,next) {
  reqtrace.trace('an error occured',err);
  res.send(err);
});

function testcb(cb) {
  reqtrace.trace('inside testcb');
  cb();
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
