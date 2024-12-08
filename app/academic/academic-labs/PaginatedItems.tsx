'use client'


import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { LabItem } from "@/type";
const items: LabItem[] = [
  { id: 1, name: "Hardware Lab", img: "/images/labs/lab1.jpg", labType: "/labs/hardwareLab" },
  { id: 2, name: "CISCO Network Lab", img: "/images/labs/lab2.jpg", labType: "/labs/ciscoNetworkLab" },
  { id: 3, name: "K-Lab", img: "/images/labs/lab3.jpeg", labType: "/labs/kLab" },
  { id: 4, name: "Internet of Things Lab", img: "/images/labs/lab4.jpg", labType: "/labs/iotLab" },
  { id: 5, name: "English Lab", img: "/images/labs/lab5.jpeg", labType: "/labs/engLab" },
  { id: 6, name: "Physics Lab", img: "/images/labs/lab1.jpg", labType: "/labs/physicsLab" },
];

const PaginatedItems = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  
  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = items.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const variants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div className="pt-14 pb-14 flex flex-col gap-14">
      
      <div className="relative text-center">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center">
          <span className="text-[#3798a6] text-lg me-2">.</span>
          <span className="text-xs md:text-base text-gray-500 font-normal">Welcome</span>
        </div>
        <h1 className="text-[#1c1d20] text-2xl md:text-3xl leading-snug pt-8">
          Committed <br /> to world-leading
        </h1>
      </div>

      
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {currentItems.map((item) => (
          <li key={item.id} className="flex flex-col items-center">
            <Link href={item.labType}>
              <div className="flex flex-col items-center gap-4">
                
                <div className="relative w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] overflow-hidden rounded-[16px]">
                     <motion.div
                          variants={variants}
                           initial="initial"
                           whileHover="hover"
                           className="round-[32px] w-full h-full"
                         style={{
                             backgroundImage: `url(${item.img})`,
                             backgroundSize: "cover",
                             backgroundPosition: "center",
                            }}
                    ></motion.div>
                </div>

                {/* Item Name */}
                <h5 className="text-[#1c1d20] text-center md:text-[25px] text-[17px]">{item.name}</h5>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <ReactPaginate
        previousLabel={<FontAwesomeIcon icon={faArrowLeft} />}
        nextLabel={<FontAwesomeIcon icon={faArrowRight} />}
        breakLabel="..."
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        pageClassName="page-item"
        activeClassName="active"
        previousClassName="previous"
        nextClassName="next"
        disabledClassName="disabled"
      />
      
      
      <style global jsx>{`
  .pagination {
    display: flex;
    list-style-type: none;
    padding: 0;
    justify-content: center;
    align-items: center;
    overflow: hidden; /* Prevent overflow */
  }

  .page-item {
    margin: 0 5px;
    cursor: pointer;
    background: #f5f5f5;
    border-radius: 50%;
    transition: all 0.3s ease-out;
    overflow: hidden;
  }

  .page-item a {
    width: 40px;
    height: 40px;
    text-decoration: none;
    color: #1c1d20;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 8px;
    transition: all 0.3s ease-out;
    overflow: hidden;
    box-sizing: border-box; /* Include padding and border in width/height */
  }

  .page-item a:hover {
    background: #3798a6;
    color: white;
    transform: none; /* Remove scaling effect */
  }

  .page-item.active a {
    background-color: #3798a6;
    opacity: 0.7;
    color: white;
  }

  .page-item.disabled a {
    color: #ddd;
    cursor: not-allowed;
  }

  .previous, .next {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0;
    border-radius: 50%;
    background-color: #eeeeee;
    color: black;
    transition: all 0.3s ease-out;
    width: 40px;
    height: 40px;
    overflow: hidden;
    box-sizing: border-box; /* Include padding and border in width/height */
  }

  .previous:hover, .next:hover {
    background-color: #3798a6;
    color: white;
    transform: none; /* Remove scaling effect on hover */
  }

  .previous a, .next a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  @media (max-width: 640px) {
    .page-item {
      margin: 0 1px;
    }

    .page-item a {
      width: 25px;
      height: 25px;
      font-size: 12px;
    }

    .previous, .next {
      margin: 0 1px;
      width: 25px;
      height: 25px;
      padding: 5px;
    }

    .previous svg, .next svg {
      font-size: 12px;
    }

    .motion-div {
      width: 100px;
      height: 250px;
    }
  }

  .break-me {
    cursor: default;
  }
`}</style>




    </div>
  );
};

export default PaginatedItems;
