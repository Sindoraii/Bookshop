(function () {
    function Catalog() {
        /* import */
        const data = window.getData;
        const BookCard = window.BookCard;

        /* init */
        const catalog = document.createElement('section');
        catalog.className = 'content__catalog';
        this.node = catalog;

        const books = JSON.parse(data);

        books.forEach(book => {
            let card = new BookCard(book,'long');
            card.mount(catalog);
        })

        /* methods */
        this.mount = (parent) => {
            if(parent instanceof HTMLElement) {
                parent.append(catalog);
            } else {
                console.error('BookCard: it is not correct type')
            }
        }
    }
    /* export */
    window.Catalog = new Catalog();
})()
