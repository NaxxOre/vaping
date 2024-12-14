"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Programs(){
    return(
        <div className="p-[5%]  lg:border-l-2">
            {/* <UnderGraduate /> */}
            <PostGraduate />
        </div>
    )
}

function PostGraduate(){
    return(
        <>
        <motion.div className="" initial={{x: "150%"}} animate={{x: 0, transition: {duration: 1,delay: 1} }}>
            <h3 className="pt-5 pb-2 text-[#077d81] md:text-[32px] text-[24px] border-b-4 border-[#a0a0a0] inline">Post Graduate Diploma</h3>
            <ul className="list-disc p-5">
                <li className="py-2"><Link href='/academic/diploma/web-engineering-diploma'><motion.span className="md:text-[20px] text-[16px]" initial={{color: '#1c1d20'}} whileHover={{color: '#077d81',cursor: 'pointer'}}>Post Graduate Diploma in Web Engineering</motion.span></Link></li>
                <li className="py-2 "><Link href='/academic/diploma/network-engineering-diploma'><motion.span className="md:text-[20px] text-[16px]" initial={{color: '#1c1d20'}} whileHover={{color: '#077d81',cursor: 'pointer'}}>Post Graduate Diploma in Network Engineering</motion.span></Link></li>
                
            </ul>
        </motion.div>
        </>
    )
}

function UnderGraduate(){
    return(
        <motion.div className="" initial={{x: '100%'}} animate={{x: 0, transition: {duration: 1}, }}>
            <h3 className="pt-5 pb-2 text-[#077d81] md:text-[32px] text-[24px] border-b-4 border-[#a0a0a0] inline">Under Graduate Diploma</h3>
            <ul className="list-disc p-5">
                
                    <li className="py-2 "><Link href="/academic/diploma/dip-it"><motion.span className="md:text-[20px] text-[16px]" initial={{color: '#1c1d20'}} whileHover={{color: '#077d81',cursor: 'pointer'}}>Under Graduate Diploma in Information Technology</motion.span></Link></li>
                
                
                
            </ul>
        </motion.div>
    )
}