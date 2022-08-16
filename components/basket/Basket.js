(function () {
    function Basket() {
        /* init */
        const basket = document.createElement('section');
        basket.className = 'content__basket';
        this.node = basket;

        /* methods */
        this.mount = (parent) => {
            if(parent instanceof HTMLElement) {
                parent.append(basket);
            } else {
                console.error('BookCard: it is not correct type')
            }
        }
    }
    /* export */
    window.Basket = new Basket();
})()
