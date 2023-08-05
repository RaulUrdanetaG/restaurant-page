import createNavBar from '../sections/nav-bar';
import createFooter from '../sections/footer';

import mainVideo from '../assets/images/home-media/homeVideo.mp4';

import farmToTable from '../assets/images/home-media/icons/farm-to-table.svg';
import homeBurguer from '../assets/images/home-media/home-buguer.png';
import facebookLogo from '../assets/images/home-media/icons/logo-facebook.svg';
import freeHighFives from '../assets/images/home-media/icons/free-high-fives.svg';
import rollUpSleeves from '../assets/images/home-media/icons/roll-up-your-sleeves.svg';
import realFood from '../assets/images/home-media/icons/real-local-food.svg';

import onion from '../assets/images/home-media/illustration-onion.png';
import chicken from '../assets/images/home-media/illustration-chicken.png';
import beet from '../assets/images/home-media/illustration-plant.png';

function createHome() {
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
    homeBackgroundVideo.src = mainVideo;
    homeBackgroundVideo.type = 'video/mp4';
    homeVideo.appendChild(homeBackgroundVideo);

    const homeTitleLogoContainer = document.createElement('div');
    homeTitleLogoContainer.classList.add('container');
    hero.appendChild(homeTitleLogoContainer);

    const homeTitleLogo = document.createElement('img');
    homeTitleLogo.src = farmToTable;
    homeTitleLogo.classList.add('street-food');
    homeTitleLogoContainer.appendChild(homeTitleLogo);

    const homeCallout = document.createElement('section');
    homeCallout.classList.add('home-callouts');
    main.appendChild(homeCallout);

    const dailySpecialContainer = document.createElement('div');
    dailySpecialContainer.classList.add('daily-special');
    homeCallout.appendChild(dailySpecialContainer);

    const burguerLink = document.createElement('a');
    burguerLink.classList.add('left-info');
    burguerLink.href = "https://www.facebook.com/Block-16-274838819236148";
    burguerLink.target = '_blank';
    burguerLink.innerHTML = `<img src='${homeBurguer}'>`;
    dailySpecialContainer.appendChild(burguerLink);

    const rightInfoContainer = document.createElement('div');
    rightInfoContainer.classList.add('right-info');
    dailySpecialContainer.appendChild(rightInfoContainer);

    const description = document.createElement('div');
    description.classList.add('description');
    description.innerHTML = `<h4>DAILY SPECIAL</h4>
                             <p>We serve a new special every day. Head over to Facebook and 
                             see what we’re serving today.</p>`;
    rightInfoContainer.appendChild(description);


    const fbCallout = document.createElement('a');
    fbCallout.classList.add('fb-callout');
    fbCallout.href = 'https://www.facebook.com/Block-16-274838819236148';
    fbCallout.target = '_blank';
    fbCallout.innerHTML = `FOLLOW US ON FACEBOOK TO SEE DAILY SPECIALS IN YOUR "FEED"! <img src = "${facebookLogo}">`;
    rightInfoContainer.appendChild(fbCallout);

    const oneThird = document.createElement('div');
    oneThird.classList.add('one-third');
    homeCallout.appendChild(oneThird);

    const column1 = document.createElement('div');
    column1.classList.add('column-home');
    column1.style.setProperty('--onionBg',`url('${onion}')`);
    oneThird.appendChild(column1);

    const titleImg1 = document.createElement('img');
    titleImg1.src = freeHighFives;
    titleImg1.classList.add('first-img');
    column1.appendChild(titleImg1);

    const columnP1 = document.createElement('p');
    columnP1.innerText = `Things get hoppin' around lunchtime. We suggest checking out our menu before you come in.`;
    column1.append(columnP1);

    const columnA1 = document.createElement('a');
    columnA1.classList.add('menu-link');
    columnA1.innerText = 'SEE MENU';
    column1.appendChild(columnA1);

    const column2 = document.createElement('div');
    column2.classList.add('column-home');
    oneThird.appendChild(column2);

    const titleImg2 = document.createElement('img');
    titleImg2.src = rollUpSleeves;
    titleImg2.classList.add('second-img');
    column2.appendChild(titleImg2);

    const columnP2 = document.createElement('p');
    columnP2.innerText = `Our street-style food is bold, imaginative, and deliciously messy. Grab some napkins and eat up.`;
    column2.style.setProperty('--chickenBg',`url('${chicken}')`);
    column2.append(columnP2);

    const columnA2 = document.createElement('a');
    columnA2.innerText = 'SEE LOCATION';
    columnA2.href = 'https://www.google.com/maps/place/Block+16/@41.2574411,-95.9377708,17z/data=!3m1!4b1!4m6!3m5!1s0x87938fad9a1ac4c7:0x2255528dd3e9b8fd!8m2!3d41.2574411!4d-95.9377708!16s%2Fg%2F11gzlymkl?entry=ttu';
    columnA2.target = '_blank';
    column2.appendChild(columnA2);

    const column3 = document.createElement('div');
    column3.classList.add('column-home');
    column3.style.setProperty('--beetBg',`url('${beet}')`);
    oneThird.appendChild(column3);

    const titleImg3 = document.createElement('img');
    titleImg3.src = realFood;
    titleImg3.classList.add('third-img');
    column3.appendChild(titleImg3);

    const columnP3 = document.createElement('p');
    columnP3.innerText = `We use locally sourced ingredients, avoid preservatives whenever possible, and offer vegan-friendly dishes.`;
    column3.append(columnP3);

    const columnA3 = document.createElement('a');
    columnA3.classList.add('about-link');
    columnA3.innerText = 'ABOUT US';
    column3.appendChild(columnA3);

}

function loadHome() {
    
    const main = document.getElementById('content');
    main.innerHTML = '';

    createNavBar();
    createHome();
    createFooter();
}

export default loadHome;
