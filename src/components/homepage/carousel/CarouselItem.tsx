import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import foto1 from '../../../assets/foto1.png'

const FeaturedCarousel = () => {
  const slides = [
    {
      id: 1,
      title: "Stylish Cafe Chair",
      description: "Modern and elegant chair for your cafe.",
      image: {foto1},
    },
    {
      id: 2,
      title: "Luxury Sofa",
      description: "Comfort and style for your living room.",
      image: "https://via.placeholder.com/800x500?text=Product+2",
    },
    {
      id: 3,
      title: "Minimalist Lamp",
      description: "Perfect lighting for modern spaces.",
      image: "https://via.placeholder.com/800x500?text=Product+3",
    },
  ];

  return (
    <Splide
      options={{
        pauseOnHover: true,
        arrows: true,
        pagination: true,
        gap: '1rem',
      }}
      aria-label="Featured Products"
      className="mx-auto max-w-auto"
    >
      {slides.map((slide) => (
        <SplideSlide key={slide.id}>
          <div className="relative">
            <img
              src={foto1}
              alt={slide.title}
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start text-white p-6 rounded-lg">
              <h2 className="text-2xl font-bold">{slide.title}</h2>
              <p className="text-sm my-4">{slide.description}</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-sm py-2 px-4 rounded transition-all">
                Shop Now
              </button>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default FeaturedCarousel;
