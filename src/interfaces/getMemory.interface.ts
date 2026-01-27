export interface IGetMemory {
  (): Promise<{
    total: number;
    free: number;
    available: number;
  }>;
}
