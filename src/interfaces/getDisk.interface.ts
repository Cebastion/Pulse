interface IDisk {
  total: number;
  free: number;
  used: number;
  percent: number;
}

export type GetDisk = (
  callback: (data: IDisk) => void
) => void;
