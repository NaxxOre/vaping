import PdfView from './PdfView';
import ImageHeader from "@/components/imageheader/header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Six-year journey UIT",
    description: "Touch with our six year successful journey at UIT",
};

const AcademicRule = () => {
  // Directly reference the file path from the public folder
  const pdfFile = '/UIT6YearsJourney.pdf';

  return (
    <div className="sixyearjourney">
      <ImageHeader url="/images/bg.jpg" name="Six Year Journey" />
      <div className="px-[5%]">
        <PdfView file={pdfFile} />
      </div>
    </div>
  );
};

export default AcademicRule;
