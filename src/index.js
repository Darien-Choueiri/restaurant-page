import './style.css';
import homepage from './homepage';
import menu from './menu';
import contact from './contact';

homepage();

const homenav = document.querySelector('.home-nav');
const menunav = document.querySelector('.menu-nav');
const contactnav = document.querySelector('.contact-nav');
const content = document.querySelector('#content');

homenav.addEventListener('click', () => {
    content.innerHTML = '';
    homepage();
});

menunav.addEventListener('click', () => {
    content.innerHTML = '';
    menu();
});

contactnav.addEventListener('click', () => {
    content.innerHTML = '';
    contact();
});

console.log("testing index.js");