import BasePage from "../../components/BasePage/BasePage";
import "./home.css"
import image1 from "../../assets/image1.jpg"
import image2 from "../../assets/image2.jpg"
import image3 from "../../assets/image3.jpg"
function Home() {
    return ( 
    <>
    <BasePage pageTitle=" " id="home"><p>No Cantinho Brayner Nail Designer, acreditamos que suas unhas são uma expressão da sua personalidade e estilo. Nosso objetivo é proporcionar uma experiência única e personalizada, onde cada detalhe é pensado para realçar a sua beleza.</p>
    <div className="presentations-images">
    <img src={image1} alt="Imagem de uma mão com a unha feita" />
    <img src={image3} alt="Imagem de uma mão com a unha feita" />
    <img src={image2} alt="Imagem de uma mão com a unha feita" />

    </div>
    </BasePage>
    </> 
    );
}

export default Home;