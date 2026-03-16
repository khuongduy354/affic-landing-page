'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedNumberProps {
  from: number;
  to: number;
  suffix: string;
  duration?: number;
}

export default function AnimatedNumber({
  from,
  to,
  suffix,
  duration = 2,
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    const steps = 60;
    const stepDuration = (duration * 1000) / steps;
    const increment = (to - from) / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const newValue = Math.floor(from + increment * currentStep);
      setDisplayValue(newValue);

      if (currentStep >= steps) {
        setDisplayValue(to);
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [from, to, duration]);

  return (
    <motion.span
      className="text-3xl md:text-4xl font-bold text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayValue}
      {suffix}
    </motion.span>
  );
}
