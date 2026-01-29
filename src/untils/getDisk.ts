import fs from 'fs';

const getDisk = () => {
  const stat = fs.statfsSync('/');

  const total = stat.bsize * stat.blocks;
  const free = stat.bsize * stat.bfree;
  const used = total - free;
  const percent = ((used / total) * 100).toFixed(2);

  return {
    total,
    free,
    used,
    percent
  };
}

export default getDisk
