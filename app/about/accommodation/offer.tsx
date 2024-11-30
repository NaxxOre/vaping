'use client'

import Link  from 'next/link';
import { motion } from 'framer-motion';

const itemsData = [
  { id: 1, name: 'Great Location', img: '/images/sampleDDMLab.jpg', note: 'Thamine College St, Yangon'},
  { id: 2, name: 'Facilities', img: '/images/sampleMLLab.jpeg' , note: 'One room per two students, a bed and a table per student, 24/7 water supply, electricity and security, Laundry Service'},
  { id: 3, name: 'Knowledge Zone', img: '/images/sampleHPCLab.jpg', note: 'A library with full of Books where you can read and study at there' },
  
  
];

const Offer = () => {
  

  const variants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <div className='px-[5%] pt-[56px] pb-[72px] flex flex-col gap-[56px] bg-[#f0f8ff] rounded-[30px] '>
      <h1 className=" text-3xl md:text-5xl text-[#3798a6] text-center">UIT Hostels can offer</h1>
      <ul className='flex flex-row xl:grid xl:grid-cols-3 xl:gap-x-[50px] gap-x-[15px] justify-center w-full items-center flex-wrap xl:gap-y-[20px] gap-y-[30px] md:justify-start'>
        {itemsData.map((item) => (
          <li key={item.id} className='h-[488px]'>
            <div className='flex flex-col gap-[20px] justify-center items-center sm:justify-start sm:items-start'>
              <div className='2xl:w-[520px] xl:w-[380px] xl:h-[380px] w-[300px] h-[350px] rounded-[32px] cursor-pointer' style={{overflow: 'hidden'}}>
                  <motion.div
                    variants={variants}
                    initial='initial'
                    whileHover='hover'
                    className=' rounded-[32px] w-full h-full'
                    style={{backgroundImage: `url(${item.img})`, backgroundSize: 'cover', aspectRatio: 16/9, objectFit: 'cover', backgroundPosition: 'center center'}}
                  >

                  </motion.div>
                </div>
              <div className='flex flex-col gap-[8px] '>
                
                  
                <h5 className='text-[#1c1d20] text-[20px] ps-[5px]'>
                    <Link href= {`/research/ddm-lab`} className="hover:hoverMode text-2xl" >{item.name}</Link>
                </h5>
                <div className='flex gap-[10px] '>
                    <div><div className='mt-2 w-[6px] h-[6px] bg-[#3798a6] rounded-full'></div></div>
                    <p className='md:text-[16px] text-[14px] opacity-50 xl:w-[500px] w-[250px]'>{item.note}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Offer;
