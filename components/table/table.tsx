import { TableProps } from "@/type";

function Table({dataHeader, data, center}: TableProps) {
    return (
       
        
        <table className="w-full border-collapse">
        <thead>
            <tr className="bg-[#3798A6] text-white">
                {
                    dataHeader.map((item, index) =>
                    
                            <th key={index} className={` bg-[ #006d71] text-white py-8 center ${item.style} font-normal leading-7 text-2xl`}>{item.name}</th>
                        
                        
                    
                        ) 
                }
                
            </tr>
        </thead>
        <tbody>
            {data.map((item,index) =>
            <tr key={index} className={`${(index % 2 !== 0) && 'bg-[#F5F5F5]' } hover:bg-[#F5F5F5] ${(item[3] === "-") && 'bg-[#F0F8FF]' }`}>
                {
                    item.map((item,index) =>
                        <td key={index} className="">
                            <div className={`flex justify-center text-center items-center font-normal leading-[18px] text-base text-[#1C1D2080] py-8 ${center}`}>{item}</div>
                            
                            </td>
                    )
                }

          
        </tr>
            
            )}
            
            
        </tbody>
    </table>

        

       

    
   
       
    )
}


export default Table;

//styleName: H6;
// font-family: Oldschool Grotesk;
// font-size: 16px;
// font-weight: 400;
// line-height: 18px;
// text-align: left;

