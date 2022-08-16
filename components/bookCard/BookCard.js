(function () {
    function BookCard(book,type) { // type: 'long' , 'small'
        this.book = book;

        /* card elements */
        const card = document.createElement('article');

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

        switch (type) {
            case 'long':
                const description = document.createElement('a');
                description.innerHTML = 'Show more';

                const addToBasketButton  = document.createElement('button');
                addToBasketButton.innerHTML = 'ADD TO BASKET';

                card.className = "book-card";
                bookImg.className = 'book-card__img';
                author.className = 'book-card__author';
                title.className = 'book-card__title';
                description.className = 'book-card__description';
                addToBasketButton.className = 'book-card__button';

                card.appendChild(description);
                card.appendChild(addToBasketButton);

                break;
        }

        /* methods */
        this.mount = (parent) => {
            if(parent instanceof HTMLElement) {
                parent.append(card);
            } else {
                console.error('BookCard: it is not correct type')
            }
        }
    }

    /* export */
    window.BookCard = BookCard;
})()
