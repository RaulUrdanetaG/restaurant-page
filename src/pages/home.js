import createNavBar from './nav-bar';
import createFooter from './footer';


function createHome(){
    const content = document.getElementById('content');
    
    const main = document.createElement('main');
    main.classList.add('main');
    content.appendChild(main);

    const hero = document.createElement('section');
    hero.classList.add('hero');
    main.appendChild(hero);

    const homeVideo = document.createElement('video');
    homeVideo.id = 'home-background';
    homeVideo.preload = 'auto';
    homeVideo.muted = true;
    homeVideo.loop = true;
    homeVideo.autoplay = true;
    hero.appendChild(homeVideo);

    const homeBackgroundVideo = document.createElement('source');
    homeBackgroundVideo.src = '../src/assets/images/home-media/homeVideo.mp4';
    homeBackgroundVideo.type = 'video/mp4';
    homeVideo.appendChild(homeBackgroundVideo);

    const homeTitleLogoContainer = document.createElement('div');
    homeTitleLogoContainer.classList.add('container');
    hero.appendChild(homeTitleLogoContainer);

    const homeTitleLogo = document.createElement('img');
    homeTitleLogo.src = '../src/assets/images/home-media/icons/farm-to-table.svg'
    homeTitleLogo.classList.add('street-food');
    homeTitleLogoContainer.appendChild(homeTitleLogo);

    const homeCallout = document.createElement('section');
    homeCallout.classList.add('home-callouts');
    main.appendChild(homeCallout);
}

function loadHome(){
    createNavBar();
    createHome();
    createFooter();
}

export default loadHome;
