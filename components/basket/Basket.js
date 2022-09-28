(function () {
    function Basket() {
        /* import */
        const BookCard = window.BookCard;
        const basketManager = window.BasketManager;
        const basketOrderCard = window.BasketOrderCard;

        /* init */
        const basket = document.createElement('section');
        basket.classList.add('content__basket', 'basket');

        const list = document.createElement('section');
        list.classList.add( 'basket__list','list');

        // const check = document.createElement("article");
        // check.classList.add( 'basket__check','check');

        // const title = document.createElement('h2');
        // title.innerHTML = 'Order Summary';
        //
        // const subtotalBox = document.createElement('div');
        // subtotalBox.classList.add('check__subtotalBox');
        //
        // const total = document.createElement('p');
        // total.classList.add('check__total');
        // total.innerHTML = 'Total';
        //
        // const totalValue = document.createElement('p');
        // totalValue.classList.add('check__total-value');
        // totalValue.innerHTML = '0';
        //
        // const confirmButton = document.createElement('a');
        // confirmButton.setAttribute('href','components/deliveryForm/deliveryForm.html');
        // confirmButton.classList.add('check__confirmButton','button');
        // confirmButton.innerHTML = 'Confirm order';

        /* methods */
        // this.update = (books) => { // books type is array
        //     basket.textContent = '';
        //     list.textContent = "";
        //     totalValue.innerHTML = '0';
        //
        //     if (books.length !== 0) {
        //         createBookCard(books);
        //         basket.appendChild(list);
        //         setTotal(books);
        //     }
        // }

        this.update = (bookRecords) => { // books type is array
            basket.textContent = '';
            list.textContent = "";
            // totalValue.innerHTML = '0';

            if (bookRecords.length !== 0) {
                createBookCard(bookRecords);
                basket.appendChild(list);
                // setTotal(books);

                basketOrderCard.updateTotal(bookRecords);
                basketOrderCard.mount(basket)
            }
        }

        this.mount = (parent) => {
            if(parent instanceof HTMLElement) {
                basketManager.subscribe(this.update);
                // basketManager.subscribe(this.update,'list');
                // basketManager.subscribe(this.changeTotal,'cost');
                parent.appendChild(basket);
            } else {
                console.error('Basket: parent is not correct type');
            }
        }

        this.unmount = () => {
            list.textContent = "";
            basketManager.unsubscribe(this.update)
            // basketManager.unsubscribe(this.update,'list');
            // basketManager.unsubscribe(this.changeTotal,'cost');
            basket.textContent = '';
            // totalValue.innerHTML = '0';


            basketOrderCard.unmount();
        }




        // this.changeTotal = (cost,type) => {
        //
        //     if(type === 'increase') {
        //         console.log('cost in Change inc', cost)
        //         totalValue.innerHTML = `${parseInt(totalValue.innerHTML) + cost}$`;
        //     } else if(type === 'decrease') {
        //         console.log('dec in change()',cost)
        //         totalValue.innerHTML = `${parseInt(totalValue.innerHTML) - cost}$`;
        //     }
        //
        // }

        // this.decreaseTotal = (price) => {
        //     totalValue.innerHTML = `${parseInt(totalValue.innerHTML) - price}$`;
        // }
        //
        // this.increaseTotal = (price) => {
        //     totalValue.innerHTML = `${parseInt(totalValue.innerHTML) + price}$`;
        // }


        /* private methods */
        // function createBookCard(arr) {
        //     arr.forEach((book)=> {
        //         let card = new BookCard(book,'small');
        //         card.mount(list);
        //     })
        // }

        function createBookCard(arr) {
            arr.forEach((bookRecord)=> {
                let card = new BookCard(bookRecord,'small');
                card.mount(list);
            })
        }


        // function setTotal(arr) {
        //     if (list.hasChildNodes()) {
        //         basket.appendChild(check);
        //         arr.forEach((book) => {
        //             totalValue.innerHTML = `${parseInt(totalValue.innerHTML) + book.price}$`;
        //         })
        //     }
        //     console.log('setTotal',totalValue.innerHTML)
        //
        // }


        // subtotalBox.appendChild(total);
        // subtotalBox.appendChild(totalValue);
        // check.appendChild(title);
        // check.appendChild(subtotalBox);
        // check.appendChild(confirmButton)
    }
    /* export */
    window.Basket = new Basket();
})()
