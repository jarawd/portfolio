//Icons
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

//Components
import Proyecto from './componentes/Proyecto';
import Curso from './componentes/Curso';

function App() {
  const proyectos = [
    {
      url: [
        'https://github.com/jarawd/news-app?tab=readme-ov-file',
        'https://jarawd.github.io/news-app/',
      ],
      img: require('./imagenes/news.png'),
      titulo: 'Aplicación de noticias globales',
      descripcion:
        'App que consulta una API para obtener la información de noticias globales',
      tecnologias: ['HTML', 'Sass', 'Javascript', 'React'],
    },
    {
      url: [
        'https://github.com/jarawd/web_project_api_full',
        'https://flux.crabdance.com/',
      ],
      img: require('./imagenes/first.png'),
      titulo: 'Galería de imágenes',
      descripcion:
        'App de galería de imagenes con registro e inicio de sesión con funcionalidad para agregar y eliminar tarjetas, dar me gusta y modificar la información del perfil.',
      tecnologias: ['HTML', 'Sass', 'Javascript', 'React'],
    },
    {
      url: [
        'https://github.com/orlandojaradev/card_validation',
        'https://orlandojaradev.github.io/card_validation/',
      ],
      img: require('./imagenes/proyecto-card.png'),
      titulo: 'Validación de Tarjeta',
      descripcion:
        'Sección interactiva para la validación de datos de una tarjeta crédito/débito.',
      tecnologias: ['HTML', 'Sass', 'Javascript'],
    },
    {
      url: [
        'https://github.com/orlandojaradev/news_homepage',
        'https://orlandojaradev.github.io/news_homepage/',
      ],
      img: require('./imagenes/proyecto-noticias.png'),
      titulo: 'Página de Inicio de Noticias',
      descripcion:
        'En esta interfaz se lleva a cabo el diseño Responsive para brindar una mejor experiencia al usuario.',
      tecnologias: ['HTML', 'Sass', 'Javascript'],
    },
    {
      url: [
        'https://github.com/orlandojaradev/jobs_filter',
        'https://orlandojaradev.github.io/jobs_filter/#top',
      ],
      img: require('./imagenes/proyecto-empleo.png'),
      titulo: 'Lista de Empleos',
      descripcion:
        'Lista de empleos en la cual se pueden usar filtros en base a las categorías seleccionadas.',
      tecnologias: ['HTML', 'Sass', 'React'],
    },
  ];

  const cursos = [
    {
      sitio: 'Tripleten',
      titulo: [
        'Desarrollador Web',
        'https://tripleten.com/es-mex/web/workshop/',
      ],
      fecha: 'oct 2023 - ago 2024',
      certificado: [
        'Certificado',
        require('./documentos/web_developer_certificate.pdf'),
      ],
    },
    {
      sitio: 'Udemy',
      titulo: [
        'Curso de HTML5 desde cero: El más completo en Español',
        'https://www.udemy.com/course/el-curso-de-html5-desde-cero-mas-completo/',
      ],
      fecha: 'enero 2022',
      certificado: ['Certificado', require('./documentos/CursoHTML.pdf')],
    },
    {
      sitio: 'Udemy',
      titulo: [
        'Master en CSS: Responsive, SASS, Flexbox, Grid y Bootstrap',
        'https://www.udemy.com/course/master-en-css-responsive-sass-flexbox-grid-y-boostrap-4/',
      ],
      fecha: 'enero 2022',
      certificado: ['Certificado', require('./documentos/CursoCSS.pdf')],
    },
    {
      sitio: 'freeCodeCamp',
      titulo: [
        'Diseño Web Responsivo',
        'https://freecodecamp.org/learn/2022/responsive-web-design/',
      ],
      fecha: 'novimebre 2022',
      certificado: ['Certificado', require('./documentos/Responsive.png')],
    },
    {
      sitio: 'freeCodeCamp',
      titulo: [
        'Algoritmos de JavaScript y Estructuras de Datos',
        'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
      ],
      fecha: 'diciembre 2022',
      certificado: ['Certificado', require('./documentos/Javascript.png')],
    },
  ];

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
        Tengo experiencia en construcción de interfaces de usuario.
        <i> ¡Échale un vistazo a mis proyectos!</i> en los que implemento
        principalmente <strong>HTML</strong>, <strong>CSS</strong>,
        <strong> Javascript</strong> y <strong>React</strong>. Seguro que
        podemos hacer un buen equipo. <i>¡Sólo tienes que contactarme!</i>
      </p>
      <main className="contenedor-secciones">
        <section
          id="seccion1"
          className="proyectos"
        >
          <h2>Proyectos</h2>
          <div class="contenedor-proyectos">
            {proyectos.map((el, i) => {
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
          <div class="contenedor-cursos">
            {cursos.map((el, i) => {
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
