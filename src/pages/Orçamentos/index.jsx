import Header from "../../components/Header";
import Footer from '../../components/Footer';
import { useState, useEffect } from "react";
import './orcamento.css';

export default function Orcamentos(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [numero, setNumero] = useState('');

    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [])

    function handleSubmit(e){
        e.preventDefault();
    }

    return(
        <div>
            <Header/>
            <div className="container">
                <div className="content orcamento">
                    <form onSubmit={handleSubmit}>
                        <h1>Orçamentos</h1>
                        <p>Preencha o formulário e entraremos em contato assim <br/>que possivel com o seu orçamento</p>
                        <input type="text" value={name} placeholder="Nome completo"/>
                        <input type="email" value={email} placeholder="Email"/>
                        <input type="text" value={numero} placeholder="Telefone"/>
                        <input type="text" value={empresa} placeholder="Empresa (opcional)"/>
                        <label>Arquivo em pdf</label>
                        <input type="file" />
                        <button type="submit">ENVIAR</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}