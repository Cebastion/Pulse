import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import CircleBar from './components/CircleBar';
import useSystem from './hooks/useSystem';

const App = () => {
  const { memory, cpu, disk } = useSystem();
  const controls = useAnimation();

  useEffect(() => {
    const handler = () => {
      controls.set({ opacity: 0, y: -20 });
      controls.start({ opacity: 1, y: 0 });
    };
    window.bridge.startAnimation(handler);
  }, []);

  return (
    <motion.div animate={controls} className='bg-black rounded-2xl'>
      <div className='flex gap-4'>
        <CircleBar value={memory?.percent} type="ram" />
        <CircleBar value={disk?.percent} type="disk" />
        <CircleBar value={cpu?.percent} type="cpu" />
      </div>
    </motion.div>
  );
};

export default App;
