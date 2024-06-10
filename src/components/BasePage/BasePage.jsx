import "./base-page.css"
function BasePage({children, pageTitle,id}) {
    return ( 
    <>
    <div id={id} className="base-page-wrap">
        <div className="base-page-wrap__content">
            {children} 
        </div>
    </div>
    </> 
    );
}

export default BasePage;