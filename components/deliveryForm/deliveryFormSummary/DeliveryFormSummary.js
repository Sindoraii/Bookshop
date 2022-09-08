(function (){
    function DeliveryFormSummary(obj) {
        /* init */
        const elem = document.createElement('section');
        elem.className = 'content__summary summary';

        const h2 = document.createElement('h2');
        h2.className = 'summary__h2';
        h2.innerHTML = 'Information about order';

        const textSuccessfulOrder = document.createElement('p');
        textSuccessfulOrder.innerHTML = 'The order was created.';

        const customer = document.createElement('p');
        customer.innerHTML = `Customer is ${obj.name} ${obj.surname}.`

        const address =  document.createElement('p');
        address.innerHTML = `The delivery address is ${obj.street} street, house ${obj.house}, flat  ${obj.flat}.`;

        const paymentType = document.createElement('p');
        paymentType.innerHTML = `Payment with ${obj.payment}`;

        const deliveryDate = document.createElement('p');
        deliveryDate.innerHTML = `Delivery date is ${obj.date}`;

        const customerGifts = document.createElement('p');
        let gifts ='';

        if(obj.gifts.length !== 0) {
            obj.gifts.reduce((prev, current) => {
                gifts = prev + ', ' + current;
            })
        } else {
            gifts ='-'
        }
        customerGifts.innerHTML = `Gifts: ${gifts}`

        /* methods */
        this.mount = (parent) => {
            if(parent instanceof HTMLElement) {
                parent.append(elem);
            } else {
                console.error('DeliveryFormSummary: parent is not correct');
            }
        }


        elem.appendChild(h2);
        elem.appendChild(textSuccessfulOrder);
        elem.appendChild(customer);
        elem.appendChild(address);
        elem.appendChild(paymentType);
        elem.appendChild(deliveryDate);
        elem.appendChild(customerGifts);
    }
    /* export */
    window.DeliveryFormSummary = DeliveryFormSummary;
})()
