import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { ReactNode } from 'react';

interface StaggerContainerProps {
  children: ReactNode;
  delay?: number;
  staggerChildren?: number;
  className?: string;
  viewport?: { once: boolean; margin: string };
}

export function StaggerContainer({
  children,
  delay = 0,
  staggerChildren = 0.1,
  className = '',
  viewport = { once: true, margin: "-100px" },
}: StaggerContainerProps) {
  const containerVariants: Variants = {
    visible: {
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
}

export function StaggerItem({
  children,
  direction = 'up',
  distance = 30,
}: StaggerItemProps) {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <motion.div variants={itemVariants}>
      {children}
    </motion.div>
  );
}
