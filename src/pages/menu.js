import createNavBar from './nav-bar';
import createFooter from './footer';

function createMenuItem(img, title, attribute, description) {

    let menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    let itemImg = document.createElement('img');
    itemImg.src = `../src/assets/images/menu-images/${img}`;
    itemImg.classList.add('item-img');
    menuItem.appendChild(itemImg);

    let itemTitle = document.createElement('div');
    itemTitle.classList.add('title');
    menuItem.appendChild(itemTitle);

    let itemName = document.createElement('h4');
    itemName.classList.add('name');
    itemName.innerText = title;
    itemTitle.appendChild(itemName);

    if (attribute === 'spicy') {
        let attribute = document.createElement('img');
        attribute.classList.add('attribute-img');
        attribute.src = '../src/assets/images/menu-images/icons/spicy-icon.svg';
        itemTitle.appendChild(attribute);
    } else if (attribute === 'vegan') {
        let attribute = document.createElement('img');
        attribute.classList.add('attribute-img');
        attribute.src = '../src/assets/images/menu-images/icons/vegan-icon.svg';
        itemTitle.appendChild(attribute);
    } else if (attribute === 'spicy-vegan') {
        let attribute = document.createElement('img');
        attribute.classList.add('attribute-img');
        attribute.src = '../src/assets/images/menu-images/icons/vegan-icon.svg';
        itemTitle.appendChild(attribute);
    }

    let separator = document.createElement('hr');
    separator.classList.add('separator');
    menuItem.appendChild(separator);

    let itemDescription = document.createElement('p');
    itemDescription.classList.add('item-description');
    itemDescription.innerText = description;
    menuItem.appendChild(itemDescription);

    return menuItem;
}

function createMenu() {
    const content = document.getElementById('content');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    content.appendChild(menuContainer);

    const mainMenuContainer = document.createElement('div');
    mainMenuContainer.classList.add('main-menu');
    menuContainer.appendChild(mainMenuContainer);

    mainMenuContainer.appendChild(createMenuItem('pulled-pork-roll.jpg',
        'PULLED PORK ROLL',
        'spicy',
        'Slow-braised Truebridge Farm pork served on a sourdough hoagie with Swiss cheese, mayo, caramelized onion, mustard, and pickles.'));
    mainMenuContainer.appendChild(createMenuItem('fried-chicken.jpg',
        'PC FARM FRIED CHICKEN THIGHS',
        'spicy','Order yourself 2, 3, or 4 pieces of super-juicy PCF buttermilk soaked, crispy chicken. So tasty! Not to be missed. Try it "Nashville hot"!'))
}

function loadMenu() {
    createNavBar();
    createMenu();
    createFooter();
}

export default loadMenu;