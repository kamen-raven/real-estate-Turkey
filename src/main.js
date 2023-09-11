import '../styles/scss/index.scss';


import FancyBox from './libs/fancyapps/fancybox';
import animatedScrollLib from './libs/aos/aos';
import accordion from './libs/components/_accordion';
import toTopButton from './libs/components/_to-top-button';
import fixedMenu from './libs/components/_fixed-menu';

/* подключаем библиотеки */
FancyBox();
animatedScrollLib();
/* подключаем компоненты */
fixedMenu(); //прилипание верхнего меню
toTopButton(); // кнопка НАВЕРХ
accordion(); // аккордеон
















// script.js
document.addEventListener('DOMContentLoaded', function() {
  const burgerButton = document.querySelector('.mobile-menu__button');
  const mobileMenu = document.querySelector('.mobile-menu__inner');

  burgerButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-menu__inner_open');
    burgerButton.classList.toggle('mobile-menu__button_opened');
  });


  document.addEventListener('click', function(event) {
      const isClickInsideMenu = mobileMenu.contains(event.target);
      const isClickInsideIcon = burgerButton.contains(event.target);

      if (!isClickInsideMenu && !isClickInsideIcon && mobileMenu.classList.contains('mobile-menu__inner_open')) {
        mobileMenu.classList.remove('mobile-menu__inner_open');
        burgerButton.classList.toggle('mobile-menu__button_opened');
      }
  });
});


