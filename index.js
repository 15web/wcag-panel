var WCAGPanel = (function () {

    /**
     * WCAGPanel
     * @constructor
     * @param {object} element - HTML element
     * @param {object} options
     */

    var WCAGPanel = function (element, options) {
        this.controlPanel = document.getElementById('wcag-panel');
        this.dropdownBtn = document.getElementById('dropdownBtn');
        this.dropdownBtnClose = document.getElementById('dropdownBtnClose');
        this.dropdown = document.getElementById('dropdownMenu');
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
    };

    WCAGPanel.prototype.handleSwitcherClick = function () {

        for (var i = 0; i < this.switchers.length; i++) {
            this.switchers[i].addEventListener("click", this.handleSwitcherItemClick.bind(this), false);
        }

    }

    WCAGPanel.prototype.handleSwitcherItemClick = function (e) {
        //клик по дочернему элементу
        if (e.target !== e.currentTarget) {
            var siblings = Array.prototype.filter.call(e.target.parentNode.children, function (child) {
                return child !== e.target;
            });
            for (var i = 0; i < siblings.length; i++) {
                siblings[i].classList.remove(this.constants.switcherItemSelectorActive);
            }
            e.target.classList.toggle(this.constants.switcherItemSelectorActive);
            console.log(e.target);
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
            if (e.target != self.dropdownBtn && !self.isChildOf(e.target, self.dropdown)) {
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

    return WCAGPanel;
})();

if (document.getElementById('wcag-panel')) {
    new WCAGPanel();
}