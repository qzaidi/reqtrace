var uuid = require('node-uuid');

module.exports = function(namespace) {
  return function(req,res,next) {
    var rid = uuid.v4();

    namespace.bindEmitter(req);
    namespace.bindEmitter(res);

    namespace.run(function() {
      namespace.set('rid', rid);
      console.log('assigned rid ' + namespace.get('rid'));
      next();
    });
  }
}
