"use client"

import React, { useState, useEffect } from "react";
import "./Faq.css";
import { motion, AnimatePresence } from "framer-motion";

interface QuestionProps {
  id: string | number;
  question: string;
  answer: string;
}

const Question: React.FC<QuestionProps> = (props) => {
  const [show, setShow] = useState<boolean>(false);
  const [height, setHeight] = useState("68px");
  useEffect(() => {
    if (typeof window !== "undefined") {
        // This will only run in the browser
        setHeight(window.innerWidth < 1024 ? "60px" : "68px");
    }
}, []);

  const Trigger = (event: React.MouseEvent<HTMLDivElement>, id: string | number) => {
    event.stopPropagation();
    setShow(!show);
  };

  return (
    <div className="w-full">
      <AnimatePresence>
        <motion.div
          className="w-full py-6 px-8 marker:lg:py-5 hover:cursor-pointer rounded-[32px] bg-[#F5F5F5]"
          onClick={(event) => {
            Trigger(event, props.id);
          }}
          initial={{ height: height }}
          animate={{ height: height }}
          key={`${props.id} person`}
          transition={{ duration: 0.5, ease: "linear" }}
        >
          <div className="w-full flex flex-row justify-between items-center">
            <h5 className="w-full text-base lg:text-xl font-normal lg:leading-7 leading-[22px]">
              {props.question}
            </h5>
            <div className="p-4 rounded-full bg-[#1C1D20] lg:ms-14 ms-8">
              <AnimatePresence>
                <motion.svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ transform: "rotate(0)" }}
                  animate={{ transform: show ? "rotate(-180deg)" : "rotate(0deg)" }}
                  key={`${props.id}`}
                >
                  <path
                    d="M0.779113 1.48748V0.646623C0.779113 0.290584 1.06697 0.00272245 1.42112 0.00461636L8.78242 0.00272227C9.13845 0.00272229 9.42632 0.290584 9.42442 0.644729L9.42442 8.00792C9.42442 8.36396 9.13656 8.65182 8.78242 8.64993L7.94156 8.64993C7.58173 8.64993 7.29198 8.3526 7.29955 7.99277L7.4075 3.5366L1.96465 8.97945C1.71277 9.23133 1.30749 9.23133 1.05561 8.97945L0.449587 8.37343C0.197709 8.12155 0.197709 7.71627 0.449588 7.46439L5.89244 2.02154L1.43627 2.12949C1.07455 2.13896 0.777219 1.8492 0.779113 1.48748Z"
                    fill="white"
                  />
                </motion.svg>
              </AnimatePresence>
            </div>
          </div>

          {
            <AnimatePresence>
              {show && (
                <motion.div
                  className="w-full mt-4 lg:mt-[19px] overflow-hidden h-auto"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  key={props.id}
                  transition={{ duration: 0.3, ease: "linear" }}
                >
                  <pre className="lg:text-lg text-sm font-[350] leading-[21px] lg:leading-7 w-full text-wrap font-['DegularRegular'] text-[#1C1D20CC]">
                    {props.answer}
                  </pre>
                </motion.div>
              )}
            </AnimatePresence>
          }
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Question;
