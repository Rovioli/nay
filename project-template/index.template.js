const { registerModule } = require('nay');

function onReceive(sender) {
  // TODO
}

function onEnable() {
  // TODO
}

function onDisable() {
  // TODO
}

const module = { onReceive, onEnable, onDisable };

registerModule('/command', module);
