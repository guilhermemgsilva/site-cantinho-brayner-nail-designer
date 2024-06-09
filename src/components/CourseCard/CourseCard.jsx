import {Link} from 'react-scroll'
import "./course-card.css"
function CourseCard({name, subtitle, children}) {
    return ( 
        <div className="card-wrap">
            <h3>{name}</h3>
            <h4>{subtitle}</h4>
            {children}
            {/* {content.map((parag)=><p>{parag}</p>)}
            {children ? (<Link to='contato' smooth={true} offset={-150} duration={500} >{children}</Link>) : (<p>{content}</p>)} */}
        </div>
     );
}

export default CourseCard;