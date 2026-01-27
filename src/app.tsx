import { useEffect, useState } from 'react';

const App = () => {
  const [memory, setMemory] = useState<any>(null);

  useEffect(() => {
    window.bridge.getMemory().then((data) => {
      setMemory(data);
    });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Hello Electron + React + TS</h1>
      {memory && (
        <div>
          <p>Total Memory: {memory.total}</p>
          <p>Free Memory: {memory.free}</p>
        </div>
      )}
    </div>
  );
};

export default App;
