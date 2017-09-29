# WCAG-Panel

Компонент интерфейса для настройки доступности сайта. Соответствует стандарту WCAG 2.0 AAA. Написан на HTML, CSS, JavaScript. Предоставляет минимально необходимый функционал для разработки панели настройки сайта для слабовидящих.

  * Соответствует стандарту WCAG 2.0 AAA.
  * Поддерживает навигацию с клавиатуры.
  * Корректно озвучивается программами для чтения с экрана.
  
## Примеры
  
  * [Пример работы](http://15web.github.io/web-accessibility/docs/wcag-panel/)
  * [Видео с демонстрацией озвучки скрин-ридером](https://vimeo.com/197368373)

## Установка

Клонируйте репозиторий и подлючите скрипты и стили из папки /src

Javascript :
```html
<script src="wcag-panel.js"></script>
```

CSS:

```html
<link rel="stylesheet" href="wcag-panel.css">
```

Также вы можете подключить стили для адаптивности

```html
<link rel="stylesheet" href="wcag-panel-responsive.css">
```

Скопируйте верстку из /demo/index.html :

#### Панель управления
```html
<div class="wcag-panel" id="wcag-panel">

    <div class="wcag-panel__wrapper">
        <div class="wcag-panel__col">
            <div class="wcag-panel__switcher-label">Размер шрифта:</div>
            <div class="wcag-panel__switcher wcag-panel__switcher_responsive">
                <button class="wcag-panel__switcher-btn"
                        aria-label="маленький размер шрифта">
                    Маленький
                </button>
                <button class="wcag-panel__switcher-btn"
                        aria-label="средний размер шрифта">
                    Средний
                </button>
                <button class="wcag-panel__switcher-btn"
                        aria-label="большой размер шрифта">
                    Большой
                </button>
            </div>

        </div>
        <div class="wcag-panel__col">
            <div class="wcag-panel__switcher-label">Изображения:</div>
            <div class="wcag-panel__switcher wcag-panel__switcher_img">
                <button class="wcag-panel__switcher-btn wcag-panel__switcher-btn_img wcag-panel__switcher-btn_img-on"
                        aria-label="показать изображения">
                    Вкл
                </button>
                <button class="wcag-panel__switcher-btn wcag-panel__switcher-btn_img wcag-panel__switcher-btn_img-off"
                        aria-label="скрыть изображения">
                    Выкл
                </button>
            </div>
        </div>
        <div class="wcag-panel__col">
            <div class="wcag-panel__switcher-label">Цвет:</div>
            <div class="wcag-panel__switcher wcag-panel__switcher_color">
                <button class="wcag-panel__flag-button flag-button flag-button_white flag-button_active"
                        aria-label="Белый фон с черным шрифтом">
                    Б
                </button>
                <button class="wcag-panel__flag-button flag-button flag-button_black"
                        aria-label="Черный фон с белым шрифтом">
                    Ч
                </button>
                <button class="wcag-panel__flag-button flag-button flag-button_blue"
                        aria-label="Голубой цвет сайта с черным шрифтом">
                    Г
                </button>
            </div>
        </div>
        <div class="wcag-panel__settings">
            <button class="wcag-panel__dropdown-toggle" id="wcagDropdownBtn">
                Настройки <span class="wcag-panel__dropdown-toggle-extra-text">отображения</span>
            </button>
        </div>
    </div>

    <div class="wcag-panel__dropdown" id="wcagDropdownMenu" tabindex="-1" aria-expanded="false">
        <div class="wcag-panel__wrapper">

            <div class="wcag-panel__dropdown-item">
                <div class="wcag-panel__switcher-label">Кернинг:</div>
                <div class="wcag-panel__switcher wcag-panel__switcher_double">
                    <button class="wcag-panel__switcher-btn wcag-panel__switcher-btn_increase" aria-label="увеличить расстояеие между буквами"></button>
                    <button class="wcag-panel__switcher-btn wcag-panel__switcher-btn_decrease" aria-label="уменьшить расстояеие между буквами"></button>
                </div>
            </div>

            <div class="wcag-panel__dropdown-item">
                <div class="wcag-panel__switcher-label">Размер шрифта:</div>
                <div class="wcag-panel__switcher wcag-panel__switcher_responsive">
                    <button class="wcag-panel__switcher-btn" aria-label="маленький размер шрифта">Маленький</button>
                    <button class="wcag-panel__switcher-btn" aria-label="средний размер шрифта">Средний</button>
                    <button class="wcag-panel__switcher-btn" aria-label="большой размер шрифта">Большой</button>
                </div>
            </div>

            <div class="wcag-panel__dropdown-item">
                <div class="wcag-panel__switcher-label">Изображения:</div>
                <div class="wcag-panel__switcher wcag-panel__switcher_img">
                    <button class="wcag-panel__switcher-btn wcag-panel__switcher-btn_img wcag-panel__switcher-btn_img-on" aria-label="показать изображения">Вкл</button>
                    <button class="wcag-panel__switcher-btn wcag-panel__switcher-btn_img  wcag-panel__switcher-btn_img-off" aria-label="скрыть изображения">Выкл</button>
                </div>
            </div>
            <div class="wcag-panel__dropdown-item">
                <div class="wcag-panel__switcher-label">Цвет:</div>
                <div class="wcag-panel__switcher wcag-panel__switcher_color">
                    <button class="wcag-panel__flag-button flag-button flag-button_white flag-button_active" aria-label="Белый фон с черным шрифтом">Б</button>
                    <button class="wcag-panel__flag-button flag-button flag-button_black" aria-label="Черный фон с белым шрифтом">Ч</button>
                    <button class="wcag-panel__flag-button flag-button flag-button_blue" aria-label="Голубой цвет сайта с черным шрифтом">Г</button>
                </div>
            </div>

            <div class="wcag-panel__dropdown-item">

                <div class="wcag-panel__switcher wcag-panel__reset">
                    <button class="wcag-panel__switcher-btn_reset wcag-panel__switcher-btn" aria-label="Вернуть стандартные настройки"> Вернуть
                        <span class="mobile-hidden">стандартные</span> настройки
                    </button>
                </div>

                <div class="wcag-panel__switch-default">
                    <a href="#" class="wcag-panel__default-link" aria-label="Обычная версия сайта">Обычная версия
                        <span class="mobile-hidden">сайта</span></a>
                </div>

                <div class="wcag-panel__switcher wcag-panel__close">
                    <button class="wcag-panel__switcher-btn" aria-label="закрыть панель" id="wcagDropdownBtnClose">Закрыть панель</button>
                </div>
            </div>
        </div>

    </div>

</div>
```

## Примеры
Обработка пользовательских действий и разработка функционала переключателей остается за пользователем библиотеки, т.к. этот функционал индивидуален для каждого сайта. В нашем репозитории выможете найти следующие примеры демонстрирующие интерграцию компонента :
   * Пример обработки действий пользователя (клик по переключателю) (https://github.com/15web/wcag-panel/tree/master/examples/handle-switcher-click)
   
## Copyright and license

Copyright © 2016 [Studio 15](http://15web.ru)
Code released under [the MIT license](https://github.com/twbs/bootstrap/blob/master/LICENSE).

We use [BrowserStack](https://www.browserstack.com/) for cross browser testing.

![BrowserStack](https://github.com/15web/web-accessibility/raw/master/browserstack_logo.png)
