import Cabeçalho from "./assets/Cabeçalho/Cabeçalho";
import Sobre from './assets/Sobre/Sobre';
import Skills from "./assets/Skills/Skills";
import Projetos from "./assets/Projetos/Projetos";
import Contatos from "./assets/Contatos/Contatos";
import Footer from "./assets/Footer/Footer";


function App() {

  return (
    <div className="container">
    <Cabeçalho/>
    <Sobre/>
    <Skills/>
    <Projetos/>
    <Contatos/>
    <Footer/>
  </div>
  )
}

export default App
