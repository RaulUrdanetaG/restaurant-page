import createNavBar from '../sections/nav-bar';
import createFooter from '../sections/footer';

function createAbout(){
    const content = document.getElementById('content');

    const hero = document.createElement('div');
    hero.classList.add('hero-about');
    content.appendChild(hero);

    const titleContent = document.createElement('div');
    titleContent.classList.add('about-title');
    hero.appendChild(titleContent);

    const blackbar = document.createElement('h2');
    blackbar.classList.add('black-bar-about');
    blackbar.innerText = 'PAUL & JESSICA';
    titleContent.appendChild(blackbar);

    const blackBarFooter = document.createElement('p');
    blackBarFooter.classList.add('black-bar-footer');
    blackBarFooter.innerText = `WE'RE PEOPLE WHO CARE ABOUT FOOD`;
    titleContent.appendChild(blackBarFooter);
}

function loadAbout(){
    createNavBar();
    createAbout();
    createFooter();
}

export default loadAbout;