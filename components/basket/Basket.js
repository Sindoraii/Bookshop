(function () {
    function Basket() {
        this.books = [];
        this.booksInBasket = [];
        const BookCard = window.BookCard;

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
        subtotalBox.className = 'check__subtotalBox';

        const total = document.createElement('p');
        total.className = 'check__total';
        total.innerHTML = 'Total';

        const totalValue = document.createElement('p');
        totalValue.className = 'check__total-value';
        totalValue.innerHTML = '319$'

        const confirmButton = document.createElement('a');
        confirmButton.setAttribute('href','components/deliveryForm/deliveryForm.html');
        confirmButton.classList.add('check__confirmButton','button');
        confirmButton.innerHTML = 'Confirm order';


        /* methods */
        this.mount = (parent) => {
            if(parent instanceof HTMLElement) {
                createBookCard(this.books);
                parent.append(basket);
                this.books = [];
            } else {
                console.error('Basket: parent is not correct type');
            }
        }

        this.update = (data) =>{
            if(!this.books.includes(data) && !this.booksInBasket.includes(data)) {
                this.books.push(data);
                this.booksInBasket.push(data);
            }
        }


        /* private methods */
        function createBookCard(arr) {
            arr.forEach((book)=> {
                let card = new BookCard(book,'small');
                card.mount(list);
            })
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
