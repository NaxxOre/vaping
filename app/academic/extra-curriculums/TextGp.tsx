import React from 'react';
import HeadingStyle2 from '@/components/HeadingStyle2';

const TextGp: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <HeadingStyle2
        name="Enhance your"
        name1="University Experience"
        tinyText="Extra curriculums"
        size="text-5xl"
        mobileSize="text-4xl"
        sizeLead="leading-[48px]"
        mobileSizeLead="leading-[38px]"
        space="pt-9"
        mobileSpace="pt-[30px]"
      />
      <p className="text-justify font-[350] leading-[21px] lg:leading-[27px] text-sm lg:text-lg m-0">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque in
        repudiandae minus, excepturi quaerat temporibus ipsam saepe doloribus
        velit ipsum optio nemo tempora provident voluptatum? Nostrum molestiae
        voluptas dignissimos cum. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Eaque in repudiandae minus, excepturi quaerat
        temporibus ipsam saepe doloribus velit ipsum optio nemo tempora
        provident voluptatum? Nostrum molestiae voluptas dignissimos.
      </p>
    </div>
  );
};

export default TextGp;
