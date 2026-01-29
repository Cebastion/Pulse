const getMemory = () => {
  const mem = process.getSystemMemoryInfo()

  const used = mem.total - mem.free

  return {
    total: mem.total,
    free: mem.free,
    percent: ((used / mem.total) * 100).toFixed(2)
  }
}

export default getMemory
