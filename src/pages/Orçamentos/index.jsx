
import Header from "../../components/Header";
import Footer from '../../components/Footer';
import './orcamento.css';
import { useState, useEffect } from "react";

import emailjs from '@emailjs/browser';


 

export default function Orcamentos(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [numero, setNumero] = useState('');
    const [message, setMessage] = useState('');

    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [])

    function handleSubmit(e){
        e.preventDefault();
        if(name === '' || email === '' || message === '' || numero === ''){
            alert("Preencha todos os campos.");
            return;
        }

        const templateParams = {
            from_name: name,
            name: name,
            message: message,
            email: email,
            telefone: numero,
            empresa: empresa,
            reply_to: email 
        }

        emailjs.send("service_vzzw9we", "template_uyuii3h", templateParams, "PueGa5hvYEQxKP113")
        .then((response)=>{
            console.log("Email enviado", response.status, response.text);
            setEmail('');
            setName('');
            setNumero('');
            setEmpresa('');
            setMessage('');
        }, (err) =>{
            console.log("error", err)
        })

      }
    return(
        <div>
            <Header/>
            <div className="container">
                <div className="orcamento">
                    <form onSubmit={handleSubmit}>
                        <h1>Orçamentos</h1>
                        <p>Preencha o formulário e entraremos em contato assim <br/>que possivel com o seu orçamento</p>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome completo"/>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                        <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} placeholder="Telefone"/>
                        <input type="text" value={empresa} onChange={(e) => setEmpresa(e.target.value)} placeholder="Empresa (opcional)"/>
                        <textarea placeholder="Digite sua solicitação" value={message} onChange={(e)=> setMessage(e.target.value)}></textarea>
                        <button type="submit">ENVIAR</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

// EMAIL API SENDGRID -- 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
