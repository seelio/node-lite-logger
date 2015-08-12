# node-lite-logger

A lite logger inspired by [this article on logging in node](https://strongloop.com/strongblog/automatic-node-js-clustering-with-log-aggregation/). Pushes logs out as JSON, though, instead of raw text, a la [bunyan](https://github.com/trentm/node-bunyan), giving logs a little more structure.

To be used in conjunction with a proper log aggregator, such as [LogEntries](https://logentries.com/), [Splunk](http://www.splunk.com/en_us/solutions/solution-areas/log-management.html), or [Papertrail](https://papertrailapp.com/).

The more you log, the less time you spend fighting fires and the more time you spend developing real features.

## To use:

```
logger = require('lite-logger');
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
