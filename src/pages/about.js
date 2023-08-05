import createNavBar from '../sections/nav-bar';
import createFooter from '../sections/footer';

import mainAboutImage from '../assets/images/about-images/about-us-hero_large.jpg';
import blackbarAbout from '../assets/images/menu-images/icons/black-bar_bg.svg';
import blackbarAfter from '../assets/images/about-images/illustration-wheat.png';
import historyAfter from '../assets/images/about-images/illustration-beet.png';
import memoriesImg from '../assets/images/about-images/our-memories_medium.jpg';

function createAbout() {
    const content = document.getElementById('content');

    const hero = document.createElement('section');
    hero.classList.add('hero-about');
    hero.style.background = `url(${mainAboutImage}) center center no-repeat`;
    hero.style.backgroundSize = 'cover';
    content.appendChild(hero);

    const titleContent = document.createElement('div');
    titleContent.classList.add('about-title');
    hero.appendChild(titleContent);

    const blackbar = document.createElement('h2');
    blackbar.classList.add('black-bar-about');
    blackbar.style.background = `url(${blackbarAbout})center center no-repeat`;
    blackbar.style.setProperty('--blackbar-after',`url('${blackbarAfter}')`);
    blackbar.innerText = 'PAUL & JESSICA';
    titleContent.appendChild(blackbar);

    const blackBarFooter = document.createElement('p');
    blackBarFooter.classList.add('black-bar-footer');
    blackBarFooter.innerText = `WE'RE PEOPLE WHO CARE ABOUT FOOD`;
    titleContent.appendChild(blackBarFooter);

    const ourHistorySection = document.createElement('section');
    ourHistorySection.classList.add('history-section');
    content.appendChild(ourHistorySection);

    const historyContainer = document.createElement('div');
    historyContainer.innerHTML = `<div class = 'history-title'><p>W</p>
                                  <p class = 'history-title-text'>e’ve been cooking together long enough that we know how to balance each other–comfort meets freshness.</p></div>
                                  <p class = 'history-quote'>ONE OF US SAYS, “JUICY BURGER?” THE OTHER RESPONDS, “YEAH! AND SOME ROASTED BEETS AND GOAT CHEESE!”</p>
                                  <p class = 'history-text'>We met in Metropolitan Community College’s Culinary program, which was a great place to earn our credentials 
                                  and broaden our network of friends, chefs, and fellow foodies. But we both agree our ongoing education has been 
                                  and will always be through travel. We travel whenever we have the chance, and sometimes we’ll plan a trip around 
                                  reservations at a specific restaurant. We’ve had some amazing meals and some great adventures, and it all shows 
                                  up in the food we serve.</p>`,
    historyContainer.classList.add('history-container');
    historyContainer.style.setProperty('--history-after',`url('${historyAfter}')`);
    ourHistorySection.appendChild(historyContainer);

    const overlayHero = document.createElement('section');
    overlayHero.classList.add('memories-hero');
    overlayHero.style.background = `url('${memoriesImg}') center center no-repeat`;
    overlayHero.style.backgroundSize = 'cover';
    content.appendChild(overlayHero);

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlayHero.appendChild(overlay);

    const overlayText = document.createElement('div');
    overlayText.classList.add('container-memories-text');
    overlayText.innerHTML = '<p>WE SERVE FOOD BASED ON OUR BEST MEMORIES.</p>';
    overlayHero.appendChild(overlayText);

    
}

function loadAbout() {

    const main = document.getElementById('content');
    main.innerHTML = '';

    createNavBar();
    createAbout();
    createFooter();
}

export default loadAbout;