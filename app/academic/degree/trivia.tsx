"use client"

import './Degree.css';
// import { useSelector } from 'react-redux';

interface TextItem {
  head: string;
  body: string | string[];
  type?: 'list' | 'para';
}

const textsEn: TextItem[] = [
  {
    head: "Program Highlight",
    body: ["concentrates on creating links between theory and practice.", "covers a wide variety of software and hardware technologies and their applications.", "is designed to equip students with the fundamental understanding and practical skills needed by the future leaders of computing and related professions."],
    type: "list"
  },
  {
    head: "Program Highlight",
    body: ["A post graduate diploma aims to provide a qualification typically awarded after a bachelor’s degree. The program is 42 weeks intensive sessions, including a required paid internship. It consists of a vocational course after an academic program. Any university graduates are"],
    type: "para"
  },
  {
    head: "Program Highlight",
    body: ["concentrates on creating links between theory and practice.", "covers a wide variety of software and hardware technologies and their applications.", "is designed to equip students with the fundamental understanding and practical skills needed by the future leaders of computing and related professions."],
    type: "list"
  }
];

const textsMyn: TextItem[] = [
  {
    head: "အစီအစဉ် အသားပေး",
    body: "သတင်းအချက်အလက်နည်းပညာတက္ကသိုလ်သည် ဘာသာရပ်နယ်ပယ်များစွာတွင် ဘွဲ့ကြို၊ ဒီပလိုမာ၊ မာစတာနှင့် ပါရဂူအဆင့် ကျောင်းသားများအတွက် ဘွဲ့ကြိုနှင့် ဘွဲ့လွန်သင်တန်းများကို ဆော့ဖ်ဝဲလ်အင်ဂျင်နီယာ၊ အသိပညာအင်ဂျင်နီယာ၊ စွမ်းဆောင်ရည်မြင့်မားသော ကွန်ပျူတာ၊ စီးပွားရေးသတင်းအချက်အလက်စနစ်တို့ကို ပေးဆောင်ပါသည်။"
  },
  {
    head: "အသက်မွေးဝမ်းကြောင်း",
    body: "သတင်းအချက်အလက်နည်းပညာတက္ကသိုလ်သည် ဘာသာရပ်နယ်ပယ်များစွာတွင် ဘွဲ့ကြို၊ ဒီပလိုမာ၊ မာစတာနှင့် ပါရဂူအဆင့် ကျောင်းသားများအတွက် ဘွဲ့ကြိုနှင့် ဘွဲ့လွန်သင်တန်းများကို ဆော့ဖ်ဝဲလ်အင်ဂျင်နီယာ၊ အသိပညာအင်ဂျင်နီယာ၊ စွမ်းဆောင်ရည်မြင့်မားသော ကွန်ပျူတာ၊ စီးပွားရေးသတင်းအချက်အလက်စနစ်တို့ကို ပေးဆောင်ပါသည်။"
  },
  {
    head: "အသက်မွေးဝမ်းကြောင်း",
    body: "သတင်းအချက်အလက်နည်းပညာတက္ကသိုလ်သည် ဘာသာရပ်နယ်ပယ်များစွာတွင် ဘွဲ့ကြို၊ ဒီပလိုမာ၊ မာစတာနှင့် ပါရဂူအဆင့် ကျောင်းသားများအတွက် ဘွဲ့ကြိုနှင့် ဘွဲ့လွန်သင်တန်းများကို ဆော့ဖ်ဝဲလ်အင်ဂျင်နီယာ၊ အသိပညာအင်ဂျင်နီယာ၊ စွမ်းဆောင်ရည်မြင့်မားသော ကွန်ပျူတာ၊ စီးပွားရေးသတင်းအချက်အလက်စနစ်တို့ကို ပေးဆောင်ပါသည်။"
  },
  {
    head: "အသက်မွေးဝမ်းကြောင်း",
    body: "သတင်းအချက်အလက်နည်းပညာတက္ကသိုလ်သည် ဘာသာရပ်နယ်ပယ်များစွာတွင် ဘွဲ့ကြို၊ ဒီပလိုမာ၊ မာစတာနှင့် ပါရဂူအဆင့် ကျောင်းသားများအတွက် ဘွဲ့ကြိုနှင့် ဘွဲ့လွန်သင်တန်းများကို ဆော့ဖ်ဝဲလ်အင်ဂျင်နီယာ၊ အသိပညာအင်ဂျင်နီယာ၊ စွမ်းဆောင်ရည်မြင့်မားသော ကွန်ပျူတာ၊ စီးပွားရေးသတင်းအချက်အလက်စနစ်တို့ကို ပေးဆောင်ပါသည်။"
  }
];

