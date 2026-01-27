import { IGetCPU } from "../interfaces/getCPU.interface";
import { IGetDisk } from "../interfaces/getDisk.interface";
import { IGetMemory } from "../interfaces/getMemory.interface";

export { };

declare global {
  interface Window {
    bridge: {
      getMemory: IGetMemory;
      getCPU: IGetCPU;
      getDisk: IGetDisk;
    };
  }
}

