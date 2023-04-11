
import './cards.css';
import {} from 'react-icons/'
import { FaCreditCard, FaWhatsapp } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import {BsFillBoxSeamFill} from 'react-icons/bs';
import {GiSmartphone} from 'react-icons/gi';

export default function Cards(){
    return(
        <div className="banner-cards">
                   
            <div className="cards" >
                <GiSmartphone size={60} color="#797979"/>
                <FaWhatsapp className="whats" size={30} color="#018d11"/>
                <p>Compre aqui <br/>pelo whatsapp</p>
            </div>

            <div className="cards">
                <FaCreditCard size={40} color="#797979"/>
                <p>Parcele em até<br/>10x sem juros</p>
            </div>
            <div className="cards">
                <TbTruckDelivery size={45} color="#797979"/>
                <p>Entrega<br/>em toda maceió/recife</p>
            </div>
            <div className="cards">
                <BsFillBoxSeamFill size={40} color="#797979"/>
                <p>Retire suas<br/>Compras na loja</p>
            </div>
        </div>
    )
}