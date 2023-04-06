import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Orcamentos from './pages/Orçamentos';
import TrabalheConosco from "./pages/TrabalheConosco";


export default function RoutesApp(){
    return(
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/orcamentos" element={< Orcamentos /> }/>
            <Route exact path="/contato" element={<Contato/>}/>
            <Route exact path="/sobre" element={<Sobre/>}/>
            <Route exact path="/curriculo" element={<TrabalheConosco/>}/>
        </Routes>
    )
}