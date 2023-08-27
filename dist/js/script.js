// navbar fixed
// Hamburger Menu
const hamburger = document.querySelector("#hamburger");

const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});


// klik di luar hamburger
// window.addEventListener('click', function(e) {
//     if (e.target != hamburger && e.target != navMenu){
//         hamburger.classList.remove('hamburger-active');
//         navMenu.classList.add('hidden');
//     }
// });

// Back to top
window.onscroll = function () {
  const toTop = document.querySelector("#to-top");
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

 if (window.scrollY > fixedNav) {
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// DARKMODE
const darkToggle = document.querySelector('#dark-toggle')
const html = document.querySelector('html');

darkToggle.addEventListener('click',function(){
    if (darkToggle.checked){
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
});