import {Swiper, SwiperSlide} from 'swiper/react';
import { imageBanner } from '../../assets/Banner';

import {Navigation, Pagination, Autoplay} from 'swiper';

import './sliderbanner.css'

import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function SliderBanner(){
    return(
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false
        }}
        grabCursor={true}
        pagination={true}
        
        >
            {imageBanner.map((item, index) => {
                return (
                    <SwiperSlide className='banner_slider' key={index}>
                        <img src={item.image} alt='Banner image'/>
                    </SwiperSlide>
                )
            })}

        </Swiper>
    );
}