import {Link} from 'react-scroll'
import "./menu-bar.css"
import logo from "../../assets/logo.png"
import responsivity from "../../assets/responsivity.png"
function MenuBar() {
    
    // const menuLinks = document.querySelectorAll('.background-menu-bar__menu-bar__menus a[href^="#"]')
    // console.log(`menu link: ${menuLinks} --`)
    // function getDistanceFromTheTop(element){
    //     const id = element.getAttribute("href");
    //     return document.querySelector(id).offsetTop;
    // }

    // function scrollToSection(event){
    //   console.log("entrou")
    //     event.preventDefault(); 
    //     const distanceFromTheTop = getDistanceFromTheTop(event.target) - 120
    //     smoothScrollTo(0, distanceFromTheTop ,600)
    // }
    // menuLinks.forEach((link)=>{
    //     link.addEventListener('click',(event)=>{
    //     event.preventDefault(); 
    //     const distanceFromTheTop = getDistanceFromTheTop(event.target) - 120
    //     smoothScrollTo(0, distanceFromTheTop ,600)
    // })
    // })

    // function smoothScrollTo(endX, endY, duration) {
    //     const startX = window.scrollX || window.pageXOffset;
    //     const startY = window.scrollY || window.pageYOffset;
    //     const distanceX = endX - startX;
    //     const distanceY = endY - startY;
    //     const startTime = new Date().getTime();
      
    //     duration = typeof duration !== "undefined" ? duration : 400;
      
    //     const easeInOutQuart = (time, from, distance, duration) => {
    //       if ((time /= duration / 2) < 1)
    //         return (distance / 2) * time * time * time * time + from;
    //       return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    //     };
      
    //     const timer = setInterval(() => {
    //       const time = new Date().getTime() - startTime;
    //       const newX = easeInOutQuart(time, startX, distanceX, duration);
    //       const newY = easeInOutQuart(time, startY, distanceY, duration);
    //       if (time >= duration) {
    //         clearInterval(timer);
    //       }
    //       window.scroll(newX, newY);
    //     }, 1000 / 60);
    //   }
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