(function (){
    function basketBookCard(bookRecord) {
        const basketManager = window.BasketManager;

        this.bookRecord = bookRecord;

        const card = document.createElement('article');

        /* card elements for basket */
        const bookImg = document.createElement('img');
        bookImg.setAttribute('src', this.bookRecord.book.imageLink);
        bookImg.setAttribute('alt','book image');

        const author = document.createElement('h3');
        author.innerHTML = this.bookRecord.book.author;

        const title = document.createElement('h2');
        title.innerHTML = this.bookRecord.book.title;

        const price = document.createElement('p');
        price.innerHTML = this.bookRecord.book.price + '$';

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
        counter.innerHTML = String(this.bookRecord.count);

        const decreaseButton = document.createElement('button');
        decreaseButton.setAttribute('type', 'button');
        decreaseButton.classList.add('basket__decrease-button');

        const equelElem = document.createElement('p');
        equelElem.innerHTML = '=';

        const sum = document.createElement('p');
        sum.classList.add('basket__sum');
        sum.innerHTML = `${this.bookRecord.book.price * this.bookRecord.count}$`;

        const closeButton = document.createElement('button');
        closeButton.setAttribute('type', 'button');
        closeButton.classList.add('close-button', 'basket__close-button');

        card.classList.add("book-card", "book-card_small", 'basket__card');
        bookImg.classList.add('book-card__img', 'book-card__img_small');

        /* events */
        closeButton.addEventListener('click', () => {
            basketManager.deleteBookRecord(this.bookRecord.book);
        })

        increaseButton.addEventListener('click', () => {
            basketManager.increase(this.bookRecord.book);
        })

        decreaseButton.addEventListener('click', () => {
            if (this.bookRecord.count > 1) {
                basketManager.decrease(this.bookRecord.book);
            }
        })

        wrapper.appendChild(increaseButton);
        wrapper.appendChild(counter);
        wrapper.appendChild(decreaseButton);
        wrapper.appendChild(equelElem);
        wrapper.appendChild(sum);
        card.appendChild(wrapper);
        card.appendChild(closeButton);


        this.mount = (parent) => {
            if(parent instanceof HTMLElement) {
                parent.append(card);
            } else {
                console.error('BookCard: parent is not correct')
            }
        }
    }
    window.basketBookCard = basketBookCard;
})()
