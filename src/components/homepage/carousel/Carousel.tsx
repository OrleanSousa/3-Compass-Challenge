import FeaturedCarousel from './CarouselItem'

const Carousel = () => {
  return (
    <div className='bg-carouselback h-[670px] mt-[69px] flex pl-[100px] py-[44px] items-center '>
        <div className='w-[422px]h-[151px] mr-[42px]'>
            <h2 className='text-[40px] w-[422px] font-bold text-textMid'>50+ Beautiful rooms 
            inspiration</h2>
            <p className='w-[368px]'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            <button className='w-[176px] h-[48px] bg-buttonBord mt-[25px] text-white font-semibold'>Explore More</button>
        </div>
        <div className='w-[1196px] h-[582px] flex ml-[42pxpx] overflow-hidden'>
            <FeaturedCarousel/>
        </div>
    </div>
  )
}

export default Carousel