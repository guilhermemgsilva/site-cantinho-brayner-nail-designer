import "./menu-bar.css"
import logo from "../../assets/logo.png"
import responsivity from "../../assets/responsivity.png"
function MenuBar() {
    const menuLinks = document.querySelectorAll('.background-menu-bar__menu-bar__menus a[href^="#"]')
    
    function getDistanceFromTheTop(element){
        const id = element.getAttribute("href");
        return document.querySelector(id).offsetTop;
    }

    function scrollToSection(event){
      console.log("entrou")
        event.preventDefault(); 
        const distanceFromTheTop = getDistanceFromTheTop(event.target) - 120
        smoothScrollTo(0, distanceFromTheTop ,600)
    }
    menuLinks.forEach((link)=>{
        link.addEventListener('click',scrollToSection)
    })

    function smoothScrollTo(endX, endY, duration) {
        const startX = window.scrollX || window.pageXOffset;
        const startY = window.scrollY || window.pageYOffset;
        const distanceX = endX - startX;
        const distanceY = endY - startY;
        const startTime = new Date().getTime();
      
        duration = typeof duration !== "undefined" ? duration : 400;
      
        const easeInOutQuart = (time, from, distance, duration) => {
          if ((time /= duration / 2) < 1)
            return (distance / 2) * time * time * time * time + from;
          return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
        };
      
        const timer = setInterval(() => {
          const time = new Date().getTime() - startTime;
          const newX = easeInOutQuart(time, startX, distanceX, duration);
          const newY = easeInOutQuart(time, startY, distanceY, duration);
          if (time >= duration) {
            clearInterval(timer);
          }
          window.scroll(newX, newY);
        }, 1000 / 60);
      }
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
            <div className="background-menu-bar__menu-bar">
              <div className="background-menu-bar__icons">
              <img className="background-menu-bar__menu-bar__icons__logo" src={logo} alt="Logomarca"/>
              <img src={responsivity} alt="responsisity" className="background-menu-bar__resposivity" onClick={toggle}/>
              </div>

            <ul className="background-menu-bar__menu-bar__menus">
                <li><a href="#home" onClick={toggle}>Home</a></li>
                <li><a href="#sobre" onClick={toggle}>Sobre</a></li>
                <li><a href="#servicos" onClick={toggle}>Serviços</a></li>
                <li><a href="#contato" onClick={toggle}>Contato</a></li>

            </ul>
            
            
            </div>
            </div>
        </>
      );
}


export default MenuBar;