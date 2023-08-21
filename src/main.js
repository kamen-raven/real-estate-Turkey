import '../styles/scss/index.scss';


import FancyBox from './libs/fancyapps/fancybox';
import animatedScrollLib from './libs/aos/aos';

FancyBox();
animatedScrollLib();



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

