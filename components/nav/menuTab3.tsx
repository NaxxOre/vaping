'use client'

import React from "react";
import { motion } from "framer-motion";
import ListItem from "./listItem";
import { usePathname } from "next/navigation";
import { NavLink } from "@/type";

function Item3() {
  const currentPath = usePathname(); // Get the current route dynamically

  const listData: NavLink[] = [
    {
      title: "Our Conferences",
      items: [
        {
          text: "Call For Papers",
          link: "/about/conference/1",
        },
        {
          text: "Previous Conferences",
          link: "/about/conference",
        },
      ],
    },
  ];

  return (
    <motion.div
      className="item3"
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
                isActive={currentPath === item.link} // Highlight the active link
              />
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  );
}



export default Item3;
