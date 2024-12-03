import table from '../../../assets/table.svg'
import room from '../../../assets/Image-living room.svg'
import jar from '../../../assets/jar.svg'


const SecondSection = () => {
  return (
    <div className="flex flex-col  text-center w-[1183px] h-[685px] mt-[56px] ml-[131px] ">
        <div>
            <h2 className="text-[32px] font-extrabold font-Poppins text-textblack">Browse The Range</h2>
            <p className="text-[20px] text-textgray">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='m-auto'>
            <ul className='flex gap-[20px]'>
                <li >
                    <img src={table} alt="" className='w-[381px] h-[480px] mb-[30px]'/>
                    <p className='font-semibold text-2xl'>Dining</p>
                </li>
                <li>
                    <img src={room} alt="" className='w-[381px] h-[480px] mb-[30px]'/>
                    <p className='font-semibold text-2xl'>Living</p>
                </li>
                <li>
                    <img src={jar} alt="" className='w-[381px] h-[480px] mb-[30px]'/>
                    <p className='font-semibold text-2xl'>Bedroom</p>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default SecondSection