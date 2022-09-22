(function () {
    /* import */
    const catalog = window.Catalog;
    const basket = window.Basket;

    /* init */
    const body = document.getElementsByTagName('body')[0];
    const root = document.createElement('div');
    root.setAttribute('id', 'root');
    const layout = document.createDocumentFragment();


    /* elements for header */
    const header = document.createElement('header');
    header.classList.add('header');
    header.id = 'top';

    const figureLogo = document.createElement('figure');
    figureLogo.classList.add('logo');

    const logo = document.createElement('img');
    logo.classList.add('logo__img');
    logo.setAttribute('src', './assets/images/logo.png');
    logo.setAttribute('draggable','false');

    const textLogo = document.createElement('figcaption');
    textLogo.classList.add('logo__text');
    textLogo.innerText = 'StarFox';

    const header__h1 = document.createElement('h1');
    header__h1.innerHTML = 'Bookshop';

    const menu = document.createElement('nav');
    menu.classList.add('menu');

    const link_catalog = document.createElement('a');
    link_catalog.classList.add('menu__link');
    link_catalog.innerHTML = 'Catalog';

    const link_bag = document.createElement('a');
    link_bag.classList.add('menu__link');
    link_bag.innerHTML = 'Basket';

    const icon_catalog = document.createElement('img');
    icon_catalog.setAttribute('src','./assets/icons/book.png');
    icon_catalog.setAttribute('draggable','false');

    const icon_bag = document.createElement('img');
    icon_bag.setAttribute('src','./assets/icons/bag.png');
    icon_bag.setAttribute('draggable','false');

    /* content */
    const content = document.createElement('main');
    content.classList.add('content');

    /* elements for footer */
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const footer__slogan = document.createElement('a');
    footer__slogan.innerHTML = 'Read with us';
    footer__slogan.setAttribute('href','#top');

    const footer__p = document.createElement('p');
    footer__p.innerHTML = '© August 2022';

    /* events */
    link_catalog.addEventListener('click', ()=> {
        if(!content.contains(catalog.node)) {
            content.textContent = '';
            catalog.mount(content);
        }
    })

    link_bag.addEventListener('click', ()=> {
        if(!content.contains(basket.node)) {
            content.textContent = '';
            basket.mount(content);
        }
    })

    /* appending relations between elements */
    body.appendChild(root);

    figureLogo.appendChild(logo);
    figureLogo.appendChild(textLogo);
    header.appendChild(figureLogo);
    header.appendChild(header__h1);

    link_catalog.prepend(icon_catalog);
    link_bag.prepend(icon_bag);
    menu.appendChild(link_catalog);
    menu.appendChild(link_bag);
    header.appendChild(menu);
    layout.appendChild(header);

    catalog.mount(content);
    layout.appendChild(content);

    footer.prepend(footer__slogan);
    footer.appendChild(footer__p);
    layout.appendChild(footer);

    root.appendChild(layout);

})()
