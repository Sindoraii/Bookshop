(function () {
    function BookCard(book) {
        this.book = book;

        /* card elements */
        const card = document.createElement('article');
        card.className = "book-card";

        const bookImg = document.createElement('img');
        bookImg.className = 'book-card__img';
        bookImg.setAttribute('src', this.book.imageLink);
        bookImg.setAttribute('alt','book image');

        const author = document.createElement('h3');
        author.className = 'book-card__author';
        author.innerHTML = this.book.author;

        const title = document.createElement('h2');
        title.className = 'book-card__title';
        title.innerHTML = this.book.title;

        const price = document.createElement('p');
        price.innerHTML = this.book.price + '$';

        const description = document.createElement('a');
        description.className = 'book-card__description';
        description.innerHTML = 'Show more';

        const addToBasketButton  = document.createElement('button');
        addToBasketButton.innerHTML = 'ADD TO BASKET';


        card.appendChild(bookImg);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(price);
        card.appendChild(description);
        card.appendChild(addToBasketButton);


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
