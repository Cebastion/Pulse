export interface IGetCPU {
  (): Promise<{
    percentCPUUsage: number;
    cumulativeCPUUsage: number;
    idleWakeupsPerSecond: number;
  }>;
}
