import ServicesCard from "../../components/ServiceCard/ServicesCard";
import unhaQuebradaManutencao from "../../assets/unha-quebrada-manutencao.jpg"
import unhaQuebradaForaManutencao from "../../assets/unha-quebrada-fora-manutencao.jpg"
import remocao from "../../assets/remocao.jpg"
import esmaltacao from "../../assets/esmaltacao.jpg"


import "./outros.css"


function Outros() { 
    return ( 
        <div id="outros" className="outros-wrap">
            <h3 className="outros-title"> OUTROS</h3>
            <div className="outros-main">

            <ServicesCard description="Unha quebrada na manutenção" backgroundImage={unhaQuebradaManutencao}/>
            <ServicesCard description="Unha quebrada fora da manutenção" backgroundImage={unhaQuebradaForaManutencao}/>
            <ServicesCard description="Remoção do alongamento" backgroundImage={remocao}/>
            <ServicesCard description="Esmaltação em gel" backgroundImage={esmaltacao}/>
            </div>
        </div>
    );
}

export default Outros;