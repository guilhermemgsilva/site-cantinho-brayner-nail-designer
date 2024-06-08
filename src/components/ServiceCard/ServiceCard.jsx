import "./service-card.css"
function ServiceCard({title, services}) {
    return ( 
        <div className="card-wrap">
            <h3 className="card-wrap__title">{title}</h3>
            <ul className="card-wrap__services">
                {services.map((service) =>  <li key={service}>{service}</li>)}
            </ul>
        </div>
     );
}

export default ServiceCard;