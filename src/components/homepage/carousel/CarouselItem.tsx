import { Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";


const FeaturedCarousel = () => {
  const slides = [
    {
      id: 1,
      title: "Inner Peace",
      description: "Modern and elegant chair for your cafe.",
      image: 'https://orlean2024.s3.us-east-2.amazonaws.com/homepageimg/slide1.png',
    },
    {
      id: 2,
      title: "Inner Peace",
      description: "Comfortable and stylish living room design.",
      image: 'https://orlean2024.s3.us-east-2.amazonaws.com/homepageimg/slide2.png',
    },
    {
      id: 3,
      title: "Inner Peace",
      description: "A serene workspace for productivity.",
      image: 'https://orlean2024.s3.us-east-2.amazonaws.com/homepageimg/slide3.png',
    },
    {
      id: 4,
      title: "Inner Peace",
      description: "A serene workspace for productivity.",
      image: 'https://orlean2024.s3.us-east-2.amazonaws.com/homepageimg/slide3.png',
    },
    {
      id: 5,
      title: "Inner Peace",
      description: "A serene workspace for productivity.",
      image: 'https://orlean2024.s3.us-east-2.amazonaws.com/homepageimg/slide1.png',
    },
    {
      id: 6,
      title: "Inner Peace",
      description: "A serene workspace for productivity.",
      image: 'https://orlean2024.s3.us-east-2.amazonaws.com/homepageimg/slide2.png',
    },
    {
      id: 7,
      title: "Inner Peace",
      description: "A serene workspace for productivity.",
      image: 'https://orlean2024.s3.us-east-2.amazonaws.com/homepageimg/slide3.png',
    },

  ];

  return (
    <Splide
      options={{
        pauseOnHover: true,
        arrows: true, 
        pagination: true, 
        gap: '24px',
        perPage: 3,
        perMove: 1,
        rewind: true,
        loop: true, 
      }}
      aria-label="Featured Products"
      className="mx-auto max-w-7xl"
    >
      {slides.map((slide) => (
         

        <SplideSlide key={slide.id}>
          <div className="relative w-[404px] h-[582px]">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-[404px] h-[582px] object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end ml-[24px] mb-[24px]">
              <div className="relative flex flex-col justify-center items-center bg-white w-[217px] h-[130px]">
                <div className="flex items-center gap-2 text-textMid">
                  <span className="text-lg font-medium">01</span>
                  <TfiLayoutLineSolid size={24} /> 
                  <span className="text-lg font-medium">Bed Room</span>
                </div>
                <h2 className="text-[28px] font-semibold mt-2">{slide.title}</h2>
                <div
                  className="bg-buttonBord absolute w-[48px] h-[48px] flex 
                justify-center items-center bottom-0 -right-[48px]" 
                >
                  <HiOutlineArrowSmallRight size={30} className='text-white'/>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        
      ))}
    </Splide>
  );
};

export default FeaturedCarousel;
