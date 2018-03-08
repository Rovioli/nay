class Module {
  constructor(command) {
    if (!command || typeof command !== 'string') {
      throw Error('Command must be a string.');
    }
    this.enabled = true;
  }

  onReceive() {
    console.log('onReceive');
  }

  onEnable() {
    console.log('onEnable');
  }

  onDisable() {
    console.log('onDisable');
  }
}

class SupaModule extends Module {
  constructor(command) {
    super(command);
  }
}
