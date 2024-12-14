import Text from "./text"
import Programs from "./programs"


export default function Container() {
    return(
        <div className="lg:grid lg:grid-cols-2 p-[5%] justify-center items-center bg-[#f0f8ff] mt-5 rounded-[30px] ">
            <Text />
            <Programs />
        </div>
    )
}