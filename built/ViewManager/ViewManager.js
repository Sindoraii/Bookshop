(function () {
    function ViewManager() {
        /* import */
        const catalog = window.Catalog;
        const basket = window.Basket;

        /* init */
        const elem = document.createElement('div');
        elem.classList.add('content__view');

        const views = {
            "catalog": catalog,
            "basket": basket,
        }

        let currentView = ' ';

        /* methods */
        this.mount = (parent,view) => { //types: parent - htmlElement, view - string
            if(parent instanceof HTMLElement) {
                if(Object.keys(views).includes(view)) {
                    currentView = view;
                    views[view].mount(elem);
                    parent.appendChild(elem);
                } else {
                    console.error('ViewManager: view is undefined');
                }
            } else {
                console.error('ViewManager: parent type is not correct');
            }
        }

        this.changeView = (view) => {
            if(currentView !== view) {
                if(Object.keys(views).includes(view)) {
                    currentView = view;
                    elem.textContent = " ";
                    views[view].mount(elem);
                }
            }
        }
    }
    /* export */
    window.ViewManager = new ViewManager();
})()