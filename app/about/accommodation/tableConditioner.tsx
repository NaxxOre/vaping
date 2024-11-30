import Table from '@/components/table/table';
import TableMobile from '@/components/table/tableMobile';
function TableConditioner() {

    const dataHeader = [
        {
          name: "For Local Students",
          style: "w-[20%]"
        },
        {
          name: "For Foreign Students",
          style: "w-[20%]"
        },
        
      ]
    
      const data = [
        ["Lecture Period","15 weeks"],
        ["Private Study","1 week"],
        ["Examination","2 weeks"],
        ["Total Duration","1 weeks"],
        ["Vacation","4-5 weeks"]
      ]
    

    return (
      
     <>
        
        <div className="xl:grid xl:grid-cols-2 flex flex-col items-center gap-[40px] xl:py-[96px] xl:px-[72px] my-[56px]">
                
                <div className="bg-[#f0f8ff] xl:col-span-1 px-[24px] py-[40px] rounded-[32px]">
                    <h3 className='md:text-[48px] text-[35px]  mb-5'>
                        Requirements
                    </h3>
                    <p className="md:text-[18px] text-[14px] text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className='xl:col-span-1'>
                    <div className='hidden lg:block'>
                        <Table dataHeader={dataHeader} data={data} />   
                    </div>
                    <div className='block lg:hidden'>
                        <TableMobile dataHeader={dataHeader} data={data} />
                    </div>
                </div>
            </div>
    </>
    

    );
  }
  
  export default TableConditioner;
