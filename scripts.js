(function () {
    const body = document.getElementsByTagName('body')[0];
    const fragmentForScripts = document.createDocumentFragment();

    const layout = document.createElement('script');
    layout.setAttribute('src','built/layout.js');


    /* the order connecting of scripts */
    fragmentForScripts.appendChild(layout);

    body.appendChild(fragmentForScripts);

})()
