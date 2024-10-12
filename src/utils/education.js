const courses = [
  {
    sitio: 'Tripleten',
    titulo: ['Desarrollador Web', 'https://tripleten.com/es-mex/web/workshop/'],
    fecha: 'oct 2023 - ago 2024',
    certificado: [
      'Certificado',
      require('../documentos/web_developer_certificate.pdf'),
    ],
  },
  {
    sitio: 'Udemy',
    titulo: [
      'Curso de HTML5 desde cero: El más completo en Español',
      'https://www.udemy.com/course/el-curso-de-html5-desde-cero-mas-completo/',
    ],
    fecha: 'enero 2022',
    certificado: ['Certificado', require('../documentos/CursoHTML.pdf')],
  },
  {
    sitio: 'Udemy',
    titulo: [
      'Master en CSS: Responsive, SASS, Flexbox, Grid y Bootstrap',
      'https://www.udemy.com/course/master-en-css-responsive-sass-flexbox-grid-y-boostrap-4/',
    ],
    fecha: 'enero 2022',
    certificado: ['Certificado', require('../documentos/CursoCSS.pdf')],
  },
  {
    sitio: 'freeCodeCamp',
    titulo: [
      'Diseño Web Responsivo',
      'https://freecodecamp.org/learn/2022/responsive-web-design/',
    ],
    fecha: 'novimebre 2022',
    certificado: ['Certificado', require('../documentos/Responsive.png')],
  },
  {
    sitio: 'freeCodeCamp',
    titulo: [
      'Algoritmos de JavaScript y Estructuras de Datos',
      'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
    ],
    fecha: 'diciembre 2022',
    certificado: ['Certificado', require('../documentos/Javascript.png')],
  },
];

export default courses;
