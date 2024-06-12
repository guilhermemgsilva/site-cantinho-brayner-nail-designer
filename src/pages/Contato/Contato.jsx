
import "./contato.css"

function Contato() {
    return ( <>
       <div id="contato" className="contato-wrap"> 
        <h2 className="contato-title" >CONTATO</h2>
        <div className="contact">
            <div className="location">
            <span>Estamos localizados em Av. Região Sudeste, 573 - Barcelona, Serra - ES, 29166-200</span>
        </div>


        <div className="button-contact"><a target="_blank" href="https://wa.me/27997832408?text=Tenho%20interesse%20em%20marcar%20um%20horário">Entrar em contato pelo Whatsapp</a> <div className="arrow">{">"}</div></div>
            </div>
        </div>
    </> );
}

export default Contato; 