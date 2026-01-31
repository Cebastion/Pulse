import { contextBridge, ipcRenderer } from "electron";
import funcs from "./objects/funcs.object";

type Callback = (data: any) => void;

const exposedFuncs: Record<
  string,
  (callback: Callback) => void
> = {};

for (const [key] of Object.entries(funcs)) {
  exposedFuncs[key] = (callback: Callback) => {
    ipcRenderer.on(key, (_event, data) => callback(data));
  };
}

contextBridge.exposeInMainWorld('bridge', {
  ...exposedFuncs,
  startAnimation: (cb: () => void) => {
    ipcRenderer.on("start-animation", cb);
  },
  stopAnimation: (cb: () => void) => {
    ipcRenderer.on("stop-animation", cb);
  },
  toggleSetting: () => {
    ipcRenderer.invoke('toggle-setting');
  }
});
