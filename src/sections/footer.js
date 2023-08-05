import footerVideoBack from '../assets/images/home-media/footerVideo.mp4';
import gitHubLogo from '../assets/images/home-media/icons/logo-github.svg'

function createFooter() {
    const content = document.getElementById('content');

    const footer = document.createElement('footer');
    content.appendChild(footer);

    const footerBackground = document.createElement('video');
    footerBackground.id = 'footer-background';
    footerBackground.preload = 'auto';
    footerBackground.autoplay = true;
    footerBackground.muted = true;
    footerBackground.loop = true;
    footer.appendChild(footerBackground);

    const footerVideo = document.createElement('source');
    footerVideo.src = footerVideoBack;
    footerVideo.type = 'video/mp4';
    footerBackground.appendChild(footerVideo);

    const footerContainer = document.createElement('div');
    footerContainer.classList.add('info-container');
    footer.appendChild(footerContainer);

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('column');
    footerContainer.appendChild(infoContainer);

    const infoTitle = document.createElement('h4');
    infoTitle.id = 'logo-footer';
    infoTitle.innerText = 'HOURS OF OPERATION';
    infoContainer.appendChild(infoTitle);

    const storeHours = document.createElement('div');
    storeHours.classList.add('store-hours');
    infoContainer.appendChild(storeHours);

    const hoursP1 = document.createElement('p');
    hoursP1.innerHTML = '<b>MONDAY - SATURDAY</b>: 11 A.M. to 2 P.M.';
    storeHours.appendChild(hoursP1);

    const hoursP2 = document.createElement('p');
    hoursP2.innerHTML = '<b>THURSDAY - SATURDAY</b>: 5 P.M. to 8 P.M.';
    storeHours.appendChild(hoursP2);

    const storeLocation = document.createElement('div');
    storeLocation.classList.add('store-location');
    infoContainer.appendChild(storeLocation);

    const locationP = document.createElement('p');
    locationP.innerHTML = '1611 Farnam Street<br>Omaha, Nebraska 68106<br>block16info@gmail.com';
    storeLocation.appendChild(locationP);

    const paymentInfo = document.createElement('div');
    paymentInfo.innerHTML = 'Eat in or take out. We accept credit cards, personal checks, and cold-hard cash.';
    paymentInfo.classList.add('payment-info');
    infoContainer.appendChild(paymentInfo);

    const disclaimer = document.createElement('div');
    disclaimer.classList.add('disclaimer');
    disclaimer.innerHTML=`Disclaimer: This mock-up web page has been created for educational and portfolio 
                          demonstration purposes only. It is an imitation of a real restaurant page, and 
                          all the content and imagery used are placeholders or taken from the original 
                          website purely for design and presentation reasons.
                          Please note that this mock-up web page is not affiliated with, endorsed by, 
                          or associated with the actual restaurant in any way. The use of the restaurant's 
                          name, logo, or any other branding elements is purely for visual representation and 
                          does not indicate any official connection.
                          <br>
                          <br>
                          I respect the intellectual property of the original restaurant, and any use of their 
                          content on this mock-up web page is not intended to infringe upon their rights. If 
                          you are the owner of the original restaurant and have any concerns about the usage 
                          of your content, please feel free to <a href = 'https://github.com/RaulUrdanetaG' 
                          target = '_blank'>contact me</a>, and i will promptly address your 
                          concerns.
                          <br>
                          <br>
                          You can see the original page <a href = 'https://block16omaha.com/' target='_blank'>Here</a>`;
    infoContainer.appendChild(disclaimer);

    const websiteInfo = document.createElement('div');
    websiteInfo.classList.add('creator-info');
    websiteInfo.innerHTML=`<h3>Made by </h3><a href="https://github.com/RaulUrdanetaG" target="_blank"><img src="${gitHubLogo}" alt="Github logo"></a><h3><a href="https://github.com/RaulUrdanetaG" target="_blank">Raul Urdaneta</a></h3>`;
    footerContainer.appendChild(websiteInfo);

}

export default createFooter;