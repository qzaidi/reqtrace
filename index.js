"use strict";
var cls = require('continuation-local-storage');

var mw = require('./lib/middleware');

var namespace;

var reqtrace = {
  init: function(name) {
    namespace = cls.createNamespace(name);
    return mw(namespace);
  },

  trace: function() {
    var rid = namespace.get('rid');
    var args = Array.prototype.slice.call(arguments,0);
    args.unshift(rid);
    console.log.apply(console,args);
  }
};

module.exports = reqtrace;
