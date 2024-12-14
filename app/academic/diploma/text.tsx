"use client"

import { motion } from "framer-motion"

export default function Text(){
    return(
        <div className="p-[5%]">
            <motion.p className="md:text-[20px] text-[16px] text-justify" initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 3}, }}>The University of Information Technology offers undergraduate and postgraduate courses for bachelor’s, diploma, master’s, and doctoral level students in a wide range of subject areas: software engineering, high performance computing, business information system, communication and networking, embedded systems and computer systems technology.</motion.p>
        </div>
    )
}