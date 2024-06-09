import BasePage from "../../components/BasePage/BasePage";
import "./sobre.css"
import image1 from "../../assets/image1.png"
function Sobre() {
    return ( <>
        <BasePage pageTitle="Sobre" id="sobre">
            <img src={image1} alt="" />
        </BasePage>
    </> );
}

export default Sobre;