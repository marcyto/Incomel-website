import Header from "../../components/Header";
import Footer from '../../components/Footer';
import { useState, useEffect } from "react";
import './orcamento.css';

export default function TrabalheConosco(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
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
                        <h1>Trabalhe Conosco</h1>
                        <p>Preencha o formulário e nos envie seu currículo</p>
                        <input type="text" value={name} placeholder="Nome completo"/>
                        <input type="email" value={email} placeholder="Email"/>
                        <input type="text" value={numero} placeholder="Telefone"/>
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