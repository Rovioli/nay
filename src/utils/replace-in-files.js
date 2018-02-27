const replace = require('replace-in-file');

const replaceInFiles = (regexp, replacement, dest) => () =>
  replace({
    files: dest,
    from: regexp,
    to: replacement,
  });

module.exports = replaceInFiles;
