import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import foto1 from '../../../assets/foto1.png'; // ajuste conforme o caminho real
import traco from '../../../assets/traco.svg'; // ajuste conforme o caminho real

const FeaturedCarousel = () => {
  const slides = [
    {
      id: 1,
      title: "Inner Peace",
      description: "Modern and elegant chair for your cafe.",
      image: foto1,
    },
    {
      id: 2,
      title: "Inner Peace",
      description: "Comfortable and stylish living room design.",
      image: foto1,
    },
    {
      id: 3,
      title: "Inner Peace",
      description: "A serene workspace for productivity.",
      image: foto1,
    },
    {
      id: 4,
      title: "Inner Peace",
      description: "A fresh and vibrant kitchen layout.",
      image: foto1,
    },
    {
      id: 5,
      title: "Inner Peace",
      description: "A fresh and vibrant kitchen layout.",
      image: foto1,
    },
    {
      id: 6,
      title: "Inner Peace",
      description: "A fresh and vibrant kitchen layout.",
      image: foto1,
    },
    {
      id: 7,
      title: "Inner Peace",
      description: "A fresh and vibrant kitchen layout.",
      image: foto1,
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
      }}
      aria-label="Featured Products"
      className="mx-auto max-w-7xl"
    >
      {slides.map((slide) => (
        <SplideSlide key={slide.id}>
          <div className="relative w-[404px] h-[582px] overflow-hidden">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-[404px] h-[582px] object-cover "
            />
            <div className="absolute inset-0  flex flex-col justify-end ml-[24px] mb-[24px]">
                <div className='flex flex-col justify-center items-center bg-white w-[217px] h-[130px]'>   
                    <div className="flex items-center gap-2 text-textMid ">
                        <span className="text-lg font-medium">01</span>
                        <img src={traco} alt="separador" className="w-6 h-1" />
                        <span className="text-lg font-medium">Bed Room</span>
                    </div>
                    <h2 className="text-[28px] font-semibold mt-2">{slide.title}</h2>
                </div>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default FeaturedCarousel;
