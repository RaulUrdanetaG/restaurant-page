import B16Logo from '../assets/images/home-media/logo@2x.png';
import headerFrills from '../assets/images/header-frills.png';

function createNavBar() {
    const content = document.getElementById('content');

    const header = document.createElement('header');
    content.appendChild(header);

    const navBar = document.createElement('div');
    navBar.classList.add('section-header');
    header.appendChild(navBar);

    const sectionHeaderLogo = document.createElement('div');
    sectionHeaderLogo.classList.add('section-logo');
    navBar.appendChild(sectionHeaderLogo);
    
    const headerLogo = document.createElement('img');
    headerLogo.classList.add('header-logo');
    headerLogo.src = B16Logo;
    sectionHeaderLogo.appendChild(headerLogo);

    const headerMenu = document.createElement('div');
    headerMenu.classList.add('header-menu');
    navBar.appendChild(headerMenu);

    const homeTitle = document.createElement('a');
    homeTitle.classList.add('home-link');
    homeTitle.innerText = 'HOME';
    headerMenu.appendChild(homeTitle);

    const menutTitle = document.createElement('a');
    menutTitle.classList.add('menu-link')
    menutTitle.innerText = 'MENU';
    headerMenu.appendChild(menutTitle);

    const aboutTitle = document.createElement('a');
    aboutTitle.classList.add('about-link');
    aboutTitle.innerText = 'ABOUT';
    headerMenu.appendChild(aboutTitle);

    const frills = document.createElement('div');
    frills.classList.add('header-frills');
    frills.style.setProperty('--frills',`url(${headerFrills})`);
    header.appendChild(frills);

    sectionHeaderLogo.appendChild(headerLogo);

}

export default createNavBar;