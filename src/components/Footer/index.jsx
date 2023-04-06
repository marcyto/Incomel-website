import { Link } from 'react-router-dom'
import './footer.css'
import {AiOutlinePhone, AiOutlineMail} from 'react-icons/ai'
import {FiMapPin} from 'react-icons/fi'


export default function Footer() {
    return(
        <div className='footer'>
            <div className='institucional'>
                <h1>Institucional</h1>
                <Link to="/sobre">Quem somos</Link>
                <Link to="/orcamentos">Orçamentos</Link>
                <Link>Trabalhe Conosco</Link>
                <Link to="/contato">Contato</Link>
            </div>
            <div className='lojas'>
                <h1>Nossas Lojas</h1>
                <div className='lojas-footer'>
                    <div className='atendimentos'>
                        <h3>Incomel - Jaraguá</h3>
                        <p>
                            <FiMapPin size={20}/>
                            Av. Comendador Leão, 167<br/>
                            Jaraguá, Maceió - AL, 57022-240 
                        </p>
                        <a href='tel:+558232163300'><AiOutlinePhone size={20}/> (82) 3216-3300</a>
                        <p><AiOutlineMail size={20}/> vendas@incomel.com.br</p>
                    </div>
                    <div className='atendimentos'>
                        <h3>Incomel - Jatiúca</h3>
                        <p>
                            <FiMapPin size={20}/>
                            Av. Dr. Júlio Marques Luz, 1002<br/>
                            Jatiúca, Maceió - AL, 57035-700
                        </p>
                        <a href="tel:+558230237963"><AiOutlinePhone size={20}/> (82) 3023-7963</a>
                        <p><AiOutlineMail size={20}/> contas@incomel.com.br</p>
                    </div>
                    <div className='atendimentos'>
                        <h3>Incomel - Recife</h3>
                        <p>
                            <FiMapPin size={20}/>
                            R. Aleixo de Abreu, 202<br/>
                            Imbiribeira, Recife - PE, 51160-410
                        </p>
                        <a href='tel: +558134972800'><AiOutlinePhone size={20}/> (81) 3497-2800</a>
                        <p><AiOutlineMail size={20}/> incomel.pe@incomel.com.br</p>
                        
                    </div>
                </div>
            </div>
            <div className='horario'>
                <h1>Horário de<br/>Funcionamento</h1>
                <p>
                    Segunda à Sexta das 7:30 às 18:00
                    <br/>
                    Sábado das 7:30 às 13:00
                    <br/>
                    Exceto feriados
                </p>

            </div>
        </div>
    )
}