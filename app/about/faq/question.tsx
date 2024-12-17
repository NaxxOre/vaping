'use client'

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface QuestionProps {
  id: number;
  question: string;
  answer: string;
}

const Question: React.FC<QuestionProps> = ({ id, question, answer }) => {
  const [show, setShow] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null); // Ref for dynamic height calculation

  const toggleAccordion = () => {
    setShow(!show);
  };

  return (
    <div className="mb-4">
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center w-full px-6 py-4 bg-gray-100 rounded-lg cursor-pointer"
        onClick={toggleAccordion}
      >
        <h5 className="text-base lg:text-xl font-medium text-gray-800">{question}</h5>
        <motion.div
          animate={{ rotate: show ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center w-6 h-6 bg-black rounded-full"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.779113 1.48748V0.646623C0.779113 0.290584 1.06697 0.00272245 1.42112 0.00461636L8.78242 0.00272227C9.13845 0.00272229 9.42632 0.290584 9.42442 0.644729L9.42442 8.00792C9.42442 8.36396 9.13656 8.65182 8.78242 8.64993L7.94156 8.64993C7.58173 8.64993 7.29198 8.3526 7.29955 7.99277L7.4075 3.5366L1.96465 8.97945C1.71277 9.23133 1.30749 9.23133 1.05561 8.97945L0.449587 8.37343C0.197709 8.12155 0.197709 7.71627 0.449588 7.46439L5.89244 2.02154L1.43627 2.12949C1.07455 2.13896 0.777219 1.8492 0.779113 1.48748Z"
              fill="white"
            />
          </svg>
        </motion.div>
      </div>

      {/* Accordion Content */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0 }}
            animate={{
              height: contentRef.current ? contentRef.current.scrollHeight : "auto",
            }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden bg-gray-50 rounded-lg mt-2"
          >
            <div ref={contentRef} className="px-6 py-4">
              <p className="text-sm lg:text-lg text-gray-700">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Question;
