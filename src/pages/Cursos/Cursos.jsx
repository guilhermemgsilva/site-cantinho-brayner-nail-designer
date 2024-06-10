import "./cursos.css"
import {Link} from 'react-scroll'
import CourseCard from "../../components/CourseCard/CourseCard";
import image2 from "../../assets/image5.png"
import image3 from "../../assets/image6.png"
import image4 from "../../assets/image7.png"
import image5 from "../../assets/image4.png"

function Cursos() {
    return ( 
        <div id="cursos" className="main-area">
            <div className="main-area-wrap">

            <CourseCard subtitle="Curso para iniciantes na fibra de vidro" name="Curso Iniciantes">
                <p><strong>Você vai aprender...</strong></p><br/>
                <p className="right-column">Decorações encapsuladas, manutenção, remoção, acabamento natural e resistente.</p><br/>
                <div className="image">

                    <img src={image3} alt="imagem 2" className="image-curso-iniciate"/>
                </div>
                
                
               <br/><br/><p className="left-column">Conteúdo teórico e prático.<br/> Incluso material para curso, apostila e certificado.</p>
            </CourseCard>

            <CourseCard name="Curso Aperfeiçoamento" subtitle="Curso de aperfeiçoamento na fibra de vidro">
                <p><strong>Você vai aprender...</strong></p><br/>
                <p className="right-column">Formatos nail art, lixamento técnico, manutenção, remoção, aplicação correta da fibra, otimixação de tempo, limpeza e esterelização dos equipamentos</p>
                <div className="image">

                    <img src={image2} alt="imagem 3" className="image-curso-iniciate"/>
                    
                </div>
                
                
               <br/><br/><p className="left-column">Conteúdo teórico e prático.<br/> Incluso apostila, material e certificado.</p>
            </CourseCard>
            <CourseCard name="Mais Informações:" subtitle="Para mais informações, ">
                <Link to='contato' smooth={true} offset={-150} duration={500} ><span>entre em contato</span></Link>
                </CourseCard> 
            </div>
        </div>
        )
   
}

export default Cursos;