

import { Metadata } from "next";
import quiz from "./quiz";
import Question from "./question";
import HeadingStyle1 from "./headingstyle1";

export const metadata: Metadata = {
    title: "FAQ",
    description: "History of University of Information Technology, Yangon, Myanmar"
}

function FAQ(){

    return(
    <div className="p-[5%]">
        <div className="py-14 lg:py-[72px] grid grid-cols-1 lg:grid-cols-[0.5fr_1fr] gap-10 lg:gap-[157px]">
            <HeadingStyle1 name="The answers to your questions" sizeLead="leading-12" size="text-5xl" mobileSize="text-4xl" mobileSizeLead="leading-[38px]" mobileSpace="pt-[30px]" space="pt-[38px]" tinyText="FAQS" />

            <div className="w-full grid grid-cols-1 gap-5 lg:gap-6">
            {quiz.map((item, index) => (
                <Question 
                key={index} 
                id={item.id} 
                question={true ? item.questionEn : item.questionMyn} 
                answer={true ? item.answerEn : item.answerMyn} 
                />
            ))}
            </div>

        </div>
    </div>
    )
}

export default FAQ;