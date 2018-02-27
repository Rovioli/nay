const replace = require('replace-in-file');
const paths = require('../const/paths');

const replaceName = name => replaceString(/\$name/g, name);
const replaceAuthor = author => replaceString(/\$author/g, author);

const replaceString = (regexp, replacement) =>
  replace({
    files: path.join(destination, '/**'),
    from: regexp,
    to: replacement,
  });

module.exports = {
  replaceName,
  replaceAuthor,
};
