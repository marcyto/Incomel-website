import { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Cards from '../../components/Cards';
import SliderLoja from "../../components/SliderLoja";
import OrcamentoCall from "../../components/OrcamentoCall";
import './sobre.css';

export default function Sobre(){

    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [])

    return(
        <div>   
            <Header/>
            <div className="container section-about">
                <div className="content sobre">
                    <div className="about">
                        <SliderLoja/>
                    </div>
                    <div className="about_text">
                        <h1>QUEM SOMOS</h1>
                        <p>
                            A Incomel é uma empresa brasileira com mais de 35 anos de 
                            experiência no mercado de materiais elétricos. 
                            Desde sua fundação em 1988, a empresa tem se dedicado 
                            a oferecer a mais alta qualidade em produtos e serviços para seus clientes.
                        </p>
                        <p>
                            Com um amplo portfólio de produtos, incluindo materiais elétricos, iluminação, 
                            automação, segurança, telefonia e informática, a Incomel se destaca pela variedade 
                            e qualidade de suas soluções.
                        </p>
                        <p>
                            Além disso, a Incomel é reconhecida no mercado pela qualidade de seus produtos e pelo 
                            comprometimento com a segurança e a eficiência energética. A empresa trabalha apenas com 
                            as melhores marcas do mercado, garantindo a confiabilidade e a durabilidade de seus produtos
                        </p>
                        <p>
                            Seja para projetos residenciais, comerciais ou industriais, a Incomel está sempre pronta para oferecer 
                            as melhores soluções em materiais elétricos. Com a Incomel, você pode contar com a expertise de uma 
                            empresa sólida e confiável, que está sempre em busca da satisfação total de seus clientes.
                        </p>
                    </div>
                    
                </div>
                <Cards/>
                    <OrcamentoCall/>
                
            </div>
            <Footer/>
        </div>
    );
}




