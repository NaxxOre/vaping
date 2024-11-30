// Notification.js
import React from 'react';
import { motion } from 'framer-motion';

const Notification = ({ message }: {message: string}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 right-4 bg-[#3798a6] text-white py-2 px-4 rounded-lg shadow-lg"
    >
      {message}
    </motion.div>
  );
};

export default Notification;
