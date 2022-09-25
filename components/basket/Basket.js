(function () {
    function Basket() {

        /* import */
        const BookCard = window.BookCard;
        const basketManager = window.BasketManager;

        /* init */
        const basket = document.createElement('section');
        basket.classList.add('content__basket', 'basket');

        const list = document.createElement('section');
        list.classList.add( 'basket__list','list');

        const check = document.createElement("article");
        check.classList.add( 'basket__check','check');

        const title = document.createElement('h2');
        title.innerHTML = 'Order Summary';

        const subtotalBox = document.createElement('div');
        subtotalBox.classList.add('check__subtotalBox');

        const total = document.createElement('p');
        total.classList.add('check__total');
        total.innerHTML = 'Total';

        const totalValue = document.createElement('p');
        totalValue.classList.add('check__total-value');
        totalValue.innerHTML = '0';

        const confirmButton = document.createElement('a');
        confirmButton.setAttribute('href','components/deliveryForm/deliveryForm.html');
        confirmButton.classList.add('check__confirmButton','button');
        confirmButton.innerHTML = 'Confirm order';

        /* methods */
        this.update = (books) => {
            createBookCard(books);
            basket.appendChild(list);
            setTotal(books);
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
            basketManager.unsubscribe(this.update);
            basket.textContent = '';
        }

        this.decreaseTotal = (price) => {
            totalValue.innerHTML = `${parseInt(totalValue.innerHTML) - price}$`;
        }

        this.increaseTotal = (price) => {
            totalValue.innerHTML = `${parseInt(totalValue.innerHTML) + price}$`;
        }


        /* private methods */
        function createBookCard(arr) {
            arr.forEach((book)=> {
                let card = new BookCard(book,'small');
                card.mount(list);
            })
        }

        function setTotal(arr) {
            if (list.hasChildNodes()) {
                basket.appendChild(check);
                arr.forEach((book) => {
                    totalValue.innerHTML = `${parseInt(totalValue.innerHTML) + book.price}$`;
                })
            }
        }


        subtotalBox.appendChild(total);
        subtotalBox.appendChild(totalValue);
        check.appendChild(title);
        check.appendChild(subtotalBox);
        check.appendChild(confirmButton)
    }
    /* export */
    window.Basket = new Basket();
})()
