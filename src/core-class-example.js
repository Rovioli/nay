class Module {

  constructor(sender) {
    this.sender = sender;
  }

  onReceive(args = []) {
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
  onReceive(args = []) {
    console.log('onReceive: with args ' + args);
    this.sender.send('I never asked for this.');
  }
}

// core.js
const modules = new Map();
map.set('/superstart', new SupaModule({send:args => console.log(args);}));
