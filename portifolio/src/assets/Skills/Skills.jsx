import './skills.css'

function Skills(){
    return(
        <section className="skills" id="skills">
            <h2>Skills</h2>
            <p>
                Abaixo listarei alguns conhecimentos na área que adquiri ao longo dos anos.            
            </p>
            <div className='btn'>
                <button>Ver mais</button>
            </div>
                <ul className='listagem'>
                    <li id='foto' className="html">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
                    </li>
                    <li id='foto' className="css">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
                    </li>
                    <li id='foto' className="js">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                    </li>
                    <li id='foto' className="jquery">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original-wordmark.svg" />
                    </li>
                    <li id='foto' className="bootstrap">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" />
                    </li>
                    <li id='foto' className="sass">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
                    </li>
                    <li id='foto' className="git">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                    </li>
                    <li id='foto' className="gulp">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gulp/gulp-plain.svg" />
                    </li>
                    <li id='foto' className="py">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" />
                    </li>
                    <li id='foto' className="vue">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg" />
                    </li>
                    <li id='foto' className="react">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                    </li>
                    <li id='foto' className="node">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
                    </li>
                    {/* querendo acresentar mais skills e aqui */}
                </ul>
        </section>
    )
}

export default Skills