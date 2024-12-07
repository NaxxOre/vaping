import PaginatedItems from "./PaginatedItems"; 
import ImageHeader from "@/components/imageheader/header";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Academic-Labs UIT",
  description: "Explore the various academic labs at UIT",
};

const AcademicLabs = () => {
  return (
    <div className="academiclabs">
      <ImageHeader url="/images/bg.jpg" name="Academic Labs" />
      <div className="px-[5%]">
        <PaginatedItems />
      </div>
    </div>
  );
};

export default AcademicLabs;
