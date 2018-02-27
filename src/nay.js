const fs = require('fs-extra');
const path = require('path');
const replace = require('replace-in-file');
const chalk = require('chalk');
const os = require('os');
const invariant = require('./utils/silent-invariant');
const validateBotName = require('./utils/validate-bot-name');
const replaceInFiles = require('./utils/replace-in-files');

const copy = fs.copy;
const { username } = os.userInfo();

const highlightBotKeywords = text =>
  text.replace(/(bot|-bot)/g, chalk.underline('$1'));

const nay = ({ input, help }) => {
  const [command, botName = ''] = input;
  const isBotNameValid = validateBotName(botName);
  invariant(command === 'new', help);
  invariant(
    isBotNameValid,
    highlightBotKeywords(
      'Bot name must end with either bot ' +
        'or -bot and be 3 or more characters long.',
    ),
  );

  const source = path.join(__dirname, '../project-template');
  const destination = path.join(__dirname, '../' + botName);
  const replacementGlob = path.join(__dirname, '../' + botName + '/**');

  const replaceName = replaceInFiles(/\$name/g, botName, replacementGlob);
  const replaceAuthor = replaceInFiles(/\$author/g, username, replacementGlob);

  copy(source, destination)
    .then(replaceName)
    .then(replaceAuthor)
    .then(() => console.log(`Success! Created ${botName} at ${destination}`))
    .catch(err => invariant(!err, err));
};

module.exports = nay;
