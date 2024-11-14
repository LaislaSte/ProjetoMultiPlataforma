const pino = require('pino')({
  level: process.env.LOG_LEVEL || 'info',
  transport:
    process.env.LOG_LEVEL === 'debug'
      ? {
          target: 'pino-pretty',
          options: {
            levelFirst: true,
            colorize: true,
          },
        }
      : false,
});

module.exports = pino;
