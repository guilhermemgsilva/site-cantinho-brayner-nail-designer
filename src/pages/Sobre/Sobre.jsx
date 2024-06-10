import BasePage from "../../components/BasePage/BasePage";
import "./sobre.css"
import image1 from "../../assets/image1.gif"
function Sobre() {
    return ( <>
        <BasePage pageTitle="Sobre" id="sobre">
            <div className="presentations-images">
                <div className="content-text">
                    <p><div className="destak-greets">BEM VINDA(O)!!!</div><br/>No Cantinho Brayner, acreditamos que as unhas são uma tela para expressão pessoal, uma declaração de estilo e um reflexo de sua individualidade. Estamos aqui para transformar essa visão em realidade, oferecendo um serviço excepcional que vai além das expectativas.</p>
                </div>
            <img src={image1} alt="" />
            </div>
        </BasePage>
    </> );
}

export default Sobre;