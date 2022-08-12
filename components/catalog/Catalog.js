(function () {
    function Catalog() {
        /* import */
        const books = window.getData;
        const BookCard = window.BookCard;

        /* init */
        const catalog = document.createElement('section');
        catalog.className = 'content__catalog';


        books.forEach(book => {
            let card = new BookCard(book);
            card.mount(catalog);
        })

        return catalog;
    }

    /* export */
    window.Catalog = new Catalog();

})()
