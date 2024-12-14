import React from "react";
import "react-multi-carousel/lib/styles.css"; // Ensure this is actually used if "react-multi-carousel" is implemented elsewhere.

const FirstText: React.FC = () => {
  return (
    <div className="flex flex-col justify-center gap-y-[10px] pl-6 lg:pl-16 h-full mr-6"> 
      {/* Added mr-6 for margin on the right side */}
      <h3 className="font-normal lg:text-5xl text-[32px] leading-9 lg:leading-[48px] text-black">
        Clubs
      </h3>
      <p className="lg:w-[85%] font-[350] lg:leading-[27px] text-sm leading-[21px] lg:text-lg text-justify text-[#1C1D20CC]">
        Our clubs provide a platform for students to explore their interests,
        develop skills, and build lasting friendships. Whether you are
        passionate about technology, arts, or debates, there's something for
        everyone.
      </p>
    </div>
  );
};

export default FirstText;
