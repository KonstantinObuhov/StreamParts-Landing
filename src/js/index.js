import Menu from "./components/menu";
import Tabs from "./components/tabs";

window.addEventListener("load", function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  new Menu;
  new Tabs;
});
