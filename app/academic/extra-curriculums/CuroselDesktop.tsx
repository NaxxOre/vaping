"use client";

import React, { useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";
import FirstText from "./FirstText";
import { Club } from "@/type";

const clubs: Club[] = [
  { img: "/images/clubs/football.svg", name: "Futsal Club" },
  { img: "/images/clubs/swimming.svg", name: "Swimming Club" },
  { img: "/images/clubs/badminton.svg", name: "Badminton Club" },
  { img: "/images/clubs/chess.svg", name: "Chess Club" },
  { img: "/images/clubs/tt.svg", name: "Table Tennis Club" },
  { img: "/images/clubs/football.svg", name: "Futsal Club" },
];

const CuroselDesktop: React.FC = () => {
  const carouselRef = useRef<any>(null);
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(true);

  const responsive = {
    allDevices: {
      breakpoint: { max: 3000, min: 0 }, // Applies to all devices
      items: 3,
      slidesToSlide: 3,
    },
  };

  const handlePrevious = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const afterChange = (previousSlide: number, { currentSlide }: { currentSlide: number }) => {
    setLeft(currentSlide > 0);
    setRight(currentSlide < clubs.length / 3 - 1);
  };

  return (
    <>
      <style jsx>{`
        .react-multi-carousel-track {
          transition: transform 0.7s ease-out !important;
        }
      `}</style>

      <div className="lg:py-20 py-8 relative grid lg:grid-cols-2 grid-cols-1 gap-y-8 lg:gap-x-8 w-full">
        {/* Text Section */}
        <div className="flex justify-center items-center w-full">
          <FirstText />
        </div>

        {/* Carousel Section */}
        <div className="lg:pt-0 pt-6 block w-full cursor-grab active:cursor-grabbing">
          <Carousel
            responsive={responsive}
            ref={carouselRef}
            arrows={false}
            afterChange={afterChange}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={false}
            containerClass="carousel-container"
            itemClass="px-2"
          >
            {clubs.map((item, index) => (
              <div key={index} className="flex flex-col gap-y-2 w-full">
                <div className="w-full flex justify-center align-top h-[108px]">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="flex-none lg:w-auto lg:h-auto w-[64px] h-[64px]"
                  />
                </div>
                <h4 className="w-full text-center font-normal text-base md:text-lg lg:text-xl leading-7 text-black">
                  {item.name}
                </h4>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {/* Button Group */}
      <div className="w-full flex flex-col justify-center items-end lg:items-center pt-10">
        <ButtonGroup handleNext={handleNext} handlePrevious={handlePrevious} left={left} right={right} />
      </div>
    </>
  );
};

export default CuroselDesktop;
