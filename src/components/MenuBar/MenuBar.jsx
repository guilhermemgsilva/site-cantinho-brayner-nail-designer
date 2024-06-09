import {Link} from 'react-scroll'
import "./menu-bar.css"
import logo from "../../assets/logo.png"
import responsivity from "../../assets/responsivity.png"
function MenuBar() {

      let clicks = true 
      function toggle(){
        
        const bar = document.querySelector(".background-menu-bar__menu-bar")
        const list = bar.classList
        if (clicks){

          list.add("background-menu-bar__menu-bar-active")
          clicks = false
          
        }else{
          list.remove("background-menu-bar__menu-bar-active")
          clicks = true
        }
        
      }
    return (
        <>
        <div className="background-menu-bar">
          <div className="all-menu-wrap">
            <div className="background-menu-bar__menu-bar">
              <div className="background-menu-bar__icons">
              <img className="background-menu-bar__menu-bar__icons__logo" src={logo} alt="Logomarca"/>
              <img src={responsivity} alt="responsisity" className="background-menu-bar__resposivity" onClick={toggle}/>
              </div>
 
            <ul className="background-menu-bar__menu-bar__menus" >
                <li><Link to='sobre' smooth={true} offset={-150} duration={500} ><label onClick={toggle}>Sobre</label></Link></li>
                <li><Link to='cursos' smooth={true} offset={-150} duration={500}><label onClick={toggle}>Cursos</label></Link></li>
                <li><Link to='contato' smooth={true} offset={-150} duration={500}><label onClick={toggle}>Contato</label></Link></li>

            </ul>
            
            
            </div>
            <div className="background-menu-bar-bottom">
            <ul className="background-menu-bar-bottom__menus" >
                <li><Link to='alongamentos' smooth={true} offset={-150} duration={500} ><label onClick={toggle}>Alongamentos</label></Link></li>
                <li><Link to='manutencao' smooth={true} offset={-150} duration={500}><label onClick={toggle}>Manutenção</label></Link></li>
                <li><Link to='outros' smooth={true} offset={-150} duration={500}><label onClick={toggle}>Outros</label></Link></li>
                
                

            </ul>
            </div>
            </div>
            </div>
           
            
        </>
      );
}


export default MenuBar;