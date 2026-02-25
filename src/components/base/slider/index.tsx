import type { JSX } from 'react'
import { Swiper, SwiperSlide, type SwiperProps } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';
import 'swiper/swiper.css';

// @ts-expect-error: Ignore missing types for swiper styles
import 'swiper/css/effect-fade';
// @ts-expect-error: Ignore missing types for swiper styles
import 'swiper/css/navigation';

type Slides = {
  id: number,
  src: string,
  alt: string
};

type SliderProps = SwiperProps & {
  slides: Slides[]
};


export const Slider: React.FC<SliderProps> = ({  slides, ...props}):JSX.Element => {
  return (
    <div className='relative'>
      <button className="absolute left-2 top-1/2 z-10 -translate-y-1.5 bg-black px-3 py-2 text-white swiper-button-prev-custom">p</button>
      <button className="absolute right-2 top-1/2 z-10 -translate-y-1.5 bg-black px-3 py-2 text-white swiper-button-next-custom">n</button>
      <Swiper 
        {...props} 
        modules={[EffectFade, Navigation]} 
        effect='fade'
        // thumbs={{ swiper: thumbsSwiper }}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom"
        }}>
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className='flex justify-center items-center'>
            <img src={slide.src} alt={slide.src} className='w-6xl h-5xl' />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
}