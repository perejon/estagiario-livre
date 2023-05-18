class DropMenu {
    constructor() {
        this.dropMenu = document.querySelectorAll('[data-menu-subcollection]');
        this.init();
    }

    init() {
        this.dropMenu.forEach((item) => {
            this.classActiveToggle(item, '.subcollection')

            const subMenu = item.querySelectorAll('[data-sub-menu-subcollection]');
            subMenu.forEach((item2) => {                
                this.classActiveToggle(item2, '.box')
            });
        });
    }

    classActiveToggle(item, item2) {
        const item2El = item.querySelector(item2);

        item.addEventListener('mouseover', () => {
            if (!item2El.classList.contains('active')) item2El.classList.add('active');
        });

        item.addEventListener('mouseout', () => {
            item2El.classList.remove('active');
        });
    }
}

new DropMenu();