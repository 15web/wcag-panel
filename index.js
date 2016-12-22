var WCAGPanel = (function () {

    /**
     * WCAGPanel
     * На этапе инициализации определяем, какие переключатели используются в панели
     * Затем для каждого переключателя навешиваем одинаковый event клик для изменения активного класса и выполнения определенной функции исходя из data-action
     * Действия записываются в localStorage
     * @constructor
     * @param {object} element - HTML element
     * @param {object} options
     */

    var WCAGPanel = function (panel) {
        this.storageKey = 'wcag-panel';
        this.controlPanel = panel;
        this.dropdownBtn = document.getElementById('wcagDropdownBtn');
        this.dropdownBtnClose = document.getElementById('wcagDropdownBtnClose');
        this.dropdown = document.getElementById('wcagDropdownMenu');
        this.switchers = document.getElementsByClassName('js-wcag-panel-switcher');

        this.constants = {
            switcherSelector: 'js-wcag-panel-switcher',
            switcherItemSelector: 'js-wcag-panel-switcher-item',
            switcherItemSelectorActive: 'js-wcag-panel-switcher-item-active'
        };

        this.init();
    };

    WCAGPanel.prototype.init = function () {
        this.handleDropdown();
        this.handleSwitcherClick();

        console.log(this.getLocalStorage())
    };

    WCAGPanel.prototype.handleSwitcherClick = function () {
        //клик по группе переключателей
        for (var i = 0; i < this.switchers.length; i++) {
            this.switchers[i].addEventListener("click", this.handleSwitcherItemClick.bind(this), false);
        }

    };

    WCAGPanel.prototype.handleSwitcherItemClick = function (e) {
        var target = e.target;
        //клик по элементу переключателя
        if (target !== e.currentTarget) {
            var siblings = Array.prototype.filter.call(target.parentNode.children, function (child) {
                return child !== target;
            });
            for (var i = 0; i < siblings.length; i++) {
                siblings[i].classList.remove(this.constants.switcherItemSelectorActive);
            }
            target.classList.toggle(this.constants.switcherItemSelectorActive);

            var action = target.getAttribute('data-action');
            if (action) {
                this[action]();
            }
        }
    };

    WCAGPanel.prototype.handleDropdown = function () {
        this.setDefaultDropdown();
        this.handleDropdownBtnClick();
        this.handleDropdownCloseBtnClick();
        this.handleOutsideDropdownClick();
    };

    WCAGPanel.prototype.handleOutsideDropdownClick = function () {
        var self = this;
        document.onclick = function (e) {
            if (e.target != self.dropdownBtn && !self.isChildOf(e.target, self.controlPanel)) {
                self.closeDropdown();
            }

        }
    };

    WCAGPanel.prototype.handleDropdownBtnClick = function () {
        var self = this;
        this.dropdownBtnClose.addEventListener('click', function () {
                self.closeDropdown();
        });
    };

    WCAGPanel.prototype.handleDropdownCloseBtnClick = function () {
        var self = this;
        this.dropdownBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (self.dropdownBtn.getAttribute('aria-expanded') == 'false') {
                self.openDropdown();
            }
            else {
                self.closeDropdown();
            }
        });
    };

    WCAGPanel.prototype.openDropdown = function () {
        this.dropdownBtn.setAttribute('aria-expanded', 'true');
        this.controlPanel.classList.add('wcag-panel_show-dropdown');
        this.dropdown.setAttribute('aria-hidden', 'false');
        this.dropdown.setAttribute('aria-expanded', 'true');
    };

    WCAGPanel.prototype.closeDropdown = function () {
        this.dropdownBtn.setAttribute('aria-expanded', 'false');
        this.controlPanel.classList.remove('wcag-panel_show-dropdown');
        this.dropdown.setAttribute('aria-hidden', 'true');
        this.dropdown.setAttribute('aria-expanded', 'false');
    };

    WCAGPanel.prototype.setDefaultDropdown = function () {
        this.dropdownBtn.setAttribute('aria-haspopup', 'true');
        this.dropdownBtn.setAttribute('aria-expanded', 'false');
        this.dropdown.setAttribute('aria-expanded', 'false');
        this.dropdown.setAttribute('aria-hidden', 'true');
    };

    WCAGPanel.prototype.isChildOf = function (child,parent) {
        if (child.parentNode === parent) {
            return true;
        } else if (child.parentNode === null) {
            return false;
        } else {
            return this.isChildOf(child.parentNode, parent);
        }
    };

    WCAGPanel.prototype.getLocalStorage = function () {
        var state = localStorage.getItem(this.storageKey);
        if (state) {
            return JSON.parse(state);
        }
        return {
            "fontSize" : "normal",
            "showImages" : "true",
            "bgcolor" : "white"
        };
    };

    WCAGPanel.prototype.setLocalStorageItem = function (name,value) {
        var state = this.getLocalStorage();
        state[name] = value;
        localStorage[this.storageKey] = JSON.stringify(state);
        console.log(this.getLocalStorage())
    };
    
    WCAGPanel.prototype.largeFontSize = function () {
        this.setLocalStorageItem('fontSize', 'large');
        console.log('большой шрифт');
    };

    WCAGPanel.prototype.normalFontSize = function () {
        this.setLocalStorageItem('fontSize', 'normal');
        console.log('нормальный шрифт');
    };

    WCAGPanel.prototype.smallFontSize = function () {
        this.setLocalStorageItem('fontSize', 'small');
        console.log('маленький шрифт');
    };

    WCAGPanel.prototype.showImages = function () {
        this.setLocalStorageItem('showImages', 'true');
        console.log('Показать картинки');
    };

    WCAGPanel.prototype.hideImages = function () {
        this.setLocalStorageItem('showImages', 'false');
        console.log('Скрыть картинки');
    };

    WCAGPanel.prototype.setWhiteColor = function () {
        this.setLocalStorageItem('bgcolor', 'white');
        console.log('Белый цвет сайта');
    };

    WCAGPanel.prototype.setBlackColor = function () {
        this.setLocalStorageItem('bgcolor', 'black');
        console.log('Черный цвет сайта');
    };

    WCAGPanel.prototype.setBlueColor = function () {
        this.setLocalStorageItem('bgcolor', 'blue');
        console.log('Голубой цвет сайта');
    };

    return WCAGPanel;
})();

var panel = document.getElementById('wcag-panel')
if (panel) {
    new WCAGPanel(panel);
}

