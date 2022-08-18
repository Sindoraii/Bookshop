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

        const list = document.createElement('section');
        list.classList.add( 'basket__list','list');

        const check = document.createElement("article");
        check.classList.add( 'basket__check','check');

        const title = document.createElement('h2');
        title.innerHTML = 'Order Summary';

        const subtotalBox = document.createElement('div');
        subtotalBox.className = 'check__subtotalBox';

        const total = document.createElement('p');
        total.className = 'check__total';
        total.innerHTML = 'Total';

        const totalValue = document.createElement('p');
        totalValue.className = 'check__total-value';
        totalValue.innerHTML = '319$'

        const confirmButton = document.createElement('button');
        confirmButton.className = 'check__confirmButton';
        confirmButton.innerHTML = 'Confirm order';


        /*STUB TODO*/
        books.forEach(book => {
            let card = new BookCard(book,'small');
            card.mount(list);
        })

        /* methods */
        this.mount = (parent) => {
            if(parent instanceof HTMLElement) {
                parent.append(basket);
            } else {
                console.error('BookCard: it is not correct type')
            }
        }

        subtotalBox.appendChild(total);
        subtotalBox.appendChild(totalValue);
        check.appendChild(title);
        check.appendChild(subtotalBox);
        check.appendChild(confirmButton)
        basket.appendChild(list);
        basket.appendChild(check);

    }
    /* export */
    window.Basket = new Basket();
})()
