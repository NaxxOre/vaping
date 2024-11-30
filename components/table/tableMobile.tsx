import { TableProps } from "@/type";

function TableMobile({dataHeader, data}: TableProps) {
    return (
       
        <div className="mt-5 mb-14">
            {data.map((item,index) =>  <div key={index} className={`py-6 grid grid-cols-[0.5fr_1fr] gap-4 ${(index % 2 !== 0) && 'bg-[#F5F5F5]'}`}>
                <div className="flex flex-col">
                    {dataHeader.map((item,index) => <h6 key={index} className="font-normal text-base leading-[22px] py-2 px-4">{item.name}</h6>)}
                </div>
                <div>
                    {data[index].map((item,index) => <h6 key={index} className="font-normal text-xs leading-[18px] py-[10px] px-4 text-[#1C1D2080]">{item}</h6>)}
                </div>

        </div>)}
        </div>
        
           

        

       

    
   
       
    )
}


export default TableMobile;