"use client"

import React from "react";
import { motion } from "framer-motion";
import ListItem from "./listItem";
import { usePathname } from "next/navigation";
import { NavLink } from "@/type";

function Item1() {
  const currentPath = usePathname(); // Get the current path dynamically

  const listData: NavLink[] = [
    {
      title: "About UIT",
      items: [
        {
          text: "Vision/Mission",
          link: "/about/vision-mission",
        },
        {
          text: "Six Year Journey",
          link: "/about/sixyearjourney",
        },
        {
          text: "History",
          link: "/about/history",
        },
        {
          text: "Faculty",
          link: "/about/faculties",
        },
        {
          text: "FAQS",
          link: "/about/faqs",
        },
      ],
    },
    {
      title: "Our Facilities",
      items: [
        {
          text: "Library",
          link: "/academic/library",
        },
        {
          text: "LMS",
          link: "https://lms.uit.edu.mm/",
        },
        {
          text: "Email Service",
          link: "/about/facilities-email-service",
        },
        {
          text: "Alumni",
          link: "/about/alumni",
        },
        {
          text: "Accommodation",
          link: "/about/accommodation",
        },
      ],
    },
    {
      title: "Our Locations",
      items: [
        {
          text: "Contacts",
          link: "/about/contacts",
        },
        {
          text: "Maps",
          link: "/about/maps",
        },
        {
          text: "Campus",
          link: "/about/campus",
        },
        {
          text: "Search",
          link: currentPath, // Use the current path dynamically
        },
      ],
    },
  ];

  return (
    <motion.div
      className="item1"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 10 }}
      transition={{ duration: 0.5 }}
    >
      {listData.map((data, index) => (
        <div key={index} className="frame">
          <ul>
            <ListItem text={data.title} isTitle={true} link="#"/>
            {data.items.map((item, i) => (
              <ListItem key={i} text={item.text} link={item.link} />
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  );
}


export default Item1;
