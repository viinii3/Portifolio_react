import './cabeçalho.css'

function Cabeçalho() {
    const nome = 'Marcos Vinicius'

    return(
    <>
        <div className="header">
          <h1>{nome}</h1>
        </div>
        <div className="nav">
            <ul>
                <li>
                    <a href="#sobre">Sobre</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#projetos">Projetos</a>
                </li>
                <li>
                    <a href="#contato">Contato</a>
                </li>
            </ul>
        </div>
    </>
    )
}

export default Cabeçalho;