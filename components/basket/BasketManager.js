(function (){
    function BasketManager() {
        /* state of basket list */
        // let books = [];
        let bookRecords = [];
        let listeners = [];

        /* state of cost*/
        let listenersOfCost = [];
        let cost = 0;

        /* methods */
        // this.addBook = (book) => {
        //     let result = books.find((item) => book.title === item.title && book.author === item.author);
        //     if(result === undefined) {
        //         books.push(book);
        //         notifyListeners(listeners,books);
        //     }
        // }

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

        // this.deleteBook = (book) => {
        //     books = books.filter((item) => item.title !== book.title && item.author !== book.author);
        //     notifyListeners(listeners,books);
        // }

        this.deleteBookRecord = (book) => {
            bookRecords = bookRecords.filter((item) => item.book.title !== book.title && item.book.author !== book.author);
            notifyListeners(listeners,bookRecords);
        }

        this.increase = (book) => {
            console.log('inc input',book);

            let record = bookRecords.find((item) => `${book.author}.${book.title}` === item.id );
            console.log('inc record',record);
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
        // this.subscribe = (listener,stateType) => {
        //     if (stateType === 'list') {
        //         let result = listeners.find((item) => listener === item);
        //         if (result === undefined) {
        //             listeners.push(listener);
        //         }
        //         listener(books);
        //     } else if (stateType === 'cost') {
        //         let result = listenersOfCost.find((item) => listener === item);
        //         if (result === undefined) {
        //             listenersOfCost.push(listener);
        //         }
        //     }
        // }

        this.subscribe = (listener) => {
            let result = listeners.find((item) => listener === item);
            if (result === undefined) {
                listeners.push(listener);
            }
            listener(bookRecords);
        }

        // this.unsubscribe = (listener, stateType) => {
        //     if(stateType === 'list') {
        //         listeners = listeners.filter((item) => item !== listener);
        //     } else if(stateType === 'cost') {
        //             listenersOfCost = listenersOfCost.filter((item) => item !== listener)
        //     }
        // }

        this.unsubscribe = (listener) => {
            listeners = listeners.filter((item) => item !== listener);
        }

        // this.updateCost = (cost,type) => { //type is 'decrease' or 'increase'.
        //     if(type === 'increase') {
        //         notifyListeners(listenersOfCost,cost,'increase');
        //     } else if (type === 'decrease') {
        //         notifyListeners(listenersOfCost,cost,'decrease');
        //
        //     }
        // }

        // this.updateCost = () => {
        //
        // }
        // this.updateCost = (book,sum) => {
        //     console.log('update:sum', sum)
        //     let resultBook = books.find((item) => book.title === item.title && book.author === item.author);
        //
        //     if(resultBook !== undefined) {
        //         console.log('update:price', book.price)
        //         cost = sum - book.price;
        //         console.log('update:cost',cost)
        //         notifyListeners(listenersOfCost,cost);
        //     }
        // }

        /* private methods */
        // function notifyListeners(listeners, data,type = '') {
        //     if(type === '') {
        //     listeners.forEach((listener) => {
        //         listener(data);
        //     })
        // } else {
        //         listeners.forEach((listener) => {
        //             listener(data,type);
        //         })
        //     }
        // }

        function notifyListeners(listeners) {
            listeners.forEach((listener) => {
                listener(bookRecords);
            })
        }
    }
    /* export */
    window.BasketManager = new BasketManager();
})()
