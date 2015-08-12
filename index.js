function makeLog (level) {
  return function (message) {
    console.log("[" + level + "] " + message);
  }
}

module.exports = {
  trace: makeLog('TRACE'),
  debug: makeLog('DEBUG'),
  info: makeLog('INFO'),
  warn: makeLog('WARN'),
  error: makeLog('ERROR'),
};
