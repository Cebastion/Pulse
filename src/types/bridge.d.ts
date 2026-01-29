import { GetCPU } from "../interfaces/getCPU.interface";
import { GetDisk } from "../interfaces/getDisk.interface";
import { GetMemory } from "../interfaces/getMemory.interface";

export { };

declare global {
  interface Window {
    bridge: {
      getMemory: GetMemory;
      getCPU: GetCPU;
      getDisk: GetDisk;
      startAnimation: (callback: () => void) => void;
      stopAnimation: (callback: () => void) => void;
    };
  }

  declare module '*.svg' {
    const content: string;
    export default content;
  }
}


