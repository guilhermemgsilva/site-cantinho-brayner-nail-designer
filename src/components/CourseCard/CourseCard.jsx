import {Link} from 'react-scroll'
import "./course-card.css"
function CourseCard({name, subtitle, children, image}) {
    return ( 
        <div className="card-wrap">
            <h3>{name}</h3>
            <h4>{subtitle}</h4>
            

            {children}

            <div className="cursos-image">

 
           <img src={image} alt="" />
            </div>
             
        </div>
     );
}
 
export default CourseCard;