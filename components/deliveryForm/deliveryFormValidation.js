(function () {
    function deliveryFormValidation() {
        /* import */
       const DeliveryFormSummary = window.DeliveryFormSummary;

        const MAX_GIFTS = 2;

        const form = document.forms['delivery'];
        const date = form.elements['date'];
        date.min = setMinDate();

        const name = form.elements['name'];
        const surname =  form.elements['surname'];
        const street = form.elements['street'];
        const house = form.elements['houseNumber'];
        const flat = form.elements['flatNumber'];


        const gifts =  Array.from(form.elements['gifts']);
        gifts.forEach((item)=> item.addEventListener('click',(e)=>checkCountGifts(e)))


        form.addEventListener('focus', (event) => stopValidation(event.target), true);

        form.addEventListener('blur', (event) => {
            startValidation(event.target);
            changeSubmitState();
        }, true);

        form.addEventListener('submit',(event)=>{
            const main = document.getElementsByTagName('main')[0];
            const summary = new DeliveryFormSummary(getSummary());
            summary.mount(main);
           form.remove();
        })


        function startValidation(target) {
            switch (target.name) {
                case 'name':
                    checkStringWithoutNumber(name);
                    break;
                case 'surname':
                    checkStringWithoutNumber(surname);
                    break;
                case 'date':
                    isEmptyDate(date);
                    break;
                case 'street':
                    checkStringWithNumber(street);
                    break;
                case 'houseNumber':
                    isPositiveNumber(house);
                    break;
                case 'flatNumber':
                    isPositiveNumberWithDashSymbol(flat);
                    break;
            }
         }

        function stopValidation(target) {
            const error = target.parentNode;
            error.setAttribute('data-error-message','');
            target.classList.remove('invalid');
        }


        function checkStringWithoutNumber(elem) {
            if(!elem.validity.valid) {
                if(elem.value.length < elem.minLength) {
                    elem.classList.add('invalid');
                    elem.parentNode.setAttribute('data-error-message', `*The length should be not less than ${elem.minLength} symbols`);
                } else {
                    elem.classList.add('invalid');
                    elem.parentNode.setAttribute('data-error-message', `*The field should be consist of strings only`);
                }
            } else {
                elem.classList.remove('invalid');
                elem.parentNode.setAttribute('data-error-message', ``);
            }
        }

        function checkStringWithNumber(elem) {
            if (!elem.validity.valid) {
                if (elem.value.length < elem.minLength) {
                    elem.classList.add('invalid');
                    elem.parentNode.setAttribute('data-error-message', `*The length should be not less than ${elem.minLength} symbols`);
                } else {
                    elem.classList.add('invalid');
                    elem.parentNode.setAttribute('data-error-message', '*The field should be consist of strings or numbers');
                }
            } else {
                elem.classList.remove('invalid');
                elem.parentNode.setAttribute('data-error-message', '');
            }
        }

        function isPositiveNumber(elem) {
            if(!elem.validity.valid) {
                elem.classList.add('invalid');
                elem.parentNode.setAttribute('data-error-message', '*The field should be consist of positive numbers');
            } else {
                elem.classList.remove('invalid');
                elem.parentNode.setAttribute('data-error-message', '');
            }
        }

        function isPositiveNumberWithDashSymbol(elem) {
            if(!elem.validity.valid) {
                elem.classList.add('invalid');
                elem.parentNode.setAttribute('data-error-message', `*The field should be a positive number. The dash symbol is allowed`);
            } else {
                elem.classList.remove('invalid');
                elem.parentNode.setAttribute('data-error-message', ``);
            }
        }

        function isEmptyDate(elem) {
            if(!elem.validity.valid) {
                elem.classList.add('invalid');
                elem.parentNode.setAttribute('data-error-message', `*The field is required`)
            } else {
                elem.classList.remove('invalid');
                elem.parentNode.setAttribute('data-error-message', ``);
            }
        }


        function setMinDate() {
            let year = new Date().getFullYear();
            let month = new Date().getMonth() + 1;
            let day = new Date().getDate() + 1;
            if (month < 10 && day < 10) {
                month = 0 + String(month);
                day = 0 + String(day);
            } else if (month < 10) {
                month = 0 + String(month);

            } else if (day < 10) {
                day = 0 + String(day);
            }
            let min = year + '-' + month + '-' + day;
            return min;
        }

        function checkCountGifts(event) {
            let count = 0;

            for (let i = 0; i < gifts.length; i++) {
                if (gifts[i].checked) {
                    count++;
                    if (count > MAX_GIFTS) {
                        event.preventDefault();
                        break;
                    }
                }
            }
        }

        function changeSubmitState() {
            const submitButton = document.getElementsByClassName('delivery-form__complete')[0];
            return form.checkValidity() ? submitButton.disabled = false : submitButton.disabled = true;
        }

        function getCheckedInputID(arr) {
            let id = null;
            arr.forEach((item)=> item.checked ? id = item.id:null);
             return id;
        }


        function getSummary() {
            let paymentType = null;
            let userGifts = [];

            const payment = Array.from(form.elements['payment']);
            const paymentLabels = Array.from(document.getElementsByClassName('payment__label'));
            paymentLabels.forEach((item)=> item.getAttribute('for') === getCheckedInputID(payment) ? paymentType = item.textContent :null);

            const giftsLabels = Array.from(document.getElementsByClassName('gifts__label'));
            gifts.forEach((item)=> {
                if (item.checked) {
                    let giftLabel = giftsLabels.find((label)=> label.getAttribute('for') === item.id)
                    userGifts.push(giftLabel.textContent)
                }
            })

            return {
                name: name.value,
                surname: surname.value,
                date: date.value,
                street: street.value,
                house: house.value,
                flat: flat.value,
                payment: paymentType,
                gifts:userGifts,

            }
        }

    }
    deliveryFormValidation();
})()
