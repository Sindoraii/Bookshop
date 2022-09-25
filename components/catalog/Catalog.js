(function () {
    function Catalog() {
        /* import */
        const data = window.getData;
        const BookCard = window.BookCard;

        /* init */
        const catalog = document.createElement('section');
        catalog.classList.add('content__catalog');

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
                console.error('Catalog: it is not correct type')
            }
        }

        this.unmount = () => {
            catalog.remove();
        }
    }
    /* export */
    window.Catalog = new Catalog();
})()
