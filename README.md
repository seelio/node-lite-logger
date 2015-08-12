# node-lite-logger

## To use:

```
logger = require('node-lite-logger');
logger.info('ASDF');
```

Outputs:

```
[INFO] ASDF
```

## Methods

### logger.trace
### logger.debug
### logger.info
### logger.warn
### logger.error

Inspired by https://strongloop.com/strongblog/automatic-node-js-clustering-with-log-aggregation/

To be used in conjunction with a proper log aggregator, such as LogEntries or Fluent.

The more you log, the less time you spend fighting fires and the more time you spend developing real features.
