import { useState, useEffect } from "react";

const useSystem = () => {
  const [memory, setMemory] = useState(null);
  const [cpu, setCpu] = useState(null);
  const [disk, setDisk] = useState(null);

  useEffect(() => {
    window.bridge.getMemory(data => setMemory(data));
    window.bridge.getCPU(data => setCpu(data));
    window.bridge.getDisk(data => setDisk(data));
  }, [memory, cpu, disk]);

  return { memory, cpu, disk };
}

export default useSystem
