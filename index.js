#!/usr/bin/env node

const meow = require('meow');
const nay = require('./src/nay');

const args = meow(
  `
    Usage
      $ nay new <bot-name>

    Options
      --nothing, -n Does nothing

    Examples
      $ nay new dice-bot
      Success! Created dice-bot at /Users/riseremi/playground/dice-bot
`,
  {
    flags: {
      nothing: {
        type: 'boolean',
        alias: 'n',
      },
    },
  },
);

nay(args);
