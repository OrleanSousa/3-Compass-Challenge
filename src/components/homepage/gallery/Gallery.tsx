import img1 from '../../../assets/gallery/Rectangle 36.png'
import img2 from '../../../assets/gallery/Rectangle 37.png'
import img3 from '../../../assets/gallery/Rectangle 38.png'
import img4 from '../../../assets/gallery/Rectangle 39.png'
import img5 from '../../../assets/gallery/Rectangle 40.png'
import img6 from '../../../assets/gallery/Rectangle 41.png'
import img7 from '../../../assets/gallery/Rectangle 43.png'
import img8 from '../../../assets/gallery/Rectangle 44.png'
import img9 from '../../../assets/gallery/Rectangle 45.png'

const Gallery = () => {
  return (
    <div className='flex flex-col mt-[67px] w-[1440px] h-[780px] overflow-hidden'>
        <div>
            <p className='text-center mb-2 font-semibold text-xl text-textMid'>Share your setup with</p>
            <h2 className='text-center text-[40px] font-bold'>#FuniroFurniture</h2>
        </div>        
        <div className="flex relative mt-[-21px] ">
            <div className="absolute mt-0 h-[382px]"><img src={img1} alt="" /></div>
            <div className="relative ml-0 mt-[398px] h-[323px]"><img src={img2} alt="" /></div>
            <div className="absolute w-[451px] h-[312px] mt-[70px] ml-[116px]"><img src={img3} alt="" /></div>
            <div className="absolute w-[344px] h-[242px] mt-[398px] ml-[233px]"><img src={img4} alt="" /></div>
            <div className="absolute w-[295px] h-[392px] mt-[156px] ml-[593px]"><img src={img5} alt="" /></div>
            <div className="absolute w-[178px] h-[242px] mt-[463px] ml-[904px]"><img src={img6} alt="" /></div>
            <div className="absolute w-[290px] h-[348px] mt-[72px] ml-[904px]"><img src={img7} alt="" /></div>
            <div className="absolute w-[258px] h-[196px] mt-[463px] ml-[1098px]"><img src={img8} alt="" /></div>
            <div className="absolute top-[16px] left-[1226px] w-[425px] h-[433px]"><img src={img9} alt=""/></div>
        </div>
    </div>
  )
}

export default Gallery