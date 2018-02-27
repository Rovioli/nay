#!/usr/bin/env node

const meow = require('meow');
const nay = require('./src/nay');

const args = meow(
  `
    Usage
      $ foo <input>

    Options
      --rainbow, -r  Include a rainbow

    Examples
      $ foo unicorns --rainbow
      🌈 unicorns 🌈
`,
  {
    flags: {
      rainbow: {
        type: 'boolean',
        alias: 'r',
      },
    },
  },
);

nay(args);
