(function () {
    function deliveryFormValidation() {
        const form = document.forms['delivery'];

        const date = form.elements['date'];
        date.min = setMinDate();
        const name = form.elements['name'];
        const surname =  form.elements['surname'];
        const street = form.elements['street'];
        const house = form.elements['houseNumber'];
        const flat = form.elements['flatNumber'];
        const payment = form.getElementsByClassName('payment')[0];


        form.addEventListener('focus', (event) => stopValidation(event.target), true);
        form.addEventListener('blur', (event) => startValidation(event.target), true);


        function startValidation(target) {
            switch (target.name) {
                case 'name':
                    checkStringWithoutNumber(name,4);
                    break;
                case 'surname':
                    checkStringWithoutNumber(surname,5);
                    break;
                case 'street':
                    checkStringWithNumber(street,5);
                    break;
                case 'houseNumber':
                    isPositiveNumber(house);
                    break;
                case 'flatNumber':
                    isPositiveNumberWithDashSymbol(flat);
                    break;
                case 'payment':
                    checkPayment(payment);
                    break;
                case 'gifts-1':
                    checkCountOfGifts();
                    break;
                case 'gifts-2':
                    checkCountOfGifts();
                    break;
                case 'gifts-3':
                    checkCountOfGifts();
                    break;
                case 'gifts-4':
                    checkCountOfGifts();
                    break;
            }
        }

        function stopValidation(target) {
            const error = target.parentNode;
            error.setAttribute('data-error-message','');
            target.classList.remove('invalid');
        }


        function checkStringWithoutNumber(elem,minLength) { // minLength: number
            const chars = Array.from(elem.value);
            const wrapperError = elem.parentNode;

            /* conditions for validation */
            const regex = new RegExp('[A-Za-zА-Яа-я]');
            const validName = elem.value.match(regex);
            const charsWithNumber = chars.find((char) => !isNaN(Number(char)));

            if (validName !== null && !charsWithNumber) {
                if (elem.value.length < minLength) {
                    elem.classList.add('invalid');
                    wrapperError.setAttribute('data-error-message',`*The length should be not less than ${minLength} symbols`);
                }
            } else if(charsWithNumber || validName === null) {
                elem.classList.add('invalid');
                wrapperError.setAttribute('data-error-message','*The field should be consist of strings only');
            } else {
                elem.classList.remove('invalid');
                wrapperError.setAttribute('data-error-message','');
            }
        }

        function setMinDate() {
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

        function checkStringWithNumber(elem,minLength) { // minLength: number
            const chars = Array.from(elem.value);
            const wrapperError = elem.parentNode;

            /* conditions for validation */
            const regex = new RegExp('[A-Za-zА-Яа-я0-9]');
            const validName = elem.value.match(regex);

            if (validName !== null) {
                if (elem.value.length < minLength) {
                    elem.classList.add('invalid');
                    wrapperError.setAttribute('data-error-message', `*The length should be not less than ${minLength} symbols`);
                } else {
                    elem.classList.remove('invalid');
                    wrapperError.setAttribute('data-error-message', '');
                }
            } else {
                elem.classList.add('invalid');
                wrapperError.setAttribute('data-error-message', 'The field should be consist of strings or numbers');
            }
        }

        function isPositiveNumber(elem) {
            const number = Number(elem.value);
            const wrapperError = elem.parentNode;

            if(number <= 0){
                elem.classList.add('invalid');
                wrapperError.setAttribute('data-error-message', `*The field should be a positive number`);
            } else {
                elem.classList.remove('invalid');
                wrapperError.setAttribute('data-error-message', ``);
            }
        }

        function isPositiveNumberWithDashSymbol(elem) {
            const chars = Array.from(elem.value);
            const wrapperError = elem.parentNode;
            const numbers = new RegExp('[0-9]');
            if (isNaN(Number(chars[0]))) {
                elem.classList.add('invalid');
                wrapperError.setAttribute('data-error-message', `*The field should be a positive number. The dash symbol is allowed`);
            } else {

                for (let i = 1; i < chars.length; i++) {
                    if (chars[i].match(numbers) !== null || chars[i].charCodeAt(0) === 45) {
                        elem.classList.remove('invalid');
                        wrapperError.setAttribute('data-error-message', ``);
                    } else {
                        elem.classList.add('invalid');
                        wrapperError.setAttribute('data-error-message', `*The field should be a positive number. The dash symbol is allowed`);
                    }
                }
            }
        }

        function checkPayment(elem){
            let checkedInputs = elem.querySelectorAll('input[type=radio]:checked');
            const wrapperError = elem.getElementsByClassName('error-wrapper')[0];
            if(checkedInputs.length === 0) {
                elem.classList.add('invalid');
                wrapperError.setAttribute('data-error-message', '*This field is required');
            } else {
                elem.classList.remove('invalid');
                wrapperError.setAttribute('data-error-message', '');
            }
        }

       function checkCountOfGifts() {
            const fieldset = document.getElementsByClassName('delivery-form__gifts')[0];
            const wrapperError = fieldset.getElementsByClassName('error-wrapper')[0];
            const checkboxes = wrapperError.querySelectorAll('input[type=checkbox]:checked');

            if(checkboxes.length  === 2 ) {
               fieldset.classList.remove('invalid');
               wrapperError.setAttribute('data-error-message', ``);
           } else if( checkboxes.length > 2) {
               fieldset.classList.add('invalid');
               wrapperError.setAttribute('data-error-message', `*Only 2 gifts are available`);
           }
        }

    }
    deliveryFormValidation();
})()
