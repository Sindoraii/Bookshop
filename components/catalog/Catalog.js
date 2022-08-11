(function () {
    function Catalog() {
        /* init */
        const fragment = document.createDocumentFragment();

        const catalog = document.createElement('section');
        catalog.className = 'content__catalog';

        function createCard(){
           fetch('../books.json')
               .then(response => {
                   return  response.json();
               })
               .then(data => {
                   const BookCard = window.BookCard; // import
                   data.forEach(book => {
                           let card = new BookCard(book);
                           card.mount(catalog);
                       })
               });
       }
        createCard();

        fragment.appendChild(catalog);


        return fragment;
    }

    /* export */
    window.Catalog = new Catalog();

})()
