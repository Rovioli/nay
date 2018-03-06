/**
 * Map, containing all registered modules of the bot.
 *
 * @type {Map.<Object>}
 * @constant
 */
const modules = new Map();

/**
 * Registers a new module object, assotiating it with a passed command.
 * Further, the module object will be accessible using the command, it was associated with.
 *
 * @param {string} command - telegram command, associated with a module.
 * @param {Object} module - a module object to be registered.
 * @throws {NoOnReceiveMethodException} - if there is no onReceive() method in the module.
 */
function registerModule(command, moduleObject) {
  if (moduleObject.onReceive === undefined) {
    return -1; // throw NoOnReceiveMethodException()
  } else {
    modules.add(command, moduleObject);
  }
}

/**
 * Unregisters and removes a module, assotiated with a passed command.
 * Calls the onDisable() lifecycle function and then removes it.
 *
 * @param {string} command - telegram command, associated with a module.
 */
function unregisterModule(command) {
  let module = modules.get(command);
  if (module.enabled) {
    module.onDisable();
  }
  modules.delete(command);
}

/**
 * Delegates telegram command to an associated module with the command.
 * Calls the onReceive() method and passes arguments to it.
 *
 * @param {string} command - telegram command, associated with a module.
 * @param {*} - arguments for a command, which will be passed to the module
 *              through the onReceive() function.
 * @throws {ModuleNotRunningException} - if a module hasn't been started.
 * @throws {NoOnReceiveMethodException} - if there is no onReceive() method in the module.
 */
function handleCommand(command, args) {
  let module = modules.get(command);
  if (module === undefined) {
    return -1; // throw NoOnReceiveMethodException()
  }
  if (!module.enabled) {
    return -2; // throw ModuleNotRunningException()
  }
  module.onReceive(args);
}

/**
 * Enables a module, mapped to the given command
 * and calls module's onEnable() lifecycle function.
 *
 * @param {string} command - telegram command, associated with a module.
 */
function enableModule(command) {
  let module = modules.get(command);
  if (!module.enabled) {
    module.onEnable(); // TODO make module.enable set to true by onEnable()?
    module.enabled = true;
  }
}

/**
 * Disables a module, mapped to the given command
 * and calls module's onDisable() lifecycle function.
 *
 * @param {string} command - telegram command, associated with a module.
 */
function disableModule(command) {
  let module = modules.get(command);
  if (module.enabled) {
    module.onDisable();
    module.enabled = false;
  }
}

/**
 * Enable all existing modules, call their onEnable() lifecycle function.
 */
function enableModules() {
  modules.forEach((module, command) => enableModule(command));
}

/**
 * Disable all enabled modules, call their onDisable() lifecycle function.
 */
function disableModules() {
  modules.forEach((module, command) => disableModule(command));
}
