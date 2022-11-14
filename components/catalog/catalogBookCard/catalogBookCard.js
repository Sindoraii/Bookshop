(function () {
    function catalogBookCard(book) {
        const DescPopup = window.Description;
        const basketManager = window.BasketManager;

        this.book = book;
        const card = document.createElement('article');

        const bookImg = document.createElement('img');
        bookImg.setAttribute('src', this.book.imageLink);
        bookImg.setAttribute('alt', 'book image');

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


        this.mount = (parent) => {
            if(parent instanceof HTMLElement) {
                parent.append(card);
            } else {
                console.error('BookCard: parent is not correct')
            }
        }
    }

    /* export */
    window.catalogBookCard = catalogBookCard;
})()