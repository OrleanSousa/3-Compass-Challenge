import trophy from '../../assets/trophy.png'
import verific from '../../assets/V.png'
import packeg from '../../assets/packeg.png'
import suport from '../../assets/suport.png'

const Qualitys = () => {
  return (
    <div className='flex justify-center items-center bg-qualitback w-[1440px] h-[270px]'>
        <div className='flex w-[1344px] h-[70px] justify-between'>
            <div className='flex items-center gap-[10px] '>
                <img src={trophy} alt="" className='w-[52.77px] h-[60px]'/>
                <div>
                    <h2 className='text-[25px] font-semibold text-textqualit'>High Quality</h2>
                    <p className='text-textCardB text-[20px]'>crafted from top materials</p>
                </div>
            </div>
            <div className='flex items-center gap-[10px]'>
                <img src={verific} alt="" className='w-[60px] h-[58.13px]'/>
                <div>
                    <h2 className='text-[25px] font-semibold text-textqualit'>Warranty Protection</h2>
                    <p className='text-textCardB text-[20px]'>Over 2 years</p>
                </div>
            </div>
            <div className='flex items-center gap-[10px]'>
                <img src={packeg} alt="" className='w-[60px] h-[55.97px]'/>
                <div>
                    <h2 className='text-[25px] font-semibold text-textqualit'>High Quality</h2>
                    <p className='text-textCardB text-[20px]'>crafted from top materials</p>
                </div>
            </div>
            <div className='flex items-center gap-[10px]'>
                <img src={suport} alt="" className='w-[52.94px] h-[60px]'/>
                <div>
                    <h2 className='text-[25px] font-semibold text-textqualit'>24 / 7 Support</h2>
                    <p className='text-textCardB text-[20px]'>Dedicated support</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Qualitys