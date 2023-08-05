import '../src/css/style.css';
import '../src/css/nav-bar.css';
import '../src/css/footer.css';
import '../src/css/home.css';
import '../src/css/menu.css';
import '../src/css/about.css';

import loadHome from '../src/pages/home';
import loadMenu from './pages/menu';
import loadAbout from './pages/about';

loadHome();

function checkButtons() {

    const links = Array.from(document.querySelectorAll('a'));

    links.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('menu-link')) {
                loadMenu();
                window.scroll(0, 0);
                checkButtons();
            } else if (button.classList.contains('about-link')) {
                loadAbout();
                window.scroll(0, 0);
                checkButtons();
            }else if (button.classList.contains('home-link')) {
                loadHome();
                window.scroll(0, 0);
                checkButtons();
            }
        })
    })
}


checkButtons();


