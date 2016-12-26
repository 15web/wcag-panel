var WCAGPanelWithHandlers = (function () {

    var WCAGPanelWithHandlers = function () {
        this.switchers = document.getElementsByClassName('js-wcag-panel-switcher');
        this.constants = {
            switcherSelector: 'js-wcag-panel-switcher',
            switcherItemSelector: 'js-wcag-panel-switcher-item',
            switcherItemSelectorActive: 'js-wcag-panel-switcher-item-active'
        };
        this.storageKey = 'wcag-panel';

        WCAGPanel.apply(this);
    };
    WCAGPanelWithHandlers.prototype = Object.create(WCAGPanel.prototype);
    WCAGPanelWithHandlers.prototype.construnctor = WCAGPanel;


    WCAGPanelWithHandlers.prototype.init = function () {
        WCAGPanel.prototype.init.apply(this, arguments);
        this.handleSwitcherClick();
    };

    WCAGPanelWithHandlers.prototype.handleSwitcherClick = function () {
        //клик по группе переключателей
        for (var i = 0; i < this.switchers.length; i++) {
            this.switchers[i].addEventListener("click", this.handleSwitcherItemClick.bind(this), false);
        }
    };

    WCAGPanelWithHandlers.prototype.handleSwitcherItemClick = function (e) {
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

    WCAGPanelWithHandlers.prototype.getLocalStorage = function () {
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

    WCAGPanelWithHandlers.prototype.setLocalStorageItem = function (name,value) {
        var state = this.getLocalStorage();
        state[name] = value;
        localStorage[this.storageKey] = JSON.stringify(state);
    };

    WCAGPanelWithHandlers.prototype.largeFontSize = function () {
        this.setLocalStorageItem('fontSize', 'large');
        console.log('большой шрифт');
    };

    WCAGPanelWithHandlers.prototype.normalFontSize = function () {
        this.setLocalStorageItem('fontSize', 'normal');
        console.log('нормальный шрифт');
    };

    WCAGPanelWithHandlers.prototype.smallFontSize = function () {
        this.setLocalStorageItem('fontSize', 'small');
        console.log('маленький шрифт');
    };

    WCAGPanelWithHandlers.prototype.showImages = function () {
        this.setLocalStorageItem('showImages', 'true');
        console.log('Показать картинки');
    };

    WCAGPanelWithHandlers.prototype.hideImages = function () {
        this.setLocalStorageItem('showImages', 'false');
        console.log('Скрыть картинки');
    };

    WCAGPanelWithHandlers.prototype.setWhiteColor = function () {
        this.setLocalStorageItem('bgcolor', 'white');
        console.log('Белый цвет сайта');
    };

    WCAGPanelWithHandlers.prototype.setBlackColor = function () {
        this.setLocalStorageItem('bgcolor', 'black');
        console.log('Черный цвет сайта');
    };

    WCAGPanelWithHandlers.prototype.setBlueColor = function () {
        this.setLocalStorageItem('bgcolor', 'blue');
        console.log('Голубой цвет сайта');
    };


    return WCAGPanelWithHandlers;
})();