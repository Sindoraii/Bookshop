(function () {
    function Basket() {
        /* import */
        const BasketBookCard = window.basketBookCard;
        const basketManager = window.BasketManager;
        const basketOrderCard = window.BasketOrderCard;

        /* init */
        const basket = document.createElement('section');
        basket.classList.add('content__basket', 'basket');

        const list = document.createElement('section');
        list.classList.add( 'basket__list','list');

        /* methods */
        this.update = (bookRecords) => { // books type is array
            basket.textContent = '';
            list.textContent = "";

            if (bookRecords.length !== 0) {
                createBookCard(bookRecords);
                basket.appendChild(list);

                basketOrderCard.updateTotal(bookRecords);
                basketOrderCard.mount(basket)
            }
        }

        this.mount = (parent) => {
            if(parent instanceof HTMLElement) {
                basketManager.subscribe(this.update);
                parent.appendChild(basket);
            } else {
                console.error('Basket: parent is not correct type');
            }
        }

        this.unmount = () => {
            list.textContent = "";
            basketManager.unsubscribe(this.update)
            basket.textContent = '';
            basketOrderCard.unmount();
        }

        /* private methods */
        function createBookCard(arr) {
            arr.forEach((bookRecord)=> {
                let card = new BasketBookCard(bookRecord);
                card.mount(list);
            })
        }
    }
    /* export */
    window.Basket = new Basket();
})()
