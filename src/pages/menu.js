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
        attribute.classList.add('attribute-img-s');
        attribute.src = '../src/assets/images/menu-images/icons/spicy-icon.svg';
        itemTitle.appendChild(attribute);
    } else if (attribute === 'vegan') {
        let attribute = document.createElement('img');
        attribute.classList.add('attribute-img-v');
        attribute.src = '../src/assets/images/menu-images/icons/vegan-icon.svg';
        itemTitle.appendChild(attribute);
    } else if (attribute === 'spicy-vegan') {
        let attribute = document.createElement('img');
        attribute.classList.add('attribute-img-sv');
        attribute.src = '../src/assets/images/menu-images/icons/spicy-and-vegan-icon.svg';
        itemTitle.appendChild(attribute);
    } else {

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

function createMenuItemNoImg(title, attribute, description) {

    let menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    let itemTitle = document.createElement('div');
    itemTitle.classList.add('title');
    menuItem.appendChild(itemTitle);

    let itemName = document.createElement('h4');
    itemName.classList.add('name');
    itemName.innerHTML = title;
    itemTitle.appendChild(itemName);

    if (attribute === 'spicy') {
        let attribute = document.createElement('img');
        attribute.classList.add('attribute-img-s');
        attribute.src = '../src/assets/images/menu-images/icons/spicy-icon.svg';
        itemTitle.appendChild(attribute);
    } else if (attribute === 'vegan') {
        let attribute = document.createElement('img');
        attribute.classList.add('attribute-img-v');
        attribute.src = '../src/assets/images/menu-images/icons/vegan-icon.svg';
        itemTitle.appendChild(attribute);
    } else if (attribute === 'spicy-vegan') {
        let attribute = document.createElement('img');
        attribute.classList.add('attribute-img-sv');
        attribute.src = '../src/assets/images/menu-images/icons/spicy-and-vegan-icon.svg';
        itemTitle.appendChild(attribute);
    } else {

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

    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menu-header');
    menuContainer.appendChild(menuHeader);

    const menuTitle = document.createElement('h2');
    menuTitle.classList.add('black-bar');
    menuTitle.innerText = 'MENU';
    menuHeader.appendChild(menuTitle);

    const featuredItems = document.createElement('h4');
    featuredItems.classList.add('gold-spaced');
    featuredItems.innerText = 'FEATURED ITEMS';
    menuHeader.appendChild(featuredItems);

    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('options-container');
    menuHeader.appendChild(optionsContainer);

    const veganOption = document.createElement('div');
    veganOption.classList.add('option');
    veganOption.innerHTML = `<img class = 'options-img-v' src='../src/assets/images/menu-images/icons/vegan-icon.svg'><p class = 'vegan-text'>Vegan Option</p>`;
    optionsContainer.appendChild(veganOption);

    const spicyOption = document.createElement('div');
    spicyOption.classList.add('option');
    spicyOption.innerHTML = `<img class = 'options-img-s' src='../src/assets/images/menu-images/icons/spicy-icon.svg'><p class = 'vegan-text'>Available Spicy</p>`;
    optionsContainer.appendChild(spicyOption);

    const mainMenuContainer = document.createElement('div');
    mainMenuContainer.classList.add('main-menu');
    menuContainer.appendChild(mainMenuContainer);

    mainMenuContainer.appendChild(createMenuItem('pulled-pork-roll.jpg',
        'PULLED PORK ROLL',
        'spicy',
        'Slow-braised Truebridge Farm pork served on a sourdough hoagie with Swiss cheese, mayo, caramelized onion, mustard, and pickles.'));
    mainMenuContainer.appendChild(createMenuItem('fried-chicken.jpg',
        'PC FARM FRIED CHICKEN THIGHS',
        'spicy',
        'Order yourself 2, 3, or 4 pieces of super-juicy PCF buttermilk soaked, crispy chicken. So tasty! Not to be missed. Try it "Nashville hot"!'));
    mainMenuContainer.appendChild(createMenuItem('croque-garcon-burger.jpg',
        'CROQUE GARCON BURGER',
        '', `It rhymes with "smoke cars on," and it's a 1/3 pound Jon's Naturals burger with cheese, ham, a sunny-side-up Evetta Farms egg, green onion, mustard, and truffle mayo on a Ciabatta roll.`));

    const usaTodayContainer = document.createElement('div');
    usaTodayContainer.classList.add('usa-today-container');
    mainMenuContainer.appendChild(usaTodayContainer);

    const usaTodayImg = document.createElement('img');
    usaTodayImg.classList.add('usa-img');
    usaTodayImg.src = '../src/assets/images/menu-images/usa-today.png';
    usaTodayContainer.appendChild(usaTodayImg);

    const usaTodayTitle = document.createElement('p');
    usaTodayTitle.classList.add('usa-title');
    usaTodayTitle.innerText = 'BROWN CALLS THE CROQUE GARCON HIS FAVORITE HAMBURGER IN THE COUNTRY.';
    usaTodayContainer.appendChild(usaTodayTitle);

    const usaTodaySubTitle = document.createElement('p');
    usaTodaySubTitle.classList.add('usa-subtitle');
    usaTodaySubTitle.innerText = `He says it has the perfect meat-to-bun ratio. "They've turned the hamburger into high art."`;
    usaTodayContainer.appendChild(usaTodaySubTitle);

    const usaTodaySeparator = document.createElement('div');
    usaTodaySeparator.classList.add('usa-separator');
    usaTodayContainer.appendChild(usaTodaySeparator);

    const usaTodayLink = document.createElement('a');
    usaTodayLink.classList.add('usa-link');
    usaTodayLink.href = 'https://www.usatoday.com/story/travel/destinations/10greatplaces/2015/06/26/alton-brown-restaurant-recommendations/29277793/';
    usaTodayLink.target = '_blank';
    usaTodayLink.innerHTML = `<p class = 'usa-article-title'>Alton Brown's favorite restaurants from a cross-country trip</p><br><p class = 'usa-article-date'>June 26, 2015</p>`
    usaTodayContainer.appendChild(usaTodayLink);

    mainMenuContainer.appendChild(createMenuItem('block-burger.jpg',
        'BLOCK BURGER',
        'vegan', `Earn your street cred by diving into this 1/3 pound Jon's Naturals burger served with gouda cheese, mayo, mustard, ketchup, lettuce, tomato, onion, and pickle.`));
    mainMenuContainer.appendChild(createMenuItem('bacon-and-bert.jpg',
        'BACON & BRIE',
        '', `Thick-cut bacon, Brie, seasonal fruit butter, and arugula served on Le Quartier bread.`));
    mainMenuContainer.appendChild(createMenuItem('poutine.jpg',
        'POUTINE',
        '', `A gift from north of the border. French fries topped with cheese curds and smothered in beef gravy.`));
    mainMenuContainer.appendChild(createMenuItem('duck-duck-goose-fries.jpg',
        'DUCK DUCK GOOSE FRIES',
        '', `Duck confit, crispy skin, cheese curds, mayo, gravy, and gooseberry gastrique — yeah, you read that right — over a basket of fries.`));


    const dailySpecialContainer = document.createElement('div');
    dailySpecialContainer.classList.add('daily-special-menu');
    menuContainer.appendChild(dailySpecialContainer);

    const burguerLink = document.createElement('a');
    burguerLink.classList.add('left-info');
    burguerLink.href = "https://www.facebook.com/Block-16-274838819236148";
    burguerLink.target = '_blank';
    burguerLink.innerHTML = `<img src='../src/assets/images/home-media/home-buguer.png'>`;
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
    fbCallout.innerHTML = 'FOLLOW US ON FACEBOOK TO SEE DAILY SPECIALS IN YOUR "FEED"! <img src = "../src/assets/images/home-media/icons/logo-facebook.svg">';
    rightInfoContainer.appendChild(fbCallout);

    const secondaryMenu = document.createElement('div');
    secondaryMenu.classList.add('secondary-menu');
    menuContainer.appendChild(secondaryMenu);


    secondaryMenu.appendChild(createMenuItemNoImg('DUCK DUCK GOOSE FRIES',
        'spicy-vegan', `Duck confit, crispy skin, cheese curds, mayo, gravy, and gooseberry gastrique — yeah, you read that right — over a basket of fries.`));
    secondaryMenu.appendChild(createMenuItemNoImg('POUTINE BURRITO',
        'vegan', `Roasted brisket, regional curds, tots, B16 gravy, malt vinegar aioli all wrapped up in a flour tortilla.`));
    secondaryMenu.appendChild(createMenuItemNoImg('BELGIAN SMASH<sup>2</sup> BURGER',
        '', `Double smashed wagyu patties, brown butter compound melt, raisin jam, Swiss, onions, bacon, and mayo on a potato bun.`));
    secondaryMenu.appendChild(createMenuItemNoImg('B16 HOUSE SALAD',
        'vegan', `Choose grilled chicken, tempeh, seitan, or wild sockeye salmon (+3.00). We'll mix it up with Spring mix, pickled red onion, kalamatas, queso fresco, and local veggies.`));
    secondaryMenu.appendChild(createMenuItemNoImg('3 HAPPINESS BURGER',
        '', `1/3 lb. patty, crab rangoon cream cheese, stir fry slaw, green onion, mayo, sweet and spicy chili on a sesame bun.`));
    secondaryMenu.appendChild(createMenuItemNoImg('DRAGON WRAP',
        'vegan', `Grilled naan wrapped around pickled veggie slaw, hummus, arugula, fries, and dragon sauce. Available with PCF chicken, seitan, tempeh, or wild sockeye salmon (+3.00).`));
    secondaryMenu.appendChild(createMenuItemNoImg('FEATURED GRILLED CHEESE SANDWICH',
        '', `Check out our fully loaded, super-tasty, daily grilled cheese creation.`));
    secondaryMenu.appendChild(createMenuItemNoImg('RENEGADE CHICKENWICH',
        'spicy', `Fried PCF chicken, 7 pepper Nashville extra hot, buttermilk dill slaw, habanero pickles, mayo on a sesame seed bun. (Available not spicy)`));
    secondaryMenu.appendChild(createMenuItemNoImg('MACKRIBEO',
        '', `House baby back rib and beef patty, agrodolce bbq, onion rings, pickle, and mayo. (Available vegan)`));
    secondaryMenu.appendChild(createMenuItemNoImg('DRAGON FRIES',
        'vegan', `Spicy dragon sauce, cheese curds, scallion, and a crushed fortune cookie.`));
    secondaryMenu.appendChild(createMenuItemNoImg(`POP'S FRIES`,
        '', `Fries topped with griddled cheese curds, macerated raisin, brown sugar, brown butter pork, bacon, gooseberry gastrique, mayo, and crushed Luken wafer.`));
    secondaryMenu.appendChild(createMenuItemNoImg(`OMAHA FRIES`,
        '', `Topped with wagyu sloppy joe, griddled cheese curds, house ranch, Dorothy Lynch, scallion, and Doritos.`));

    const sidesDrinksMenuTitle = document.createElement('div');
    sidesDrinksMenuTitle.classList.add('sides-drinks-menu-title');
    menuContainer.appendChild(sidesDrinksMenuTitle);

    const sidesTitle = document.createElement('h4');
    sidesTitle.classList.add('sides-drinks-title');
    sidesTitle.innerHTML = 'SIDES';
    sidesDrinksMenuTitle.appendChild(sidesTitle);

    const drinksTitle = document.createElement('h4');
    drinksTitle.classList.add('sides-drinks-title');
    drinksTitle.innerHTML = 'DRINKS';
    sidesDrinksMenuTitle.appendChild(drinksTitle);

    const sidesDrinksMenu = document.createElement('div');
    sidesDrinksMenu.classList.add('secondary-menu');
    menuContainer.appendChild(sidesDrinksMenu);

    const sides = document.createElement('div');
    sides.innerHTML = `SEASONED FRIES<br>SWEET POTATO FRIES<br>SIDE SALAD`;
    sides.classList.add('sides');
    sidesDrinksMenu.appendChild(sides);

    const makeCombo = document.createElement('div');
    makeCombo.classList.add('combo-container');
    sidesDrinksMenu.appendChild(makeCombo);

    const comboTitle = document.createElement('p');
    comboTitle.classList.add('combo-title');
    comboTitle.innerText = 'MAKE IT A COMBO';
    makeCombo.appendChild(comboTitle);

    const comboText = document.createElement('p');
    comboText.classList.add('combo-text');
    comboText.innerText = '+ Add a soda and seasoned French fries to any entrée.';
    makeCombo.appendChild(comboText);

    sidesDrinksMenu.appendChild(createMenuItemNoImg(`SODA`,
        '', `We serve Coke, Diet Coke, Cherry Coke, Ginger Ale, blue Powerade, and iced tea.`));
    sidesDrinksMenu.appendChild(createMenuItemNoImg(`BEER`,
        '', `Be sure to check our beer list when you visit. We are proud to feature local breweries, including Lucky Bucket, Zipline, Thunderhead, Empyrean, Peace Tree, Nebraska Brewing, Kinkaider, and Brickway Breweries.`));
    sidesDrinksMenu.appendChild(createMenuItemNoImg(`WINE`,
        '', `Be sure to check our wine list when you visit. We serve a variety of wines, including cabernet sauvignon, merlot, pinot noir, chardonnay, sauvignon blanc, and riesling.`));

}

function loadMenu() {
    createNavBar();
    createMenu();
    createFooter();
}

export default loadMenu;