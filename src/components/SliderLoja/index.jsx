import {Swiper, SwiperSlide} from 'swiper/react';
import { imageLoja } from '../../assets/Loja';

import {Navigation, Pagination, Autoplay} from 'swiper';

import './sliderLoja.css';

import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function SliderLoja(){
    return(
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
            delay:2500,
            disableOnInteraction:false
        }}
        navigation={true}
        pagination={true}
        grabCursor={true}
        
        className='product-image-sliderLoja'
        >
            {imageLoja.map((item, index) => {
                return (
                    <SwiperSlide  key={index}>
                        <img src={item.image} alt='Product image'/>
                        <h3>{item.nome}</h3>
                    </SwiperSlide>
                )
            })}

        </Swiper>
    );
}