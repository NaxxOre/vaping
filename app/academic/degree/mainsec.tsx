"use client"

// import './Degree.css';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from 'next/link';

interface HeadingLine {
  id: number;
  heading: string;
}

interface Title {
  name: string;
  path: string;
}

interface Description {
  id: number;
  category1: string;
  category2: string;
  title1: Title[];
  title2: Title[];
}

const headingLine: HeadingLine[] = [
  { id: 0, heading: "Bachelor" },
  { id: 1, heading: "Master" },
  { id: 2, heading: "Doctorate" }
];

const description: Description[] = [
  {
    id: 0,
    category1: "Computer Science",
    category2: "Computer Technology",
    title1: [
      { name: "B.C.Sc. (Software Engineering)", path: "/academic/degree/bachelor/se" },
      { name: "B.C.Sc. (Business Information Systems)", path: "/academic/degree/bachelor/bis" },
      { name: "B.C.Sc. (Knowledge Engineering)", path: "/academic/degree/bachelor/ke" },
      { name: "B.C.Sc. (High Performance Computing)", path: "/academic/degree/bachelor/hpc" }
    ],
    title2: [
      { name: "B.C.Tech. (Embedded Systems)", path: "/academic/degree/bachelor/es" },
      { name: "B.C.Tech. (Communication and Networking)", path: "/academic/degree/bachelor/networking" },
      { name: "B.C.Tech. (Cyber Security)", path: "/academic/degree/bachelor/csec" }
    ]
  },
  {
    id: 1,
    category1: "Computer Science",
    category2: "Computer Technology",
    title1: [
      { name: "M.C.Sc. (Software Engineering)", path: "/academic/degree/master/se" },
      { name: "M.C.Sc. (Business Information Systems)", path: "/academic/degree/bachelor/se" },
      { name: "M.C.Sc. (Knowledge Engineering)", path: "/academic/degree/bachelor/se" },
      { name: "M.C.Sc. (High Performance Computing)", path: "/academic/degree/bachelor/se" }
    ],
    title2: [
      { name: "M.C.Tech. (Embedded Systems)", path: "/academic/degree/bachelor/se" },
      { name: "M.C.Tech. (Communication and Networking)", path: "/academic/degree/bachelor/se" },
      { name: "M.C.Tech. (Cyber Security)", path: "/academic/degree/bachelor/se" }
    ]
  },
  {
    id: 2,
    category1: "",
    category2: "",
    title1: [{ name: "Ph.D (Information Technology)", path: "/academic/degree/bachelor/se" }],
    title2: []
  }
];

const MainSec: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [activeIds, setActiveIds] = useState<number>(0);

  const handleClick = (id: number) => setActiveId(id);
  const handleMobileClick = (id: number) => setActiveIds(id);

  return (
    <>
      <div className="customHide pt-24 h-fit w-100 text-[#1C1D20] mt-[72px]">
        <div className="degree-container h-fit ms-[96px] gap-[177px]">
          <div className="compo-1 h-fit mb-[253px]">
            {headingLine.map((h1) => (
              <div className="coverr" key={h1.id}>
                <h1
                  className="max-[1170px]:text-[70px] text-[108px] font-normal leading-[96px] lg:py-8 border-b border-[#1C1D20] block w-[100%]"
                  onClick={() => handleClick(h1.id)}
                >
                  <AnimatePresence>
                    <motion.span
                      whileHover={{ color: '#1C1D20' }}
                      className="animator"
                      initial={{ color: "#f0f8ff" }}
                      animate={{ color: h1.id === activeId ? "#1C1D20" : "#1C1D2080" }}
                      exit={{ color: "#1C1D2080" }}
                      transition={{ type: "spring", stiffness: 100 }}
                    >
                      {h1.heading}
                    </motion.span>
                  </AnimatePresence>
                </h1>
              </div>
            ))}
          </div>
          <div className="compo-2 mb-[75px]">
            {description.map((item) => item.id === activeId && (
              <AnimatePresence key={item.id}>
                <motion.div
                  initial={{ x: 500, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 500, opacity: 0 }}
                  transition={{ ease: 'linear' }}
                >
                  <h1 className="text-[32px] leading-[45px] tracking-[0.06em] font-medium mb-3">
                    {item.category1}
                  </h1>
                  <div className="ps-6 pb-8">
                    {item.title1.map((li, idx) => (
                      <Link key={idx} href={li.path}>
                        <li className="leading-[35px] text-xl font-medium smallLink tracking-[0.06em] text-[#1C1D2080] mb-2 hover:text-[#1C1D20] transition duration-500">
                          {li.name}
                        </li>
                      </Link>
                    ))}
                  </div>
                  <h1 className="text-[32px] leading-[45px] tracking-[0.06em] font-medium mb-3">
                    {item.category2}
                  </h1>
                  <div className="ps-6">
                    {item.title2.map((li, idx) => (
                      <Link key={idx} href={li.path}>
                        <li className="leading-[35px] text-xl font-medium smallLink tracking-[0.06em] text-[#1C1D2080] mb-2 hover:text-[#1C1D20] transition duration-500">
                          {li.name}
                        </li>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSec;
