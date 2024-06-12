import "./services-card.css"
function ServicesCard({backgroundImage, description}) {
    return ( 
        <>
        
        <div className="services-card-wrap">
            <img className="services-card-background-image" src={backgroundImage} alt="" />
            
            <div className="services-card-description">
            <span>{description}</span>
            </div>
        </div>
         
        </>
     );
}

export default ServicesCard;