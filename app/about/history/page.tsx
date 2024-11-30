import Image from "next/image";
import { HistoryType } from "@/type";
import ImageHeader from "@/components/imageheader/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "History",
  description: "History of University of Information Technology, Yangon, Myanmar"
}

function History() {
  const itemsData: HistoryType[] = [
    {
      id: 1,
      logo: "/images/logoIcon.svg", // Use the relative URL
      title: "Officially renamed on 15th January, 2015",
      p: "UIT produces about 200 Undergraduate students every year.",
    },
    {
      id: 2,
      logo: "/images/graduateIcon.svg", // Use the relative URL
      title: "What we offer",
      p: "UIT offers Undergraduate and Post-graduate courses for Bachelor, Diploma, Master’s and Doctorate level students in a wide range of subject areas.",
    },
    {
      id: 3,
      logo: "/images/buildingIcon.svg", // Use the relative URL
      title: "Myanmar’s main center of research in ICT",
      p: "UIT promotes the productivity and the standard of living of the nation.",
    },
  ];

  return (
    <>
      <div className="overflow-x-hidden w-full ">
        <ImageHeader url="/images/bg.jpg" name="History" />      
        <div className="flex flex-col md:grid md:grid-cols-2 p-[4%]">
          <div className="w-full flex justify-center">
            {/* Replace img with Image */}
            <Image
              src="/images/history1.svg" // Corrected path for arrow
              alt="Arrow illustration"
              className="w-[350px] md:w-[450px]"
              width={450}
              height={350}
            />
          </div>
          <div className="lg:ml-20 mt-12">
            <h1 className="lg:text-3xl text-2xl font-semibold text-center">History of UIT</h1>
            <p className="p-5 text-justify lg:text-xl text-lg tracking-normal">
              The University Computer Center (UCC) was established in 1971 but
              it changed into the Institute of Computer Science and Technology
              (ICST) in 1988. On 1st July, 1998, it became the University of
              Computer Studies, Yangon. There are currently altogether 25
              Computer Universities around the country. The University of
              Computer Studies (Bahan Campus) was separately established on 3rd
              December, 2012, as the Center of Excellence to produce the
              competent computer professionals and specialists who will become
              invaluable human resources in ICT sector.
            </p>
          </div>
        </div>

        {/* UIT Logo Section */}
        <div>
          <div className="mb-16 w-full flex flex-col">
            {/* Replace img with Image */}
            <Image
              src="/images/uitlogo.jpg" // Corrected path for uitlogo
              alt="UIT Logo"
              className="w-full hidden max-1052:block"
              width={800}
              height={400}
            />
            <div className="w-full hidden max-1052:block mt-[60px] text-[#077d81] text-[40px] bg-[#f0f8ff] p-[4%] rounded-md">
              <p className="text-center">
                "Towards a brighter future through innovation in ICT"
              </p>
            </div>
          </div>
          {/* Replace img with Image */}
          <Image
            src="/images/towards.svg" // Corrected path for toward
            alt="Towards illustration"
            className="w-full max-1052:hidden block"
            width={800}
            height={400}
          />
        </div>

        {/* Items Section */}
        <ul className="px-10 flex flex-row xl:grid xl:grid-cols-3 xl:gap-x-[20px] gap-x-[15px] max-1052:justify-center justify-between w-full items-center flex-wrap xl:gap-y-[20px] gap-y-[30px] mt-10 mb-12 ml-8">
          {itemsData.map((item) => (
            <li key={item.id}>
              <div className="flex flex-col gap-[20px] justify-center items-center sm:justify-start sm:items-start">
                <div className="2xl:w-[520px] xl:w-[380px] xl:h-[380px] w-[300px] h-[350px] rounded-[32px] bg-[#f0f8ff] p-[15%] text-center">
                  {/* Replace img with Image */}
                  <div className="w-full h-14 flex justify-center">
                    <Image
                      src={item.logo}
                      alt={item.title}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="text-xl h-[40px] mt-6 mb-10">
                    {item.title}
                  </div>
                  <div className="mt-3 text-gray-400 lg:text-lg text-justify">{item.p}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default History;
