import "./cursos.css"
import {Link} from 'react-scroll'
import CourseCard from "../../components/CourseCard/CourseCard";
import iamgeCursoIniciante from "../../assets/curso-iniciante.png"
import imageCursoAperfeicoamento from "../../assets/curso-aperfeicoamento.png"


function Cursos() {
    return ( 
        <div id="cursos" className="main-area"> 
            <div className="main-area-wrap">

            <CourseCard subtitle="Curso para iniciantes na fibra de vidro" name="CURSO INICIANTE">
                <p><strong>Você vai aprender...</strong></p><br/>
                <p className="right-column">Decorações encapsuladas, manutenção, remoção, acabamento natural e resistente.</p><br/>
                <div className="cursos-image">

                    <img src={iamgeCursoIniciante} alt="imagem 2" className="image-curso-iniciate"/>
                </div>
                
                
               
            </CourseCard>

            <CourseCard name="CURSO APERFEIÇOAMENTO" subtitle="Curso de aperfeiçoamento na fibra de vidro">
                <p><strong>Você vai aprender...</strong></p><br/>
                <p className="right-column">Formatos nail art, lixamento técnico, manutenção, remoção, aplicação correta da fibra, otimixação de tempo, limpeza e esterelização dos equipamentos</p>
                <div className="cursos-image">

                    <img src={imageCursoAperfeicoamento} alt="imagem 3" className="image-curso-iniciate"/>
                    
                </div>
                
                
               <br/><br/>
            </CourseCard>
            <CourseCard name="MAIS INFORMAÇÕES:" subtitle="Para mais informações, ">
                <Link to='contato' smooth={true} offset={-150} duration={500} ><span>entre em contato</span></Link>
                <p className="left-column">*Conteúdo teórico e prático.<br/> Incluso apostila, material e certificado.*</p>
                </CourseCard> 
            </div>
        </div>
        )
   
}

export default Cursos;