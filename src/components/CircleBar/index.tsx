import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import RAM from "../../assets/ram-memory.svg"
import CPU from "../../assets/cpu.svg"
import DISK from "../../assets/disk-storage.svg"
import { Color } from "../../enum/color.enum";

interface ProgressProps {
  type: "ram" | "cpu" | "disk";
  value: number;
}

const CircleBar = ({ value, type }: ProgressProps) => {
  const [mouseMove, setMouseMove] = useState(false)
  const [color, setColor] = useState("#3b82f6")
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference

  useEffect(() => {
    if (value < 50) setColor(Color.BLUE)
    else if (value < 80) setColor(Color.ORANGE)
    else setColor(Color.RED)
  }, [value])

  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} onMouseEnter={() => setMouseMove(true)} onMouseLeave={() => setMouseMove(false)}>
      <div className="flex items-center justify-center">
        <svg width="120" height="120" className="rotate-[-90deg]">
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#1f2937"
            strokeWidth="10"
            fill="transparent"
          />

          <motion.circle
            cx="60"
            cy="60"
            r={radius}
            strokeWidth="10"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            initial={{ stroke: color }}
            animate={{ strokeDashoffset: offset, stroke: color }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </svg>

        <AnimatePresence mode="wait">
          {mouseMove ? (
            <motion.div key="value"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.15 }}
              className="absolute text-white">
              {value}%
            </motion.div>
          ) : (
            <motion.div key="icon"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.15 }}
              className="absolute flex items-center gap-1 flex-col">
              <img src={type === "cpu" ? CPU : type === "disk" ? DISK : RAM} alt="" className="w-6 h-6" />
              <span className="text-white">{type === "cpu" ? "CPU" : type === "disk" ? "DISK" : "RAM"}</span>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  )
}

export default CircleBar
