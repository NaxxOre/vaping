"use client"

import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { NavLink } from "@/type";
import ListItem from "./listItem";

function Item2() {
  const currentPath = usePathname(); // Get the current path dynamically

  const listData: NavLink[] = [
    {
      title: "Academic Programs",
      items: [
        { text: "Degree", link: "/academic/degree" },
        { text: "Diploma", link: "/academic/diploma" },
        { text: "Extra Curriculums", link: "/academic/extra-curriculums" },
      ],
    },
    {
      title: "Student Support Service",
      items: [
        { text: "LMS", link: "https://lms.uit.edu.mm/" },
        { text: "Student Registration", link: "https://stu-reg.uit.edu.mm/" },
        { text: "Academic Labs", link: "/academic/academic-labs" },
      ],
    },
    {
      title: "Admission",
      items: [
        { text: "Calendar", link: "/academic/calendar" },
        { text: "Academic Rules", link: "/academic/academic-rules" },
        { text: "Requirements", link: "/academic/admission-requirements" },
      ],
    },
    {
      title: "Collaboration",
      items: [
        { text: "University Collaboration", link: "" },
        { text: "Industry Collaboration", link: "" },
        { text: "Collaboration with Organizations", link: "" },
      ],
    },
  ];

  return (
    <motion.div
      className="item2"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 10 }}
      transition={{ duration: 0.5 }}
    >
      {listData.map((data, index) => (
        <div key={index} className="frame">
          <ul>
            <ListItem text={data.title} isTitle={true} link="#" />
            {data.items.map((item, i) => (
              <ListItem
                key={i}
                text={item.text}
                link={item.link}
                isActive={currentPath === item.link} // Highlight active link
              />
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  );
}

export default Item2;
