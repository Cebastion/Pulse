const { EventEmitter } = require('events');
const path = require('path');
const { app } = require('electron');

class MyNativeAddon extends EventEmitter {
  constructor() {
    super();

    const addonPath = app.isPackaged
      ? path.join(process.resourcesPath, 'cpp_addon.node')
      : path.join(
        process.cwd(),
        'src/addons/watchTrayAddon/build/Release/cpp_addon.node'
      );

    const native = eval('require')(addonPath);
    this.addon = new native.MyNativeAddon();
  }

  watchTray() {
    return this.addon.watchTray();
  }
}

module.exports = new MyNativeAddon();
