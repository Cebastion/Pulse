export interface IGetDisk {
  (): Promise<{
    total: number;
    free: number;
    used: number;
  }>;
}
