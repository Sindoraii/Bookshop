(function () {
    function BookCard(book,type) { // type: 'long' , 'small'
        /* import */
        const DescPopup = window.Description;
        const basketManager = window.BasketManager;

        this.book = book;
        const card = document.createElement('article');

        if (type === 'long') {
            /* card elements for the catalog */
            const bookImg = document.createElement('img');
            bookImg.setAttribute('src', this.book.imageLink);
            bookImg.setAttribute('alt','book image');

            const author = document.createElement('h3');
            author.innerHTML = this.book.author;

            const title = document.createElement('h2');
            title.innerHTML = this.book.title;

            const price = document.createElement('p');
            price.innerHTML = this.book.price + '$';

            card.appendChild(bookImg);
            card.appendChild(title);
            card.appendChild(author);
            card.appendChild(price);

            const description = document.createElement('a');
            description.innerHTML = 'Show more';

            const addToBasketButton = document.createElement('button');
            addToBasketButton.innerHTML = 'ADD TO BASKET';

            const popup = new DescPopup(this.book.description);
            const body = document.getElementsByTagName('body')[0];

            card.classList.add("book-card");
            bookImg.classList.add('book-card__img');
            description.classList.add('book-card__description');
            addToBasketButton.classList.add('button', 'book-card__button');

            description.addEventListener('click', () => {
                popup.mount(body);
            });

            /* event */
            addToBasketButton.addEventListener('click', () => {
                basketManager.addBookRecords(this.book);
            });

            card.appendChild(description);
            card.appendChild(addToBasketButton);

        } else if (type === 'small') {
            /* card elements for basket */
            const bookImg = document.createElement('img');
            bookImg.setAttribute('src', this.book.book.imageLink);
            bookImg.setAttribute('alt','book image');


            const author = document.createElement('h3');
            author.innerHTML = this.book.book.author;

            const title = document.createElement('h2');
            title.innerHTML = this.book.book.title;

            const price = document.createElement('p');
            price.innerHTML = this.book.book.price + '$';

            card.appendChild(bookImg);
            card.appendChild(title);
            card.appendChild(author);
            card.appendChild(price);

            const wrapper = document.createElement('div');
            wrapper.classList.add('basket__wrapper-qty');

            const increaseButton = document.createElement('button');
            increaseButton.setAttribute('type', 'button');
            increaseButton.classList.add('basket__increase-button');

            const counter = document.createElement('p');
            counter.classList.add('basket__counter');
            counter.innerHTML = String(this.book.count);

            const decreaseButton = document.createElement('button');
            decreaseButton.setAttribute('type', 'button');
            decreaseButton.classList.add('basket__decrease-button');

            const equelElem = document.createElement('p');
            equelElem.innerHTML = '=';

            const sum = document.createElement('p');
            sum.classList.add('basket__sum');
            // sum.innerHTML = this.book.book.price + '$';
            sum.innerHTML = `${this.book.book.price * this.book.count}$`;


            const closeButton = document.createElement('button');
            closeButton.setAttribute('type', 'button');
            closeButton.classList.add('close-button', 'basket__close-button');

            card.classList.add("book-card", "book-card_small", 'basket__card');
            bookImg.classList.add('book-card__img', 'book-card__img_small');

            /* events */
            closeButton.addEventListener('click', () => {
                basketManager.deleteBookRecord(this.book.book);
            })

            increaseButton.addEventListener('click', () => {
                basketManager.increase(this.book.book);
            })

            decreaseButton.addEventListener('click', () => {
                if (this.book.count > 1) {
                    basketManager.decrease(this.book.book);
                }
            })

            wrapper.appendChild(increaseButton);
            wrapper.appendChild(counter);
            wrapper.appendChild(decreaseButton);
            wrapper.appendChild(equelElem);
            wrapper.appendChild(sum);
            card.appendChild(wrapper);
            card.appendChild(closeButton);
        }


        /* methods */
        this.mount = (parent) => {
            if(parent instanceof HTMLElement) {
                parent.append(card);
            } else {
                console.error('BookCard: parent is not correct')
            }
        }
    }
    /* export */
    window.BookCard = BookCard;
})()
