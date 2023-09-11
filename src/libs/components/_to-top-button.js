/* Функция кнопки TO-TOP-BUTTON */
const toTopButton = () => {
  const scrollPX = 300;
  const toTopButton = document.querySelector('.to-top-button');

  const getTop = () => window.scrollY || document.documentElement.scrollTop;

  window.addEventListener('scroll', () => {
    if(getTop() > scrollPX) {
      toTopButton.classList.add('show');
    } else {
      toTopButton.classList.remove('show');
    }
  });

  //click
  toTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
};


export default toTopButton;
