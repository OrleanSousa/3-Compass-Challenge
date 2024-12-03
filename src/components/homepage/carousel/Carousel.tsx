import FeaturedCarousel from './CarouselItem'

const Carousel = () => {
  return (
    <div className='bg-carouselback h-[670px] flex pl-[100px] py-[44px] items-center gap-[42px]'>
        <div className='w-[422px] h-[151px]'>
            <h2>50+ Beautiful rooms 
            inspiration</h2>
            <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            <button>Explore More</button>
        </div>
        <div className='w-[1196px] h-[582px]'>
            <FeaturedCarousel/>
        </div>
    </div>
  )
}

export default Carousel