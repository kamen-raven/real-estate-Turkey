import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";


const FancyBox = () => {
  Fancybox.bind("[data-fancybox]", {
    /*   tpl: {
        closeButton:
          '<button data-fancybox-close class="f-button is-close-btn" title="Закрыть">' +
          '<svg width="15" height="15" viewBox="15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="15" height="2.7" fill="white" /><rect y="6" x="3" width="12" height="2.7" fill="white" /><rect y="12" x="6" width="9" height="2.7" fill="white" /></svg>' +
          "</button>",
      }, */
    });
};

export default FancyBox;


