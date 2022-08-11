(function () {
    /* init */
    const body = document.getElementsByTagName('body')[0];
    const fragmentForScripts = document.createDocumentFragment();

    /* scrips */
    const layout = document.createElement('script');
    layout.setAttribute('src','built/layout.js');


    const catalog = document.createElement('script');
    catalog.setAttribute('src','components/catalog/Catalog.js');

    const bookCard = document.createElement('script');
    bookCard.setAttribute('src','components/catalog/BookCard.js');

    /* the order connecting of scripts */
    fragmentForScripts.appendChild(bookCard);
    fragmentForScripts.appendChild(catalog);
    fragmentForScripts.appendChild(layout);

    body.appendChild(fragmentForScripts);

})()
