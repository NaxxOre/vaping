'use client'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


type Images = {
    id: number;
    image: string;
    text1: string;
    text2: string;
    text3: string;
}

const images = [
  {
    id:1,
    image: '/images/satkhan.jpg',
    text1: "Study at UIT:",
    text2: "Experience",
    text3: "New Technology",
  },
  {
    id:2,
    image: '/images/sixyearjourney.jpg',
    text1: "",
    text2: "Center of",
    text3: "Excellence",
  },
  {
    id:3,
    image: '/images/library1.jpg',
    text1: "",
    text2: "Center of",
    text3: "Excellence",
  },
  {
    id:4,
    image: '/images/entrance.jpg',
    text1: "",
    text2: "Explore",
    text3: "UIT Campus",
  }
]
const CarouselSlider = () => {
  const settings = {
    dots: true,
    // fade: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings} >
      {images.map((image)=>(
        <div key={image.id} className='relative' >
          <img src={image.image} alt="Slide 1" className='w-full md:h-[690px] h-[300px] '/>
          <div className='absolute w-[95%] md:h-[690px] h-[300px] flex flex-col bg-gradient-to-bottom top-0 '>
            
          </div>
        </div>)
      )}
    </Slider>
  );
};

export default CarouselSlider;
  