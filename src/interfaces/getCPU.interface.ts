interface ICPU {
  percent: number;
}

export type GetCPU = (
  callback: (data: ICPU) => void
) => void;
