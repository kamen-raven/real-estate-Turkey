import '../styles/scss/index.scss';


import FancyBox from './libs/fancyapps/fancybox';
import animatedScrollLib from './libs/aos/aos';

FancyBox();
animatedScrollLib();


/* Функция для аккордиона в блоке ВОПРОСЫ */
const acc = document.querySelectorAll(".accordion");

let i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      console.log("close")
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      console.log("open")
    }
  });
}



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


