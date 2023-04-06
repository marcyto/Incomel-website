
import call from '../../assets/call.png';
import './orcamentoCall.css';
import {FaWhatsapp} from 'react-icons/fa'

export default function OrcamentoCall(){
    return(
        <div className="orcamento-call">
            <div className='gradient'>
                <a className='link_img' href='https://api.whatsapp.com/send?phone=5582982011349'>
                    <img src={call}/>
                </a>
                <a className='link_msg' href='https://api.whatsapp.com/send?phone=5582982011349'>
                
                    Compre pelo <br/><span> Whatsapp</span>
                    <a className='button_link'>
                        <FaWhatsapp size={25}/>
                        Fale Conosco
                    </a>
                </a>
                
            </div>
        </div>
    )
}