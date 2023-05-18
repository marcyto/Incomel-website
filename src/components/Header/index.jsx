
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-incomel.webp'
import {FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt} from "react-icons/fa"
import './header.css';
import { useEffect, useState } from 'react';

export default function Header() {


    const [active, setActive] = useState('nav_menu');
    const [toggleIcon, setToggleIcon] = useState('nav_toggler');


    const toggleMenu = () => {

        active === 'nav_menu' ? setActive('nav_menu nav_active') : setActive('nav_menu');
        toggleIcon === 'nav_toggler' ? setToggleIcon('nav_toggler toggle') : setToggleIcon('nav_toggler');

    }


    return(
        <nav className="nav">
            <div className="logo-img">
                <Link to='/' className='nav_brand'><img src={logo}/></Link>
            </div>
            <ul className={active}>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/sobre">Quem somos</Link></li>
                <li><Link to="/orcamentos">Orçamentos</Link></li>
                <li><Link to="/contato">Contato</Link></li>
                <div className='midia-icons'>
                    <Link to="/contato"><FaMapMarkerAlt size={24} color='#FFF'/></Link>
                    <a href='https://www.facebook.com/pages/INCOMEL-Comércio-de-Materiais-Elétricos/195578097154094'><FaFacebookF size={24} color='#FFF'/></a>
                    <a href='https://instagram.com/incomel.oficial?igshid=MzRlODBiNWFlZA=='><FaInstagram size={24} color='#FFF'/></a>
                </div>
            </ul>


            <div className={toggleIcon} onClick={toggleMenu}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </nav>
    );
}
