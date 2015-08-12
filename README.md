# node-lite-logger

A lite logger inspired by https://strongloop.com/strongblog/automatic-node-js-clustering-with-log-aggregation/ which pushes data out as JSON instead of raw text, a la bunyan.

To be used in conjunction with a proper log aggregator, such as LogEntries or Fluent.

The more you log, the less time you spend fighting fires and the more time you spend developing real features.


## To use:

```
logger = require('node-lite-logger');
logger.info({foo: 'bar'}, 'ASDF');
```

Outputs:

```
{loglevel: 'INFO', msg: 'ASDF', foo: 'bar'}
```

In general:

logger.info(contextObject, message)

- contextObject should be a key-value hash
- message should be a string
- both arguments are required

## Configuration:

Don't want to read JSON during development? Environment variables to the rescue!

```
NODE_LITE_LOGGER_PLAINTEXT=true node app.js
```

Now, you'll get:

```
[INFO] ASDF, {
    foo: bar
}
```

## Methods

### logger.trace
### logger.debug
### logger.info
### logger.warn
### logger.error
### logger.fatal