(function (){
    function BasketOrderCard(){
        /* elements */
        const check = document.createElement("article");
        check.classList.add( 'basket__check','check');

        const title = document.createElement('h2');
        title.innerHTML = 'Order Summary';

        const subtotalBox = document.createElement('div');
        subtotalBox.classList.add('check__subtotalBox');

        const total = document.createElement('p');
        total.classList.add('check__total');
        total.innerHTML = 'Total';

        const totalValue = document.createElement('p');
        totalValue.classList.add('check__total-value');

        const confirmButton = document.createElement('a');
        confirmButton.setAttribute('href','components/deliveryForm/deliveryForm.html');
        confirmButton.classList.add('check__confirmButton','button');
        confirmButton.innerHTML = 'Confirm order';

        /* methods */
        this.updateTotal = (bookRecords) => {
            if(bookRecords.length !== 0) {
                totalValue.innerHTML = '0';
                bookRecords.forEach((record) => {
                    totalValue.innerHTML = `${parseInt(totalValue.innerHTML) + (record.book.price * record.count)}$`;

                })
            }
        }

        this.mount = (parent) => {
            if(parent instanceof HTMLElement) {
              parent.appendChild(check);
            } else {
                console.error('BasketOrderCard: parent type is incorrect');
            }
        }

        this.unmount = () => {
            check.remove();
        }


        subtotalBox.appendChild(total);
        subtotalBox.appendChild(totalValue);
        check.appendChild(title);
        check.appendChild(subtotalBox);
        check.appendChild(confirmButton)
    }
    /* export */
    window.BasketOrderCard = new BasketOrderCard();
})()