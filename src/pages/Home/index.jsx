
import Header from "../../components/Header";
import './home.css';
import { Link } from "react-router-dom";
import {} from 'react-icons/'
import { FaCreditCard, FaWhatsapp } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import SliderProducts from "../../components/SliderProdutos";
import SliderBrands from "../../components/SliderMarcas";
import {BsFillBoxSeamFill} from 'react-icons/bs';
import {GiSmartphone} from 'react-icons/gi';
import SliderBanner from "../../components/SliderBanner";
import Footer from "../../components/Footer";
import Cards from "../../components/Cards";
import { useEffect } from "react";

export default function Home(){
    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [])
    return(
        <div>
            <Header/>
            <div className="content">
                <div className="banner">
                    <SliderBanner />
                </div>
                <Cards/>
                <div className="produtos">
                    <h1>Nossos Produtos</h1>
                    <SliderProducts active={Header.active}/>
                </div>
                <div className="marcas">
                    <h1>Melhores Marcas</h1>
                    <SliderBrands />
                </div>
            </div>
            
            <Footer/>
            
        </div>
    );
}