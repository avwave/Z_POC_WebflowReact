// src/TypewriterEffect.js
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TypewriterEffect = ({ text }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Adjust time between each letter animation
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div style={{ display: 'inline-block' }}>
      <AnimatePresence>
        <motion.span
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {text.split('').map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default TypewriterEffect;