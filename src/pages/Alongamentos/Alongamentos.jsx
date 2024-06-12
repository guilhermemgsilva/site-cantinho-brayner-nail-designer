import "./alongamentos.css"

import ServicesCard from "../../components/ServiceCard/ServicesCard";
import alongamentoComDecoracao from "../../assets/alongamento-com-decoracao.jpg"
import alongamentoSemDecoracao from "../../assets/alongamento-sem-decoracao.jpg"


function Alongamentos() {
    return ( 
        <div id="alongamentos" className="alongamento-wrap">
            <h3 className="alongamento-title"> ALONGAMENTO</h3>
            <div className="alongamento-main">

            <ServicesCard description="Com Decoração" backgroundImage={alongamentoComDecoracao}/>
            <ServicesCard description="Sem Decoração" backgroundImage={alongamentoSemDecoracao}/>
            </div>
        </div>
    ); 
} 

export default Alongamentos;