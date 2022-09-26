(function (){
    function BasketManager() {
        let books = [];
        let listeners = [];

        /* methods */
        this.addBook = (book) => {
            let result = books.find((item) => book.title === item.title && book.author === item.author);
            if(result === undefined) {
                books.push(book);
                notifyListeners();
            }
        }

        this.deleteBook = (book) => {
            books = books.filter((item) => item.title !== book.title && item.author !== book.author)
            notifyListeners();
        }

        this.subscribe = (listener) => {
           let result =  listeners.find((item) => listener === item);
           if(result === undefined) {
               listeners.push(listener);
           }
            listener(books);
        }

        this.unsubscribe = (listener) => {
            listeners = listeners.filter((item) => item !== listener);
        }

        /* private methods */
        function notifyListeners() {
            listeners.forEach((listener) => {
                listener(books);
            })
        }
    }
    /* export */
    window.BasketManager = new BasketManager();
})()
