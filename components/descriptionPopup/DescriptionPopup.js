(function () {
    function Description(text) {
        this.text = text;

        const wrapper = document.createElement('div');
        wrapper.className = 'modals';

        const backgroundForModals = document.createElement('div');
        backgroundForModals.className = 'modals__background';

        const popup = document.createElement('article');
        popup.classList.add( 'modals__description-popup','popup');

        const desc = document.createElement('p');
        desc.className = 'popup__text';
        desc.innerHTML = this.text;

        const closeButton = document.createElement('button');
        closeButton.type = 'button';
        closeButton.classList.add('popup__close-button', 'close-button');

        const body = document.getElementsByTagName('body')[0];

        closeButton.addEventListener('click',()=> {
            wrapper.remove();
        });

        popup.appendChild(desc);
        popup.appendChild(closeButton);
        wrapper.appendChild(backgroundForModals);
        wrapper.appendChild(popup);


        /* methods */
        this.mount = (parent) => {
            if(parent instanceof HTMLElement) {
                parent.prepend(wrapper);
            } else {
                console.error('Description: parent type is not correct');
            }
        }
    }
    /* export */
    window.Description = Description;
})()
