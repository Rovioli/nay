class Module {
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

class SupaModule extends Module {}
