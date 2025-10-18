import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

const sectionVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.8,
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const SectionWrapper = ({ children, className = "" }: SectionWrapperProps) => {
  return (
    <motion.section
      className={`min-h-screen flex items-center justify-center snap-start snap-always p-8 ${className}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto">
        {children}
      </div>
    </motion.section>
  );
};