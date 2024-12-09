import Headline from "./headline"
import MainSec from "./mainsec"
import Trivia from "./trivia"

function Degree(){
    return(
        <>
            <Headline />
            <div className="w-[112%] ms-[-6%] bg-[#f0f8ff] h-fit text-[#ffffff] rounded-t-[32px] mb-[56px] lg:mb-[72px] overflow-hidden lg:mt-[72px] mt-14">
            <MainSec />
            <Trivia />
            </div>
        </>
    )
}

export default Degree