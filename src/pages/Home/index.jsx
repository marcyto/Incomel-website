
import Header from "../../components/Header";
import './home.css';
import SliderProducts from "../../components/SliderProdutos";
import SliderBrands from "../../components/SliderMarcas";
import SliderBanner from "../../components/SliderBanner";
import Footer from "../../components/Footer";
import Cards from "../../components/Cards";
import { useEffect } from "react";
import OrcamentoCall from '../../components/OrcamentoCall';

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
            <OrcamentoCall/>
            
            <Footer/>
            
        </div>
    );
}