import { IGetMemory } from "../interfaces/getMemory.interface";

export { };

declare global {
  interface Window {
    bridge: {
      getMemory: IGetMemory;
    };
  }
}

