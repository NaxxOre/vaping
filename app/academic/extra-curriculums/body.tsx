"use client"; // Ensure this is at the top of your file to mark the component as a Client Component

import React from 'react';
import TextGp from './TextGp';

function Body() {
  return (
    <div className="w-full px-4 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-x-12 py-14 lg:py-[72px]">
      {/* Centered First div with background */}
      <div
        className="w-full mx-auto flex justify-center items-center rounded-[32px] aspect-square bg-[#D9D9D9] bg-cover bg-center"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        {/* Centered content inside the div */}
      </div>

      {/* Second div containing TextGp component */}
      <div className="w-full flex justify-center items-center">
  <TextGp />
</div>

    </div>
  );
}

export default Body;
