interface IMemory {
  total: number;
  free: number;
  percent: number;
}

export type GetMemory = (
  callback: (data: IMemory) => void
) => void;
