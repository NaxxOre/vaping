"use client"

import { AnimatedText } from './components/AnimatedText';
import { motion } from "framer-motion";

// Define Props for the Headline component
interface HeadlineProps {
  title: string;
  MyanText: string;
}

const Headline: React.FC<HeadlineProps> = ({ title, MyanText }) => {
  const language = "EN";

  const display = language === "EN" ? title : MyanText;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative"
      >
        <div className="relative">
          <img
            src="/images/sixyearjourney.jpg"
            alt="Six Year Journey"
            className="lg:h-[50vh] h-[30vh] w-full"
          />
          <div className="absolute z-3 bg-gradient-to-bottom w-full lg:h-[50vh] h-[30vh] top-0"></div>
        </div>
        <div className="hide hero ps-14 absolute top-[50%]">
          <span className="overflow-hidden fade">
            <AnimatedText
              text={display}
              el="h1"
              className="lg:text-7xl text-6xl text-white opacity-90 font-medium"
              language={language}
            />
          </span>
        </div>
        <div className="sm:hidden hero ps-4 absolute top-[20%]">
          <span className="overflow-hidden fade">
            <AnimatedText
              text={display}
              el="h1"
              className="text-4xl font-medium text-white opacity-90"
              language={language}
            />
          </span>
        </div>
      </motion.div>
    </>
  );
};

export default Headline;
