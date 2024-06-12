import "./cursos.css"
import {Link} from 'react-scroll'
import CourseCard from "../../components/CourseCard/CourseCard";
import iamgeCursoIniciante from "../../assets/curso-iniciante.png"
import imageCursoAperfeicoamento from "../../assets/curso-aperfeicoamento.png"


function Cursos() {
    return ( 
        <div id="cursos" className="main-area"> 
            <div className="main-area-wrap">

            <CourseCard subtitle="Curso para iniciantes na fibra de vidro" name="CURSO INICIANTE" image={iamgeCursoIniciante}>
            
                

                    <div className="course-information">

                        <p><strong>Você vai aprender...</strong></p><br/>
                        <p className="right-column">Decorações encapsuladas, manutenção, remoção, acabamento natural e resistente.</p><br/>
                    </div>
                    
                    {/* <div className="cursos-image">

                        <img src={iamgeCursoIniciante} alt="imagem 2" className="image-curso-iniciante"/>
                    </div> */}
                
                
                
               
            </CourseCard>

            <CourseCard name="CURSO APERFEIÇOAMENTO" subtitle="Curso de aperfeiçoamento na fibra de vidro" image={imageCursoAperfeicoamento}>
                <p><strong>Você vai aprender...</strong></p><br/>
                <p className="right-column">Formatos nail art, lixamento técnico, manutenção, remoção, aplicação correta da fibra, otimixação de tempo, limpeza e esterelização dos equipamentos</p>
                
                
                
               <br/><br/>
            </CourseCard>
            <CourseCard name="MAIS INFORMAÇÕES:" subtitle="Cursos presenciais especializados com conteúdos teóricos e práticos. Incluso material, apostila e certificado.">
                
                 <div className="button-contact-cursos"><a target="_blank" href="https://wa.me/27997832408?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20cursos">Saiba mais sobre os cursos</a> <div className="arrow">{">"}</div></div>
                
                </CourseCard> 
            </div>
        </div>
        )
   
}

export default Cursos;