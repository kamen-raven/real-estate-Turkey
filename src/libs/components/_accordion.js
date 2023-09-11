/* Функция для аккордеона в блоке ВОПРОСЫ */
const accordion = () => {
  const acc = document.querySelectorAll(".accordion");

  let i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
};

export default accordion;

