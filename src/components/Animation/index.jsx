
import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';
import Animation from './animation.json';

const WebAnimation = () => {
    
    const container = useRef(null)

    useEffect(()=>{
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: Animation,
        });

    }, [])
    
    return(
        <a href="https://api.whatsapp.com/send?phone=5582982011349" className='linkWhats' ref={container}></a> 
    )
}
export default WebAnimation;