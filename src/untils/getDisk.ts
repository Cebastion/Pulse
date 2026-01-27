import fs from 'fs';

const getDisk = () => {
  const stat = fs.statfsSync('/');

  const total = stat.bsize * stat.blocks;
  const free = stat.bsize * stat.bfree;
  const used = total - free;

  return {
    total,
    free,
    used,
  };
}

export default getDisk
