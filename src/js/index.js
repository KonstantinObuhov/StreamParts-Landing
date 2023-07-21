import Menu from "./components/menu";
import Tabs from "./components/tabs";
/*import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();*/

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

/*$(document).on('click', 'li.tab-nav-item', function() {
  let tabId = $(this).attr('data-tab');
  $('li.tab-nav-item').removeClass('active');
  $('.tab-nav-items').toggleClass('expanded');
  $(this).addClass('active');
  $('.tab-content').removeClass('current');
  $(this).addClass('current');
  $('#'+tabId).addClass('current');
});*/

// let tabsContainer = document.querySelector("#tabs");

// let tabTogglers = tabsContainer.querySelectorAll("#tabs a");

// console.log(tabTogglers);

// tabTogglers.forEach(function (toggler) {
//   toggler.addEventListener("click", function (e) {
//     e.preventDefault();

//     let tabName = this.getAttribute("href");

//     let tabContents = document.querySelector("#tab-contents");

//     for (let i = 0; i < tabContents.children.length; i++) {

//       tabTogglers[i].parentElement.classList.remove("border-t", "border-r", "border-l", "-mb-px", "bg-white"); tabContents.children[i].classList.remove("hidden");
//       if ("#" + tabContents.children[i].id === tabName) {
//         continue;
//       }
//       tabContents.children[i].classList.add("hidden");

//     }
//     e.target.parentElement.classList.add("border-t", "border-r", "border-l", "-mb-px", "bg-white");
//   });
// });
