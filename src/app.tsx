import { AnimatePresence, motion } from 'framer-motion';
import CircleBar from './components/CircleBar';
import useSystem from './hooks/useSystem';
import useVisible from './hooks/useVisible';

const App = () => {
  const { memory, cpu, disk } = useSystem();
  const visible = useVisible();


  return (
    <AnimatePresence>
      {visible && (<motion.div className='bg-black rounded-2xl'>
        <div className='flex gap-4'>
          <CircleBar value={memory?.percent} type="ram" />
          <CircleBar value={disk?.percent} type="disk" />
          <CircleBar value={cpu?.percent} type="cpu" />
        </div>
      </motion.div>)}
    </AnimatePresence>
  );
};

export default App;
