const fixedMenu = () => {
  const header = document.querySelector('.header'); //селектор header
  const navDeskContainer = document.querySelector('.header__nav-container'); //селектор для десктопа контейнер
  const navDesk = document.querySelector('.nav_header');
  const navDeskOffset = navDeskContainer.offsetTop; // определяем расстояние от высоты
  const navDeskHeight = navDeskContainer.offsetHeight; // определяем высоту контейнера НАВИГАЦИИ


  const navMobContainer = document.querySelector('.header__mobile-container');
  const navMob = document.querySelector('.mobile-menu');
  const navMobOffset = navMobContainer.offsetTop; // определяем расстояние от высоты
  const navMobHeight = navMobContainer.offsetHeight; // определяем высоту контейнера НАВИГАЦИИ




  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const windowInnerWidth = window.innerWidth;



    if (scrolled > navDeskOffset && windowInnerWidth > 960) {
        navDeskContainer.classList.add('fixed');
        navDesk.classList.add('fixed__inner');
        header.setAttribute("style", `margin-bottom: ${navDeskHeight}px`);// выставляем сдвиг шапки

    } else if (scrolled > navMobOffset && windowInnerWidth <= 960) {
      navMobContainer.classList.add('fixed');
      navMob.classList.add('fixed__inner');
      header.setAttribute("style", `margin-bottom: ${navMobHeight}px`);// выставляем сдвиг шапки

    } else {
      navDeskContainer.classList.remove('fixed');
      navDesk.classList.remove('fixed__inner');

      navMobContainer.classList.remove('fixed');
      navMob.classList.remove('fixed__inner');

      header.setAttribute("style", "margin-bottom: 0"); // обнуляем сдвиг шапки
    }
  });
}

export default fixedMenu;
