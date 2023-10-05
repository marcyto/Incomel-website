
import lottie from 'lottie-web';
import { useEffect, useRef, useState } from 'react';
import Animation from './animation.json';
import './animation.css';
import {BsWhatsapp} from 'react-icons/bs';
import { motion } from "framer-motion"

const WebAnimation = () => {
    
    const container = useRef(null)
    const [cascataActive, setCascataActive] = useState(false);
    useEffect(()=>{
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: Animation,
        });
        console.log(cascataActive)
    }, [])
    
    return(
    <div className='linkWhats'>
        <button onClick={()=> setCascataActive(!cascataActive)} className='linkWhats' ref={container}></button> 

        {cascataActive && (
            <>
                <motion.div
                animate={{
                x: 70,
                y: -60,
                scale: 1,
                rotate: 0,
                }}
                >
                    <a className='whats_button' href="https://api.whatsapp.com/send?phone=558230237970">Maceió-Jatiúca<BsWhatsapp color="#ffffff"size={30}/></a>
                </motion.div>
                <motion.div
                animate={{
                x: 70,
                y: -110,
                scale: 1,
                rotate: 0,
                }}
                >
                    <a className='whats_button' href="https://api.whatsapp.com/send?phone=5582982011349">Maceió-Jaraguá<BsWhatsapp color="#ffffff"size={30}/></a>
                </motion.div>
                <motion.div
                animate={{
                x: 70,
                y: -160,
                scale: 1,
                rotate: 0,
                }}
                >
                    <a className='whats_button' href="https://api.whatsapp.com/send?phone=558134972800">Recife-Imbiribeira<BsWhatsapp color="#ffffff"size={30}/></a>
                </motion.div>
                <motion.div
                animate={{
                x: 70,
                y: -210,
                scale: 1,
                rotate: 0,
                }}
                >
                    <a className='whats_button' href="https://api.whatsapp.com/send?phone=558134972800">João Pessoa-Nordife<BsWhatsapp color="#ffffff"size={30}/></a>
                </motion.div>
                
                
            </>
        )}
        
    </div>
       
    )
}
export default WebAnimation;