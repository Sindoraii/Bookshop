(function (){
    function BasketManager() {
        let bookRecords = [];
        let listeners = [];

        /* methods */
        this.addBookRecords = (book) => {
            let result = bookRecords.find((item) => book.title === item.book.title && book.author === item.book.author);
            if(result === undefined) {
                let record = {
                    book: book,
                    count: 1,
                    id: `${book.author}.${book.title}`,
                };
                bookRecords.push(record);
                notifyListeners(listeners,bookRecords);
            }
        }

        this.deleteBookRecord = (book) => {
            bookRecords = bookRecords.filter((item) => item.book.title !== book.title && item.book.author !== book.author);
            notifyListeners(listeners,bookRecords);
        }

        this.increase = (book) => {
            let record = bookRecords.find((item) => `${book.author}.${book.title}` === item.id );
            record.count += 1;
            notifyListeners(listeners,bookRecords);
        }

        this.decrease = (book) => {
            let record = bookRecords.find((item) => `${book.author}.${book.title}` === item.id );
            if(record.count > 1) {
                record.count -= 1;
                notifyListeners(listeners,bookRecords);
            }
        }

        this.subscribe = (listener) => {
            let result = listeners.find((item) => listener === item);
            if (result === undefined) {
                listeners.push(listener);
            }
            listener(bookRecords);
        }

        this.unsubscribe = (listener) => {
            listeners = listeners.filter((item) => item !== listener);
        }

        /* private methods */
        function notifyListeners(listeners) {
            listeners.forEach((listener) => {
                listener(bookRecords);
            })
        }
    }
    /* export */
    window.BasketManager = new BasketManager();
})()
