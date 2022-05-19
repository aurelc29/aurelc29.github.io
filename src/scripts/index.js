import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

/* web component */
import './component/app-bar';
import './component/hero-card';
import './component/footer-card';

// Menu
const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  hero: document.querySelector('.hero'),
  content: document.querySelector('main'),
});

/* URL router */

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
