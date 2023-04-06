import {Swiper, SwiperSlide} from 'swiper/react';
import { brandLogos } from '../../assets/Marcas';

import {Navigation, Pagination, Autoplay} from 'swiper';

import './sliderMarcas.css';

import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function SliderBrands(){
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
        
        className='product-image-sliderBrands'
        >
            {brandLogos.map((item, index) => {
                return (
                    <SwiperSlide  key={index}>
                        <img className='image-product' src={item.image} alt='Product image'/>
                        <h3>{item.nome}</h3>
                    </SwiperSlide>
                )
            })}

        </Swiper>
    );
}