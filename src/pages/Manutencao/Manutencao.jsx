import "./manutencao.css"
import manutencaoComDecoracao from "../../assets/manutencao-com-decoracao.jpg"
import manutencaoSemDecoracao from "../../assets/manutencao-sem-decoracao.jpg"


import ServicesCard from "../../components/ServiceCard/ServicesCard";

function Manutencao() {
    return ( 
        <div id="manutencao" className="manutencao-wrap">
            <h3 className="manutencao-title"> MANUTENÇÃO</h3>
            <div className="manutencao-main">

            <ServicesCard description="Com Decoração" backgroundImage={manutencaoComDecoracao}/>
            <ServicesCard description="Sem Decoração" backgroundImage={manutencaoSemDecoracao}/>
            </div>
        </div>
    );
}
 
export default Manutencao; 