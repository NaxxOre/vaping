
import ImageHeader from "@/components/imageheader/header";
import CarouselSlider from "./carouselSlider";
import HostelInfo from "./hostelInfo";
import Offer from "./offer";
import TableConditioner from "./tableConditioner";
// import Upcoming from "./Upcoming";

function Accommodation(){
    return (
        <div className="accommodation w-full">
            
                <ImageHeader name='Accommodation' url='/images/bg.jpg'/>
                <div className="px-[6%] w-full">
                    <div className="py-[72px]">
                        <div className="xl:grid xl:grid-cols-2 flex flex-col justify-center items-center gap-[10px]">
                            <div className="w-full h-full flex items-center" >
                                <h3 className="xl:text-[64px] text-[35px] text-[#3798a6]">Your Campus Home</h3>
                            </div>
                            <div className="bg-[#f0f8ff] px-[24px] py-[40px] rounded-[32px]" >
                                <p className="text-[14px] md:text-[18px] text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>
                    <CarouselSlider />
                </div>
                <div className="bg-[#f0f8ff] rounded-[32px] px-[7%] md:px-[5%] py-[72px] my-[72px]">
                    <div className="xl:grid xl:grid-cols-3  items-center flex flex-col-reverse">
                        
                        <div className="xl:col-span-1" >
                            <p className="md:text-[18px] text-[14px] text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className="xl:col-span-2 w-full h-full flex items-center justify-center" >
                            <h3 className="xl:text-[64px] text-[30px] text-[#3798a6] xl:w-[700px] w-full">Experience Comfortable and Convenient Campus: </h3>
                        </div>
                    </div>
                </div>
                <div className="px-[5%]">
                    <HostelInfo />
                </div>
                <Offer />
                
                <div className="lg:px-[5%]">
                    <TableConditioner />
                </div>
                
                <div className="bg-[#f0f8ff] rounded-[32px]  md:px-[72px] px-[7%] py-[72px]    ">
                    <div className="xl:grid xl:grid-cols-2 flex flex-col  items-center">
                        
                        
                        <div className="zl:col-span-1 w-full h-full flex items-center justify-center" >
                            <h3 className="xl:text-[64px] text-[35px] text-[#3798a6] w-[700px]">Application for Hostel</h3>
                        </div>
                        <div className="xl:col-span-1" >
                            <p className="md:text-[18px] text-[14px] text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
           
        </div>
    )
}

export default Accommodation;