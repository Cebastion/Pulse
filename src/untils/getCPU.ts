const getCPU = () => {
  return { percent: process.getCPUUsage().percentCPUUsage.toFixed(2) }
}

export default getCPU

