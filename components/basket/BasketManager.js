(function (){
    function BasketManager() {
        let books = [];
        let listeners = [];

        /* methods */
        this.update = (book) => {
            let result = books.find((item) => book.title === item.title && book.author === item.author);

            if(result === undefined) {
                books.push(book);
                notifyListeners();
            }
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