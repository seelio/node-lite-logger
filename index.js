extend = require('util-extend')

function makeLog (level) {
  if (global.process.env.NODE_LITE_LOGGER_PLAINTEXT)
    return function (object, message) {
      console.log("[" + level + "] " + message, object);
    }
  else
    return function (object, message) {
      obj = extend({}, object);
      if (message) {
        obj.msg = message;
      }
      obj.loglevel = level;
      console.log(JSON.stringify(obj));
    }
}

module.exports = {
  trace: makeLog('TRACE'),
  debug: makeLog('DEBUG'),
  info: makeLog('INFO'),
  warn: makeLog('WARN'),
  error: makeLog('ERROR'),
  fatal: makeLog('FATAL'),
};