function Trivia() {
//   const language = useSelector((state: { language: { value: string } }) => state.language.value);

  return (
    <div className="h-fit lg:pb-[72px] py-4 mx-auto flex justify-center items-center bg-[#f0f8ff] text-[#1C1D20] w-[90%]">
      <div className="w-[112%] grid lg:grid-cols-3 lg:gap-x-8">
        {(true ? textsEn : textsMyn).map((item, index) => (
          <div key={index}>
            <div className="w-full">
              <div className="flex flex-row w-full md:w-[100%] items-center lg:pt-8 lg:pb-5 pb-[25.33px]">
                <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:me-[7.25px] me-[12px]">
                  <rect y="0.143066" width="38" height="38.6513" rx="12" fill="#3798A6" />
                  <path d="M23.5581 12.1432C23.0154 12.1412 22.4877 12.3207 22.0587 12.6532C21.6297 12.9856 21.3242 13.4519 21.1907 13.9779C21.0572 14.5039 21.1033 15.0595 21.3218 15.5562C21.5403 16.053 21.9185 16.4625 22.3965 16.7196C22.1187 17.2941 21.6849 17.7788 21.1446 18.1183C20.6043 18.4578 19.9793 18.6383 19.3412 18.6392H19.3256L17.0921 18.6301C16.2861 18.6359 15.5127 18.9494 14.9302 19.5066V16.9774C15.5231 16.8564 16.05 16.5196 16.4086 16.0322C16.7673 15.5448 16.9322 14.9416 16.8714 14.3395C16.8105 13.7374 16.5283 13.1794 16.0795 12.7736C15.6306 12.3678 15.047 12.1431 14.4419 12.1431C13.8367 12.1431 13.2532 12.3678 12.8043 12.7736C12.3554 13.1794 12.0732 13.7374 12.0124 14.3395C11.9515 14.9416 12.1164 15.5448 12.4751 16.0322C12.8337 16.5196 13.3606 16.8564 13.9535 16.9774V21.0967C13.9535 21.2262 14.0049 21.3504 14.0965 21.442C14.1881 21.5336 14.3123 21.5851 14.4419 21.5851C14.4536 21.5851 14.4627 21.5792 14.4744 21.5786C14.4914 21.5817 14.5086 21.5839 14.5259 21.5851C14.634 21.585 14.739 21.5491 14.8245 21.4828C14.9099 21.4166 14.971 21.3238 14.998 21.2191C15.1171 20.7572 15.3865 20.3481 15.7637 20.0562C16.141 19.7643 16.6047 19.6062 17.0817 19.6068H17.0901L19.3236 19.616H19.3419C20.1889 19.6141 21.0171 19.3663 21.726 18.9027C22.4348 18.4391 22.9872 17.7745 23.2929 17.0332C23.4476 16.5358 23.4518 16.0107 23.3035 15.5247C23.1553 15.0387 22.8669 14.6126 22.4715 14.3065C22.2941 14.0958 22.1474 13.8643 22.0444 13.6149C22.0159 13.4557 22.0205 13.2877 22.0543 13.1382C22.0877 13.0305 22.1407 12.9466 22.2043 12.8887C22.2297 12.8592 22.2898 12.7778 23.0361 12.7787H23.5581Z" fill="white" />
                </svg>
                <h3 className="text-[24px] font-semibold">{item.head}</h3>
              </div>
              <div>
                {item.type === "list" ? (
                  <ul className="font-semibold text-[#4a4a4a] text-[16px]">
                    {Array.isArray(item.body) &&
                      item.body.map((text, i) => <li key={i} className="pb-1">{text}</li>)}
                  </ul>
                ) : (
                  <p className="text-[16px] font-semibold text-[#4a4a4a]">{item.body}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trivia;
