import { IGetCPU } from "../interfaces/getCPU.interface";
import { IGetDisk } from "../interfaces/getDisk.interface";
import { GetMemory } from "../interfaces/getMemory.interface";

export { };

declare global {
  interface Window {
    bridge: {
      getMemory: GetMemory;
      getCPU: IGetCPU;
      getDisk: IGetDisk;
    };
  }
}

