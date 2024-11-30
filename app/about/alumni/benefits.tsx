'use client'

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import dynamic from 'next/dynamic';
import Link from "next/link";

// Define the interface for item data
interface ItemData {
  id: number;
  name: string;
  img: string;
  note?: string;
}

// Sample data for items
const itemsData: ItemData[] = [
  {
    id: 1,
    name: "Events and Reunions",
    img: '/images/sampleNetworkLab.jpg',
    note: "Reunion of alumni and events",
  },
  {
    id: 2,
    name: "Career Services",
    img: '/images/sampleVisionLab.jpeg',
    note: "Access personalized career advice, job search assistance, and professional development resources",
  },
  {
    id: 3,
    name: "Networking",
    img: '/images/sampleHPCLab.jpg',
    note: "Join exclusive events, connect with fellow alumni, and expand your professional network.",
  },
  { id: 4, name: "Data Distribution Management (DDM) Lab", img: '/images/sampleDDMLab.jpg' },
  { id: 5, name: "Deep Learning and Information Systems Lab", img: '/images/sampleMLLab.jpeg' },
];

// Dynamically import components that depend on the client-side
const ReactPaginateWithNoSSR = dynamic(() => import('react-paginate'), { ssr: false });
const MotionDivWithNoSSR = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });

const Benefits: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const [isMounted, setIsMounted] = useState(false); // Track if component is mounted

  // Set mounted state after component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Calculate the current items based on the current page
  const offset = currentPage * itemsPerPage;
  const currentItems = itemsData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(itemsData.length / itemsPerPage);

  // Variants for Framer Motion animations
  const variants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  // Render nothing until mounted to avoid hydration issues
  if (!isMounted) return null;

  return (
    <div className="px-[5%] pt-[56px] pb-[72px] flex flex-col gap-[56px] bg-[#f0f8ff] rounded-[30px] ">
      <h1 className="text-[#1c1d20] text-3xl md:text-5xl ">Benefits and Opportunities</h1>
      <ul className="flex flex-row xl:grid xl:grid-cols-3 xl:gap-x-[50px] gap-x-[15px] justify-center w-full items-center flex-wrap xl:gap-y-[20px] gap-y-[30px] xs:justify-start">
        {currentItems.map((item) => (
          <li key={item.id} className="h-[488px]">
            <div className="flex flex-col gap-[20px] justify-center items-center sm:justify-start sm:items-start">
              <div
                className="2xl:w-[520px] xl:w-[380px] xl:h-[380px] w-[300px] h-[350px] rounded-[32px] cursor-pointer"
                style={{ overflow: 'hidden' }}
              >
                <MotionDivWithNoSSR
                  variants={variants}
                  initial="initial"
                  whileHover="hover"
                  className="rounded-[32px] w-full h-full"
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: 'cover',
                    aspectRatio: '16/9',
                    backgroundPosition: 'center',
                  }}
                />
              </div>
              <div className="flex flex-col gap-[8px] ">
                <h5 className="text-[#1c1d20] text-[20px] ps-[5px]">
                  <Link href={`/research/ddm-lab`} className="hover:hoverMode text-2xl">
                    {item.name}
                  </Link>
                </h5>
                <div className="flex gap-[10px] ">
                  <div>
                    <div className="mt-2 w-[6px] h-[6px] bg-[#3798a6] rounded-full"></div>
                  </div>
                  <p className="text-[16px] opacity-50 xl:w-[500px] w-[250px]">{item.note}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <StyledPaginate
        previousLabel={<FontAwesomeIcon icon={faArrowLeft} />}
        nextLabel={<FontAwesomeIcon icon={faArrowRight} />}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={(event) => setCurrentPage(event.selected)}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default Benefits;

// Styled component for pagination
const StyledPaginate = styled(ReactPaginateWithNoSSR)`
  display: flex;
  list-style-type: none;
  padding: 0;
  justify-content: center;

  li {
    margin: 0 5px;
    cursor: pointer;
    background: #f5f5f5;
    border-radius: 50%;

    &.active a {
      background-color: #3798a6;
      opacity: 0.7;
      color:white;
    }

    @media (max-width:640px) {
      margin :0 1px; 
    }

    a {
      width :40px; 
      height :40px; 
      text-decoration :none; 
      color :#1c1d20; 
      display :flex; 
      align-items :center; 
      justify-content :center; 
      border-radius :50%; 
      padding-top :2px;

      &:hover {
        background-color :#3798a6; 
        color:white; 
        transition :all .3s ease-in-out; 
      }

      &.disabled {
        color:#ddd; 
        cursor:not-allowed; 
      }

      @media (max-width :640px) {
        width :25px; 
        height :25px; 
        font-size :12px; 
      }
    }
    
   .break-me {
     cursor :default; 
   }
`;