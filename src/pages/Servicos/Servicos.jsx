import BasePage from "../../components/BasePage/BasePage";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import "./servicos.css"
function Servicos() {
    return ( 
        <>
        <BasePage pageTitle="Serviços" id="servicos">
            <div className="main">
            <ServiceCard title="PRIMEIRA APLICAÇÃO" services={["ALONGAMENTO COM DECORAÇÃO", "ALONGAMENTO SEM DECORAÇÃO"]}/>
            <ServiceCard title="MENUTENÇÃO" services={["COM DECORAÇÃO", "SEM DECORAÇÃO"]}/>
            <ServiceCard title="OUTROS" services={["UNHA QUEBRADA NA MANUTENÇÃO", "UNHA QUEBRADA FORA DA MANUTENÇÃO", "REMOÇÃO DE ALONGAMENTO","ESMALTAÇÃO EM GEL"]}/>

            </div>
        </BasePage>
        </>
     );
}

export default Servicos;