class Module {
  onReceive(sender, args = []) {
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
