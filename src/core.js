// TODO: non-working code. Implement after accepting an API.

var modules = {};

function registerModule(command, moduleObject) { 
    modules[command] = moduleObject;
}

function unregisterModule(command) {
    if (modules[command].enabled) {
        modules[command].onDisable();
    }
    delete modules[command];
}

function handleCommand(command, args) {
    if (modules[command].onReceive === undefined) {
        return -1; // throw NoOnReceiveMethodException()
    }
    if (!modules[command].enabled) {
        return -2; // throw ModuleNotRunningException()
    }
    modules[command].onReceive(args);
}

function enableModule(command) {
    if (!module[command].enabled) {
        modules[command].onEnable(); // TODO! make module.enable set to true by onEnable()?
        modules[command].enabled = true;
    }
}

function disableModule(command) {
    if (module[command].enabled) {
        modules[command].onDisable();
        module[command].enabled = false;
    }
}
