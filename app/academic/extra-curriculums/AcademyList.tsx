import React from 'react';
import { Academy } from "@/type";

const Academies: Academy[] = [
  {
    img: '/images/Academy/cisco.png',
    name: 'Cisco Networking Academy'
  },
  {
    img: '/images/Academy/RedHat.png',
    name: 'Red Hat Academy'
  },
  {
    img: '/images/Academy/Oracle.png',
    name: 'Oracle Academy'
  },
  {
    img: '/images/Academy/aws.png',
    name: 'Amazon Web Service Academy'
  }
];

const AcademyList: React.FC = () => {
  return (
    <div className="w-full py-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 lg:gap-x-[150px] px-[5%]">
      {Academies.map((academy, index) => (
        <div key={index} className="w-full flex flex-col gap-y-2">
          <div
            style={{
              backgroundImage: `url(${academy.img})`,
              backgroundSize: 'cover',
              objectFit: 'cover',
              backgroundPosition: 'center center'
            }}
            className="aspect-video w-full"
          ></div>
          <h4 className="font-normal text-2xl sm:text-lg lg:text-[32px] leading-7 lg:leading-9 text-center">
            {academy.name}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default AcademyList;
