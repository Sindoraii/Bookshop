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

    const headerH1 = document.createElement('h1');
    headerH1.innerHTML = 'Bookshop';

    const menu = document.createElement('nav');
    menu.classList.add('menu');

    const linkCatalog = document.createElement('a');
    linkCatalog.classList.add('menu__link');
    linkCatalog.innerHTML = 'Catalog';

    const linkBag = document.createElement('a');
    linkBag.classList.add('menu__link');
    linkBag.innerHTML = 'Basket';

    const iconCatalog = document.createElement('img');
    iconCatalog.setAttribute('src','./assets/icons/book.png');
    iconCatalog.setAttribute('draggable','false');

    const iconBag = document.createElement('img');
    iconBag.setAttribute('src','./assets/icons/bag.png');
    iconBag.setAttribute('draggable','false');

    /* content */
    const content = document.createElement('main');
    content.classList.add('content');

    /* elements for footer */
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const footerSlogan = document.createElement('a');
    footerSlogan.innerHTML = 'Read with us';
    footerSlogan.setAttribute('href','#top');

    const footerP = document.createElement('p');
    footerP.innerHTML = '© August 2022';

    /* events */
    linkCatalog.addEventListener('click', ()=> {
        if(!content.contains(catalog.node)) {
            content.textContent = '';
            catalog.mount(content);
        }
    })

    linkBag.addEventListener('click', ()=> {
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
    header.appendChild(headerH1);

    linkCatalog.prepend(iconCatalog);
    linkBag.prepend(iconBag);
    menu.appendChild(linkCatalog);
    menu.appendChild(linkBag);
    header.appendChild(menu);
    layout.appendChild(header);

    catalog.mount(content);
    layout.appendChild(content);

    footer.prepend(footerSlogan);
    footer.appendChild(footerP);
    layout.appendChild(footer);

    root.appendChild(layout);
})()
