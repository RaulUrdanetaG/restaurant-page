import B16Logo from '../assets/images/home-media/logo@2x.png';

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

    const sectionLinkLogo = document.createElement('a');
    sectionHeaderLogo.appendChild(sectionLinkLogo);

    const headerLogo = document.createElement('img');
    headerLogo.classList.add('header-logo');
    headerLogo.src = B16Logo;
    sectionLinkLogo.appendChild(headerLogo);

    const headerMenu = document.createElement('div');
    headerMenu.classList.add('header-menu');
    navBar.appendChild(headerMenu);

    const homeTitle = document.createElement('a');
    homeTitle.innerText = 'HOME';
    headerMenu.appendChild(homeTitle);

    const menutTitle = document.createElement('a');
    menutTitle.innerText = 'MENU';
    headerMenu.appendChild(menutTitle);

    const aboutTitle = document.createElement('a');
    aboutTitle.innerText = 'ABOUT';
    headerMenu.appendChild(aboutTitle);

    const frills = document.createElement('div');
    frills.classList.add('header-frills');
    header.appendChild(frills);

    sectionLinkLogo.appendChild(headerLogo);
}

export default createNavBar;