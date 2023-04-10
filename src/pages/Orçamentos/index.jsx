
import Header from "../../components/Header";
import Footer from '../../components/Footer';
import { useState, useEffect } from "react";
import './orcamento.css';

import sgMail from '@sendgrid/mail';

 

export default function Orcamentos(){

    const apiKey = process.env.Client_Key
    sgMail.setApiKey(apiKey);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [numero, setNumero] = useState('');

    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [])

    function handleSubmit(e){
        e.preventDefault();
        const msg = {
            to: 'incomel.project@gmail.com',
            from: email,
            subject: 'Solicitacao de orcamento',
            text: 'Conteúdo do e-mail em formato de texto',
            html: '<p>Conteúdo do e-mail em formato HTML</p>',
        };
        sgMail.send(msg)
        .then(() => console.log('E-mail enviado com sucesso!'))
        .catch((error) => console.error(error));
       
      }
    return(
        <div>
            <Header/>
            <div className="container">
                <div className="content orcamento">
                    <form onSubmit={handleSubmit}>
                        <h1>Orçamentos</h1>
                        <p>Preencha o formulário e entraremos em contato assim <br/>que possivel com o seu orçamento</p>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome completo"/>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                        <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} placeholder="Telefone"/>
                        <input type="text" value={empresa} onChange={(e) => setEmpresa(e.target.value)} placeholder="Empresa (opcional)"/>
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

// EMAIL API SENDGRID -- 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
