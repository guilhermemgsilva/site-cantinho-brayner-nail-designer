import {Link} from 'react-scroll'
import "./course-card.css"
function CourseCard({name, subtitle, children}) {
    return ( 
        <div className="card-wrap">
            <h3>{name}</h3>
            <h4>{subtitle}</h4>
            {children}
            
        </div>
     );
}

export default CourseCard;