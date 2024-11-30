
import { Metadata } from "next";
import Benefits from "./benefits";
import CarouoselDesktop from "./carouselDesktop";
import FirstPara from "./firstPara";
import ImageHeader from "@/components/imageheader/header";
// import Upcoming from "./Upcoming";

export const metadata: Metadata = {
    title: "Alumni",
    description: "Alumni Network of University of Information Technology, Yangon, Myanmar"
  }

function Alumni({searchParams}: {searchParams: {[key: string]: string | string[] | undefined}}){
    return (
        <div className="alumni">
                <ImageHeader url="/images/bg.jpg" name='Stay Connected with Our Alumni Network'/>
                <div className="px-[5%]">
                    <FirstPara />
                    <CarouoselDesktop hello="hello" />
                    {/* <Upcoming /> */}
                </div>
                <Benefits />
                
        </div>
    )
}

export default Alumni;