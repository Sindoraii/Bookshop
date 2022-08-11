(function () {
    /* init */
    const head = document.getElementsByTagName('head')[0];
    const body = document.getElementsByTagName('body')[0];
    const fragmentForScripts = document.createDocumentFragment();

    /* script of common styles */
    const fontsForLogo = document.createElement('link');
    fontsForLogo.setAttribute('href','https://fonts.googleapis.com/css2?family=DynaPuff:wght@600&display=swap');
    fontsForLogo.setAttribute('rel','stylesheet');

    const commonFonts = document.createElement('link');
    commonFonts.setAttribute('href','https://fonts.googleapis.com/css2?family=Mali:ital,wght@0,400;0,600;1,400&display=swap')
    commonFonts.setAttribute('rel','stylesheet');

    const styleLink = document.createElement('link') ;
    styleLink.setAttribute('href','styles.css');
    styleLink.setAttribute('rel','stylesheet');

    /* scrips of components*/
    const layout = document.createElement('script');
    layout.setAttribute('src','built/layout.js');


    const catalog = document.createElement('script');
    catalog.setAttribute('src','components/catalog/Catalog.js');

    const bookCard = document.createElement('script');
    bookCard.setAttribute('src','components/catalog/BookCard.js');



    /* the order connecting of scripts */
    head.appendChild(fontsForLogo);
    head.appendChild(commonFonts)
    head.appendChild(styleLink);

    fragmentForScripts.appendChild(bookCard);
    fragmentForScripts.appendChild(catalog);
    fragmentForScripts.appendChild(layout);

    body.appendChild(fragmentForScripts);

})()
