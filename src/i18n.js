// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Your translation resources (English and Spanish)
const resources = {
  en: {
    translation: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      resume: 'Resume',
      welcome: 'Welcome, my name is',
      title: 'Crafting stories through code',
      bio: 'I’m a Full Stack web developer passionate about crafting engaging digital experiences, blending front-end, back-end development, and design. Currently, I’m focused on honing my skills and advancing my craft.',
      explore_btn: 'Explore',
      about_title: 'Behind the screen',
      about_second_title: 'The Story Behind the Developer',
      description1:
        'Hello! My name is Octavian, and I’ve always been passionate about creating and exploring on the internet. My web development journey began when I first discovered',
      description2:
        'while writing scripts for Discord. From there, I dived into',
      description3: 'and',
      description4: ', which made my love for coding grow quickly.',
      description5:
        'Outside of web development, I’m a huge tech enthusiast. I’ve been',
      description6: 'building custom PCs',
      description7: 'since I was 13, and I also love',
      description8: 'video games',
      description9: 'and',
      description10: 'Photography',
      description11:
        '. Right now, my main focus is improving myself—getting 1% better every day.',
      progressCircle1: 'Coding',
      progressCircle3: 'Photography',
      skillsTitle: 'Tech Arsenal',
      tools: 'Tools',
      projectsTitle: 'Showcase',
      projects_subtitle: 'Click each project to see more info about it',
      bugatti_description:
        'The Bugatti Chiron Super Sport 57 One of One showcase highlights the car’s unique design and powerful W16 engine. This exclusive website dives into its custom features, exceptional performance, and luxury, offering a closer look at what makes this Bugatti truly one of a kind.',
      hirun_description:
        'HiRun is a web application for mobile devices, designed for professionals looking to offer their services to clients, and where users can hire those services, publish your own, or even discover new opportunities to collaborate and Expand your network of contacts.',
      projectsButton: 'Visit',
      contactTitle: 'Contact Me',
      contactText:
        "I'm always on the lookout for exciting new challenges, and my inbox is open! Whether you have a question or just want to connect, I'll do my best to respond as soon as I can.",
      contactButton: 'Contact',
    },
  },
  es: {
    translation: {
      about: 'Acerca de',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
      resume: 'Currículum',
      welcome: 'Bienvenido, mi nombre es',
      title: 'Creando historias a través del código',
      bio: 'Soy un desarrollador web Full Stack apasionado por crear experiencias digitales atractivas, combinando desarrollo front-end, back-end y diseño. Actualmente, me estoy enfocando en perfeccionar mis habilidades y avanzar en mi oficio.',
      explore_btn: 'Explorar',
      about_title: 'Tras la pantalla',
      about_second_title: 'La Historia detrás del Desarrollador',
      description1:
        'Hola! Mi nombre es Octavian y siempre me ha apasionado crear y explorar en internet. Mi camino en el desarrollo web comenzó cuando descubrí por primera vez',
      description2:
        'mientras escribía scripts para Discord. De ahí, me sumergí en',
      description3: 'y',
      description4: ', lo cual ocasionó mi pasión por la programación.',
      description5:
        'Fuera del desarrollo web, soy un gran entusiasta de la tecnología. He estado',
      description6: 'montando PCs',
      description7: 'desde los 13, también amo los',
      description8: 'videojuegos',
      description9: 'y la',
      description10: 'Fotografía',
      description11:
        '. Actualmente, mi objetivo principal es mejorarme, siendo un 1% mejor cada dia.',
      progressCircle1: 'Programar',
      progressCircle3: 'Fotografía',
      skillsTitle: 'Tecnologías',
      tools: 'Útiles',
      projectsTitle: 'Exhibición',
      projects_subtitle: 'Haz click en cada proyecto para más detalles',
      bugatti_description:
        'El escaparate del Bugatti Chiron Super Sport 57 One of One resalta el diseño único del coche y su potente motor W16. Este sitio web exclusivo profundiza en sus características personalizadas, rendimiento excepcional y lujo, ofreciendo una visión más cercana de lo que hace a este Bugatti verdaderamente único.',
      hirun_description:
        'HiRun es una aplicación web para dispositivos móviles, diseñada para profesionales que buscan ofrecer sus servicios a clientes, donde los usuarios pueden contratar esos servicios, publicar los suyos propios o incluso descubrir nuevas oportunidades para colaborar y expandir su red de contactos.',
      projectsButton: 'Visitar',
      contactTitle: 'Contáctame',
      contactText:
        'Siempre estoy en busca de nuevos y emocionantes desafíos, ¡y mi bandeja de entrada está abierta! Ya sea que tengas una pregunta o solo quieras conectar, haré todo lo posible por responder lo antes posible.',
      contactButton: 'Contactar',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
