import { contextBridge, ipcRenderer } from "electron";
import funcs from "./objects/funcs.object";

const exposedFuncs: Record<string, () => Promise<any>> = {};

for (const [key] of Object.entries(funcs)) {
  exposedFuncs[key] = () => ipcRenderer.invoke(key);
}

contextBridge.exposeInMainWorld('bridge', exposedFuncs);
