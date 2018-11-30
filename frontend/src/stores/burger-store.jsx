class BurgerStore {
    constructor() {
        this.showSidebar = false;
    }

    handleShowSidebar(action) {
        const {showSidebar} = action;
        this.showSidebar = showSidebar;
    }

    appendDataTo(data) {
        data.showSidebar = this.showSidebar;
    }
}

const burgerStore = new BurgerStore();

export default burgerStore;
