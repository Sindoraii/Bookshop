(function () {
    /* import */
    const catalog = window.Catalog;


    /* init */
    const body = document.getElementsByTagName('body')[0];
    const root = document.createElement('div');
    root.setAttribute('id', 'root');
    const layout = document.createDocumentFragment();

    /* elements for header */
    const header = document.createElement('header');
    header.className = 'header';

    const figureLogo = document.createElement('figure');
    figureLogo.className = 'logo';

    const logo = document.createElement('img');
    logo.className = 'logo__img';
    logo.setAttribute('src', '../assets/images/logo.png');

    const textLogo = document.createElement('figcaption');
    textLogo.className = 'logo__text';
    textLogo.innerText = 'StarFox';

    const header__h1 = document.createElement('h1');
    header__h1.innerHTML = 'Bookshop';

    const menu = document.createElement('nav');
    menu.className = 'menu';

    const link_catalog = document.createElement('a');
    link_catalog.className = 'menu__link';
    link_catalog.innerHTML = 'Catalog';

    const link_bag = document.createElement('a');
    link_bag.className = 'menu__link';
    link_bag.innerHTML = 'Basket';

    const icon_catalog = document.createElement('img');
    icon_catalog.setAttribute('src','../assets/icons/book.png');

    const icon_bag = document.createElement('img');
    icon_bag.setAttribute('src','../assets/icons/bag.png');


    /* content */
    const content = document.createElement('main');
    content.className = 'content';


    /* elements for footer */
    const footer = document.createElement('footer');
    footer.className = 'footer';

    const footer__slogan = document.createElement('a');
    footer__slogan.innerHTML = 'Read with us';

    const footer__p = document.createElement('p');
    footer__p.innerHTML = '© August 2022';


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

    content.append(catalog);
    layout.appendChild(content);

    footer.prepend(footer__slogan);
    footer.appendChild(footer__p);
    layout.appendChild(footer);

    root.appendChild(layout);
})()
