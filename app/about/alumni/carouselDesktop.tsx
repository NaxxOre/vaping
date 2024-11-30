// 'use client'

// import React, { useRef, useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useRouter } from 'next/navigation';
// import styled from 'styled-components';
// import Carousel, {CarouselProps} from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import FirstText from './firstText';
// import ButtonGroup from "./buttonGroup";
// import { domRenderShort } from '@/utils/domRender';

// function CuroselDesktop() {
//   const carouselRef = useRef<Carousel>(null);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [left, setLeft] = useState(false);
//   const [right, setRight] = useState(true);
//   const [stop, setStop] = useState(0);

//   const router = useRouter();
//   const { id } = router.query; // Get the dynamic route parameter
  
//   const parsedId = id ? parseInt(id as string, 10) : null; // Ensure `id` is parsed as an integer

//   const dataa = useSelector((state: any) => state.post.value).filter((item: any) => item.id !== parsedId);

//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 2.3,
//       slidesToSlide: 2.3,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//       slidesToSlide: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1.2,
//       slidesToSlide: 1,
//     },
//   };

//   const data = [
//     {
//       title: "News title",
//       type: "News type",
//       discription: "UIT has amazing opportunities for the students...",
//     },
//     // Add more data objects here...
//   ];

//   useEffect(() => {
//     setStop(window.innerWidth < 1024 ? Math.ceil(data.length / 2) : Math.ceil(data.length / 3));
//   }, []);

//   const handlePrevious = () => {
//     if (carouselRef.current) {
//       carouselRef.current.previous(1);
//     }
//   };

//   const handleNext = () => {
//     if (carouselRef.current) {
//       carouselRef.current.next(1);
//     }
//   };

//   const afterChange = (previousSlide: number, { currentSlide }: { currentSlide: number }) => {
//     setCurrentSlide(currentSlide);
//     setLeft(currentSlide !== 0);
//     setRight(currentSlide < stop);
//   };

//   return (
//     <div className="lg:py-20 py-16 relative flex lg:flex-row flex-col w-full lg:w-[111%] lg:ms-[-5.5%] lg:gap-y-0 gap-10 lg:gap-0">
//       <div className="lg:ps-[5%] me-[57px] flex flex-col justify-between w-full">
//         <FirstText />
//         <ButtonGroup handleNext={handleNext} handlePrevious={handlePrevious} left={left} right={right} />
//       </div>
//       <div className="block w-[103%] lg:w-[67%] min-[1250px]:w-[77%] cursor-grab active:cursor-grabbing">
//         <Carousel
//           responsive={responsive}
//           ref={carouselRef}
//           arrows={false}
//           renderButtonGroupOutside={true}
//           afterChange={afterChange}
//         >
//           {dataa.map((item: any, index: number) => (
//             <div key={index} className="flex flex-col me-[32px]">
//               <a
//                 href={`/about/news/${item.id}`}
//                 className=""
//                 onClick={(event) => {
//                   event.preventDefault(); // Prevent default link behavior
//                   setTimeout(() => {
//                     router.push(`/about/news/${item.id}`); // Navigate dynamically
//                   }, 200);
//                 }}
//               >
//                 {item.image ? (
//                   <Div className="rounded-[32px] w-full aspect-video bg-[#D9D9D9]" image={item.image}></Div>
//                 ) : (
//                   <Div2 className="rounded-[32px] w-full aspect-video bg-[#D9D9D9]"></Div2>
//                 )}
//               </a>

//               <div className="relative mt-5">
//                 <ul className="absolute top-0 left-[15px] list-disc marker:text-[#3798A6]">
//                   <li className="font-normal text-xs lg:text-base leading-[18px] text-[#1C1D2080]">{item.type}</li>
//                 </ul>
//                 <h5 className="lg:text-xl text-base font-normal leading-7 pt-[22px] lg:pt-[26px]">
//                   <a
//                     href={`/about/news/${item.id}`}
//                     className="hover:hoverMode"
//                     onClick={(event) => {
//                       event.preventDefault();
//                       setTimeout(() => {
//                         router.push(`/about/news/${item.id}`);
//                       }, 200);
//                     }}
//                   >
//                     {item.title}
//                   </a>
//                 </h5>
//               </div>
//               <p
//                 className="pt-3 lg:pt-5 font-[350] leading-[21px] lg:leading-[27px] text-sm lg:text-lg inline-block"
//                 dangerouslySetInnerHTML={{ __html: domRenderShort(item.body) }}
//               ></p>
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </div>
//   );
// }

// const Div = styled.div<{ image: string }>`
//   background: url();
//   background-size: cover;
//   aspect-ratio: 16/9;
//   object-fit: cover;
//   background-position: center center;
// `;

// const Div2 = styled.div`
//   background-size: cover;
//   aspect-ratio: 16/9;
//   object-fit: cover;
//   background-position: center center;
// `;

// export default CuroselDesktop;


export default function Home({hello}: {hello: string}){
    return(
        <div>{hello}</div>
    )
}