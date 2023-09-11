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
/* document.addEventListener('DOMContentLoaded', function() {
  const fixedNav = document.getElementById('fixed-nav');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
          fixedNav.classList.add('active');
      } else {
          fixedNav.classList.remove('active');
      }

      sections.forEach(section => {
          if (window.scrollY >= section.offsetTop - fixedNav.offsetHeight && window.scrollY < section.offsetTop + section.offsetHeight) {
              const links = fixedNav.querySelectorAll('a');
              links.forEach(link => link.classList.remove('active'));
              const currentLink = fixedNav.querySelector(`a[href="#${section.id}"]`);
              if (currentLink) {
                  currentLink.classList.add('active');
              }
          }
      });
  });
});

 */












/* // script.js
document.addEventListener('DOMContentLoaded', function() {
  const burgerIcon = document.getElementById('burger-icon');
  const menu = document.getElementById('menu');
  const closeButton = document.getElementById('close-button');

  burgerIcon.addEventListener('click', function() {
      menu.classList.toggle('active');
  });

  closeButton.addEventListener('click', function() {
      menu.classList.remove('active');
  });

  document.addEventListener('click', function(event) {
      const isClickInsideMenu = menu.contains(event.target);
      const isClickInsideIcon = burgerIcon.contains(event.target);

      if (!isClickInsideMenu && !isClickInsideIcon && menu.classList.contains('active')) {
          menu.classList.remove('active');
      }
  });
});

 */
