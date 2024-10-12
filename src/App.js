//Icons
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';
import projects from './utils/projects';
import courses from './utils/education';

//Components
import Proyecto from './componentes/Proyecto';
import Curso from './componentes/Curso';

function App() {
  return (
    <div className="contenedor-principal">
      <header className="header">
        <div className="foto-contenedor"></div>
        <h1>Hola, Soy Orlando</h1>
        <p className="profesion">Desarrollador Frontend</p>
        <div className="contacto">
          <h3>CONTACTO</h3>
          <div className="contacto-iconos">
            <a
              href="mailto:devjara11@gmail.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              <AiOutlineMail className="icono email" /> Email
            </a>
            <a
              href="https://www.linkedin.com/in/orlando-jara-976288271/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <FaLinkedin className="icono linked-in" /> LinkedIn
            </a>
            <a
              href="https://www.github.com/jarawd"
              rel="noreferrer noopener"
              target="_blank"
            >
              <AiOutlineGithub className="icono github" />
              Github
            </a>
          </div>
        </div>
        <nav className="menu">
          <a
            className="link-seccion"
            href="#top"
          >
            Inicio
          </a>
          <a
            className="link-seccion"
            href="#seccion1"
          >
            Proyectos
          </a>
          <a
            className="link-seccion"
            href="#seccion2"
          >
            Educación
          </a>
        </nav>
      </header>
      <p className="carta">
        Mi objetivo: transformar ideas en experiencias digitales inolvidables.
        Con un arsenal de herramientas como <strong>HTML</strong>,{' '}
        <strong>CSS</strong>, <strong>JavaScript</strong> y{' '}
        <strong>React</strong>, he creado interfaces de usuario que no sólo
        funcionan, sino que brillan. ¿Te intriga lo que ves? Vamos a crear algo
        increíble juntos. <i>¡Contáctame y hagamos magia digital!</i> ✨
      </p>
      <main className="contenedor-secciones">
        <section
          id="seccion1"
          className="proyectos"
        >
          <h2>Proyectos</h2>
          <div className="contenedor-proyectos">
            {projects.map((el, i) => {
              return (
                <Proyecto
                  key={i}
                  url={el.url}
                  img={el.img}
                  titulo={el.titulo}
                  descripcion={el.descripcion}
                  tech={el.tecnologias}
                />
              );
            })}
          </div>
        </section>
        <section
          id="seccion2"
          className="educacion"
        >
          <h2>Educación</h2>
          <div className="contenedor-cursos">
            {courses.map((el, i) => {
              return (
                <Curso
                  key={i}
                  sitio={el.sitio}
                  titulo={el.titulo}
                  fecha={el.fecha}
                  certificado={el.certificado}
                />
              );
            })}
          </div>
        </section>
      </main>
      <footer>
        <span className="autor">Creado por Orlando Jara | 2024 </span>
      </footer>
    </div>
  );
}

export default App;
