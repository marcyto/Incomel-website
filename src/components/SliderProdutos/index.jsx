import {Swiper, SwiperSlide} from 'swiper/react';
import { imageProducts } from '../../assets/Produtos';

import {Navigation, Pagination, Autoplay} from 'swiper';


import './sliderProdutos.css';

import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import { useEffect, useState } from 'react';

export default function SliderProducts(){

    const [windowWidth, setWindowWidth] = useState(0);
    const [size, setSize] = useState(0);

    useEffect(()=>{
        setWindowWidth(window.innerWidth)
        if(windowWidth < 600 ){
            setSize(1);
        }else{
            setSize(5)
        }
    }, [size])
   

    return(
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={size}
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false
        }}
        navigation={true}
        grabCursor={true}
        
        className='product-image-slider'
        >
            {imageProducts.map((item, index) => {
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
