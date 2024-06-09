import Footer from "./components/Footer/Footer"
import MenuBar from "./components/MenuBar/MenuBar"
import Alongamentos from "./pages/Alongamentos/Alongamentos"
import Contato from "./pages/Contato/Contato"
import Cursos from "./pages/Cursos/Cursos"
import Manutencao from "./pages/Manutencao/Manutencao"
import Outros from "./pages/Outros/Outros"
import Sobre from "./pages/Sobre/Sobre"



function App() {
  

  return (
    <>
      <MenuBar/>
      <Sobre/>
      <Cursos/>
      <Alongamentos/>
      <Manutencao/>
      <Outros/>
      <Contato/>
      <Footer/>
    </>
  )
}

export default App
