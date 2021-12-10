'use strict';

module.exports = {
  apps: [
    {
      name: 'seung-ju-admin',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3001',
      instances: 0,
      autorestart: true,
      watch: false,
      exec_mode: 'cluster',

      output: '~/logs/pm2/console.log',
      error: '~/logs/pm2/onsoleError.log',
    },
  ],
};
