(function () {
    function Basket() {
        /* STUB data TODO */
        const data = window.getData;
        const BookCard = window.BookCard;
        const books = JSON.parse(data);

        /* init */
        const basket = document.createElement('section');
        basket.classList.add('content__basket', 'basket');
        this.node = basket;

        const basketList = document.createElement('section');
        basketList.classList.add( 'basket__list','list');

        /*STUB TODO*/
        books.forEach(book => {
            let card = new BookCard(book,'small');
            card.mount(basketList);
        })

        /* methods */
        this.mount = (parent) => {
            if(parent instanceof HTMLElement) {
                parent.append(basket);
            } else {
                console.error('BookCard: it is not correct type')
            }
        }

        basket.appendChild(basketList);

    }
    /* export */
    window.Basket = new Basket();
})()
