import Footer from "./components/Footer/Footer"
import MenuBar from "./components/MenuBar/MenuBar"
import Contato from "./pages/Contato/Contato"
import Home from "./pages/Home/Home"
import Servicos from "./pages/Servicos/Servicos"
import Sobre from "./pages/Sobre/Sobre"



function App() {
  

  return (
    <>
      <MenuBar/>
      <Home/>
      <Sobre/>
      <Servicos/>
      <Contato/>
      <Footer/>
    </>
  )
}

export default App
