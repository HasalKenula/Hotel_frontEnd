import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <div className='m-10'>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" className='w-[100px] h-[200px]'/></SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" className='w-[100px] h-[200px]'/></SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" className='w-[100px] h-[200px]'/></SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" className='w-[100px] h-[200px]'/></SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" className='w-[100px] h-[200px]'/></SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" className='w-[100px] h-[200px]'/></SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" className='w-[100px] h-[200px]'/></SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" className='w-[100px] h-[200px]'/></SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" className='w-[100px] h-[200px]'/></SwiperSlide>
      </Swiper>
    </div>
  );
}
