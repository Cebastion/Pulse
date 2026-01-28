interface IGetMemory {
  total: number;
  free: number;
  available: number;
}

export type GetMemory = (
  callback: (data: IGetMemory) => void
) => void;
