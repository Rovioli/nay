class Module {
  constructor(command) {
    if (!command || typeof command !== 'string') {
      throw Error('Command must be a string.');
    }
    this.enabled = true;
  }

  onReceive(sender) {
    console.log('onReceive');
  }

  onEnable(sender) {
    console.log('onEnable');
  }

  onDisable(sender) {
    console.log('onDisable');
  }
}

class SupaModule extends Module {
  constructor(command) {
    super(command);
  }
}
