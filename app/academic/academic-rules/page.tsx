import PdfView from './PdfView';
import ImageHeader from "@/components/imageheader/header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Academic-Rules UIT",
    description: "Learn about UIT's Academic Rules",
};

const AcademicRule = () => {
  // Directly reference the file path from the public folder
  const pdfFile = '/AcademicRules.pdf';

  return (
    <div className="academicrules">
      <ImageHeader url="/images/bg.jpg" name="Academic Rules" />
      <div className="px-[5%]">
        <PdfView file={pdfFile} />
      </div>
    </div>
  );
};

export default AcademicRule;
