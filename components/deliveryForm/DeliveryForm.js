(function () {
    function DeliveryForm() {
        /* init */
        const form = document.createElement('form');
        form.classList.add('content__delivery-form','delivery-form');
        form.id = 'deliveryForm';

        const userInfo = document.createElement('fieldset');
        userInfo.classList.add('delivery-form__userInfo', 'userInfo');
        userInfo.form = form.id;
        userInfo.name = 'userInfo';

        const userinfoTitle = document.createElement('legend');
        userinfoTitle.innerHTML = 'Delivery Details';
        userinfoTitle.className = 'userInfo__title';

        /* user info*/
        const userNameInput = document.createElement('input');
        userNameInput.type = 'text';
        userNameInput.id = 'userName';

        const labelForNameInput = document.createElement('label');
        labelForNameInput.setAttribute('for','userName');
        labelForNameInput.innerHTML = 'Name:';

        const userSurnameInput = document.createElement('input');
        userSurnameInput.type = 'text';
        userSurnameInput.id = 'userSurname';

        const labelForSurnameInput = document.createElement('label');
        labelForSurnameInput.setAttribute('for','userSurname');
        labelForSurnameInput.innerHTML = 'Surname:';

        const deliveryDate = document.createElement('input');
        deliveryDate.id = 'deliveryDate';
        deliveryDate.type = 'date';
        deliveryDate.min = getMinDate();

        const labelForDeliveryDate = document.createElement('label');
        labelForDeliveryDate.setAttribute('for','deliveryDate');
        labelForDeliveryDate.innerHTML = 'Delivery date:';

        const streetInput = document.createElement('input');
        streetInput.type = 'text';
        streetInput.id = 'street';

        const labelForStreetInput = document.createElement('label');
        labelForStreetInput.setAttribute('for','street');
        labelForStreetInput.innerHTML = 'Street:';

        const houseNumber = document.createElement('input');
        houseNumber.type = 'number';
        houseNumber.min = '1';
        houseNumber.id = 'houseNumber';

        const labelForHouseNumber = document.createElement('label');
        labelForHouseNumber.setAttribute('for','houseNumber');
        labelForHouseNumber.innerHTML = 'House number:';

        const flatNumber = document.createElement('input');
        flatNumber.type = 'number';
        flatNumber.min = '1';
        flatNumber.id = 'flatNumber';

        const labelForFlatNumber = document.createElement('label');
        labelForFlatNumber.setAttribute('for','flatNumber');
        labelForFlatNumber.innerHTML = 'Flat number:';

        /* payment */
        const fieldsetForPayment = document.createElement('fieldset');
        fieldsetForPayment.classList.add( 'delivery-form__payment','payment');

        const payment = document.createElement('legend');
        payment.innerHTML = 'Choose the payment type:';

        const cash = document.createElement('input');
        cash.type = 'radio';
        cash.id = 'payment-1';
        cash.name = 'payment';

        const labelForCash = document.createElement('label');
        labelForCash.setAttribute('for','payment-1');
        labelForCash.innerHTML = 'Cash';

        const card = document.createElement('input');
        card.type = 'radio';
        card.id = 'payment-2';
        card.name = 'payment';

        const labelForCard = document.createElement('label');
        labelForCard.setAttribute('for','payment-2');
        labelForCard.innerHTML = 'Card';

        /* gifts */
        const fieldsetForGifts = document.createElement('fieldset');
        fieldsetForGifts.classList.add( 'delivery-form__gifts','gifts');

        const gifts = document.createElement('legend');
        gifts.innerHTML = 'Choose 2 gifts:';

        const pack = document.createElement('input');
        pack.type = 'checkbox';
        pack.id = 'gifts-1';
        pack.name = 'gifts';

        const labelForPack = document.createElement('label');
        labelForPack.setAttribute('for','gifts-1');
        labelForPack.innerHTML = 'pack';

        const postcard = document.createElement('input');
        postcard.type = 'checkbox';
        postcard.id = 'gifts-2';
        postcard.name = 'gifts';

        const labelForPostcard = document.createElement('label');
        labelForPostcard.setAttribute('for','gifts-2');
        labelForPostcard.innerHTML = 'postcard';

        const discount = document.createElement('input');
        discount.type = 'checkbox';
        discount.id = 'gifts-3';
        discount.name = 'gifts';

        const labelForDiscount = document.createElement('label');
        labelForDiscount.setAttribute('for','gifts-3');
        labelForDiscount.innerHTML = '2% discount to the next time';

        const pen = document.createElement('input');
        pen.type = 'checkbox';
        pen.id = 'gifts-4';
        pen.name = 'gifts';

        const labelForPen = document.createElement('label');
        labelForPen.setAttribute('for','gifts-4');
        labelForPen.innerHTML = 'branded pen or pencil';

        /* complete button */
        const completeButton = document.createElement('input');
        completeButton.className = 'delivery-form__complete';
        completeButton.type = 'submit';
        completeButton.innerHTML = 'Complete';




        /* methods */
        this.mount = (parent) => {
            if(parent instanceof HTMLElement) {
                parent.append(form);
            } else {
                console.error('DeliveryForm: parent is not correct type');
            }
        }

        /* private methods */
        function getMinDate() {
            let year = new Date().getFullYear();
            let month = new Date().getMonth()+1;
            let day = new Date().getDate()+1;

            if(month < 10) {
                month = 0 + String(month);

            } else if (day < 10) {
                day = 0 + String(day);
            }
            let min = year + '-' + month + '-' + day;
            return min;
        }

        form.appendChild(userinfoTitle);

        userInfo.appendChild(userinfoTitle);

        userInfo.appendChild(labelForNameInput);
        userInfo.appendChild(userNameInput);

        userInfo.appendChild(labelForSurnameInput);
        userInfo.appendChild(userSurnameInput);

        userInfo.appendChild(labelForDeliveryDate);
        userInfo.appendChild(deliveryDate);

        userInfo.appendChild(labelForStreetInput);
        userInfo.appendChild(streetInput);

        userInfo.appendChild(labelForHouseNumber);
        userInfo.appendChild(houseNumber);

        fieldsetForPayment.appendChild(payment);
        fieldsetForPayment.appendChild(cash);
        fieldsetForPayment.appendChild(labelForCash);
        fieldsetForPayment.appendChild(card);
        fieldsetForPayment.appendChild(labelForCard);

        fieldsetForGifts.appendChild(gifts);
        fieldsetForGifts.appendChild(pack);
        fieldsetForGifts.appendChild(labelForPack);
        fieldsetForGifts.appendChild(postcard);
        fieldsetForGifts.appendChild(labelForPostcard);
        fieldsetForGifts.appendChild(discount);
        fieldsetForGifts.appendChild(labelForDiscount);
        fieldsetForGifts.appendChild(pen);
        fieldsetForGifts.appendChild(labelForPen);

        form.appendChild(userInfo);
        form.appendChild(fieldsetForPayment);
        form.appendChild(fieldsetForGifts);
        form.appendChild(completeButton);
    }

    /* export */
    window.DeliveryForm = new DeliveryForm();
})()
