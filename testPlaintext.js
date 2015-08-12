global.process.env.NODE_LITE_LOGGER_PLAINTEXT = true
logger = require('./index.js');

logger.trace({foo: {bar: {baz: 'qux'}}}, '1');
logger.debug({foo: {bar: {baz: 'qux'}}}, '2');
logger.info({foo: {bar: {baz: 'qux'}}}, '3');
logger.warn({foo: {bar: {baz: 'qux'}}}, '4');
logger.error({foo: {bar: {baz: 'qux'}}}, '5');
