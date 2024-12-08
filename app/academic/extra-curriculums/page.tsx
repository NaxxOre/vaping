import ImageHeader from "@/components/imageheader/header";
import { Metadata } from "next";
import Body from './body';
import CuroselDesktop from './CuroselDesktop';
import Academy from './Academy';
import AcademyList from "./AcademyList";
export const metadata: Metadata = {
  title: "ExtraCurriculums",
  description: "Explore ExtraCurriculums at UIT",
};

const Extracurri = () => {
  return (
    <div className="ExtraCurriculums">
      <ImageHeader url="/images/mainPhoto.png" name="ExtraCurriculums" />
      
      {/* Body Section */}
      <div className="w-full px-4 lg:px-6">
           <Body />
     </div>


      
      {/* Curosel Section */}
      <div className="w-full px-4 lg:px-6 py-[72px] rounded-[32px] bg-[#F0F8FF]">
        <CuroselDesktop />
      </div>
      <div className="py-14 lg:py-[72px] flex flex-col gap-y-8 mx-4 lg:mx-12">
         <Academy />
         <AcademyList/>
       </div>

    </div>
  );
};

export default Extracurri;
