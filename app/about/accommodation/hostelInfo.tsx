'use client'

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

type Data = {
    img: string;
    title: string;
    value: string;
}

const Inledata: Data[] = [
    { img: '/images/MonthlyPrice.svg', title: 'Monthly Price', value: '10000 MMK' },
    { img: '/images/roomIcon.svg', title: 'Room Type', value: 'Twin' },
    { img: '/images/totalRoom.svg', title: 'Total Rooms', value: '400+' },
    { img: '/images/availableRoom.svg', title: 'Available Rooms', value: '30+' },
];

const Thazindata: Data[] = [
    { img: '/images/MonthlyPrice.svg', title: 'Monthly Price', value: '10000 MMK' },
    { img: '/images/roomIcon.svg', title: 'Room Type', value: 'Twin' },
    { img: '/images/totalRoom.svg', title: 'Total Rooms', value: '300+' },
    { img: '/images/availableRoom.svg', title: 'Available Rooms', value: '20+' },
];

export default function HostelInfo() {
    const [isThazin, setIsThazin] = useState(false);

    const handleArrowClick = () => {
        setIsThazin(!isThazin);
    };

    const data = isThazin ? Thazindata : Inledata;
    const hostelName = isThazin ? 'Thazin Hostel' : 'Inle Hostel';
    const arrowIcon = isThazin ? faArrowLeft : faArrowRight;

    return (
        <div>
            <h3 className="xl:text-[64px] text-[35px] text-[#3798a6]">Hostel Info</h3>
            <div className='relative py-[56px]'>
                <AnimatePresence mode="popLayout">
                    <motion.h4
                        key={hostelName}
                        className='md:text-[32px] text-[25px] opacity-50 absolute right-[25%] md:top-0 top-[50%] '
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {hostelName}
                    </motion.h4>
                </AnimatePresence>
                <div className="md:grid md:grid-cols-4 flex flex-col items-center justify-center">
                    {data.map((item, index) => (
                        <div key={index} className="flex flex-col items-center w-[288px] md:h-[377px] h-[300px] justify-around mb-5 mt-5">
                            <div className='h-[200px] flex justify-center items-center'>
                                <img src={item.img} alt='' />
                            </div>
                            <div className='flex flex-col items-center'>
                                <h4 className='text-[#3798a6] md:text-[32px] text-[25px]'>{item.title}</h4>
                                <h4 className='text-[#1c1d20] opacity-50 md:text-[32px] text-[25px]'>{item.value}</h4>
                            </div>
                        </div>
                    ))}
                </div>
                <motion.div
                    className='absolute top-[50%] bg-[#f0f8ff] cursor-pointer p-[10px] flex justify-center items-center rounded-full right-0'
                    animate={{ rotate: isThazin ? 180 : 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={handleArrowClick}
                >
                    <FontAwesomeIcon icon={arrowIcon} />
                </motion.div>
            </div>
        </div>
    );
}
