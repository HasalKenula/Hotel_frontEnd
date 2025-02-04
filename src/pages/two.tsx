import Activity1 from '../assets/activity1.jpg';
import Activity2 from '../assets/activity2.jpg';
import Activity3 from '../assets/activity3.jpg';
import Activity4 from '../assets/activity4.jpg';
import Activity5 from '../assets/activity5.jpg';
import Activity6 from '../assets/activity6.jpg';
import Activity7 from '../assets/activity7.jpg';
import Activity8 from '../assets/activity8.jpg';
import Activity9 from '../assets/activity9.jpg';




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
        <SwiperSlide><img src={Activity1} className='w-[100px] h-[200px]'/></SwiperSlide>
        <SwiperSlide><img src={Activity2}  className='w-[100px] h-[200px]'/></SwiperSlide>
        <SwiperSlide><img src={Activity3}  className='w-[100px] h-[200px]'/></SwiperSlide>
        <SwiperSlide><img src={Activity4}  className='w-[100px] h-[200px]'/></SwiperSlide>
        <SwiperSlide><img src={Activity5}  className='w-[100px] h-[200px]'/></SwiperSlide>
        <SwiperSlide><img src={Activity6} className='w-[100px] h-[200px]'/></SwiperSlide>
        <SwiperSlide><img src={Activity7} className='w-[100px] h-[200px]'/></SwiperSlide>
        <SwiperSlide><img src={Activity8}  className='w-[100px] h-[200px]'/></SwiperSlide>
        <SwiperSlide><img src={Activity9} className='w-[100px] h-[200px]'/></SwiperSlide>
      </Swiper>
    </div>
  );
}
