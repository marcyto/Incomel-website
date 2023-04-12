import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import './contato.css';
import { useEffect } from "react";

export default function Contato(){

    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [])

    return(
        <div>   
            <Header/>
            <div className="container cont">
                <h1 className="tittle">FALE CONOSCO</h1>
                <div className="content contatos">
                    
                    <div className="unidades">
                        <h1>Unidade Jaraguá</h1>
                        <a href="https://api.whatsapp.com/send?phone=5582982011349">
                            <div className="backSvg">
                                <FaWhatsapp color="#FFF"/>
                            </div>
                            <div className="txt">
                                <h2>Vendas pelo whatsapp</h2>
                                <p>82 98201-1349</p>
                            </div>
                        </a>
                        <a href='tel:+558232163300'>
                            <div className="backSvg">
                                <FaPhone color="#FFF"/>
                            </div>
                            
                            <div className="txt">
                                <h2>Televendas</h2>
                                <p>(82) 3216-3300</p>
                            </div>
                            
                        </a>
                        <a href="mailto:vendas@incomel.com.br">
                            <div className="backSvg">
                                <AiOutlineMail color="#FFF"/>
                            </div>
                            
                            <div className="txt">
                                <h2>Mande um email</h2>
                                <p>Clique aqui</p>
                            </div>
                            
                        </a>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.140744896043!2d-35.72775064912279!3d-9.669013404825915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x701457198f02ccd%3A0xd14b5ad79066b8fe!2sIncomel%20Materiais%20El%C3%A9tricos%20Ltda!5e0!3m2!1spt-BR!2sbr!4v1680576841780!5m2!1spt-BR!2sbr" className="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        
                    </div>

                    <div className="unidades">
                        <h1>Unidade Jatiúca</h1>
                        <a href="https://api.whatsapp.com/send?phone=5582982011349">
                            <div className="backSvg">
                                <FaWhatsapp color="#FFF"/>
                            </div>
                            <div className="txt">
                                <h2>Vendas pelo whatsapp</h2>
                                <p>82 98201-1349</p>
                            </div>
                        </a>
                        <a href="tel:+558230237963">
                            <div className="backSvg">
                                <FaPhone color="#FFF"/>
                            </div>
                            <div className="txt">
                                <h2>Televendas</h2>
                                <p>(82) 3023-7963</p>
                            </div>
                            
                        </a>
                        <a href="mailto:contas@incomel.com.br">
                            <div className="backSvg">
                                <AiOutlineMail color="#FFF"/>
                            </div>
                            <div className="txt">
                                <h2>Mande um email</h2>
                                <p>Clique aqui</p>
                            </div>
                            
                        </a>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.3257881288014!2d-35.71034594912312!3d-9.653179104588022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70145baa16b43a3%3A0xcc7a240c395df64a!2sIncomel%20Com%C3%A9rcio%20de%20Materiais%20El%C3%A9tricos%20Ltda!5e0!3m2!1spt-BR!2sbr!4v1680576571442!5m2!1spt-BR!2sbr" className="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        
                    </div>
                    <div className="unidades">
                        <h1>Unidade Recife</h1>
                        <a href="https://api.whatsapp.com/message/IRAWCCHVQ4ZSN1?autoload=1&app_absent=0">
                            <div className="backSvg">
                                <FaWhatsapp color="#FFF"/>
                            </div>
                            <div className="txt">
                                <h2>Vendas pelo whatsapp</h2>
                                <p>81 98201-1349</p>
                            </div>
                            
                        </a>
                        <a href='tel: +558134972800'>
                            <div className="backSvg">
                                <FaPhone color="#FFF"/>
                            </div>
                            <div className="txt">
                                <h2>Televendas</h2>
                                <p>(81) 3497-2800</p>
                            </div>
                            
                        </a>
                        <a href="mailto:incomel.pe@incomel.com.br">
                            <div className="backSvg">
                                <AiOutlineMail color="#FFF"/>
                            </div>
                            <div className="txt">
                                <h2>Mande um email</h2>
                                <p>Clique aqui</p>
                            </div>
                        </a>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.8728847148104!2d-34.90587514913768!3d-8.114423283414249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1fab6f96111f%3A0x859af6ba35dd3a55!2sIncomel%20Materiais%20El%C3%A9tricos%20-%20Recife!5e0!3m2!1spt-BR!2sbr!4v1680576884630!5m2!1spt-BR!2sbr" className="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    
                </div>
                

                    
            </div>
           <Footer/>
        </div>
    );
}