const burger = document.querySelector(".hamburger");
const menu = document.querySelector(".hamburger__menu");
const close = document.querySelector(".close");

burger.addEventListener('click', function () {
  menu.classList.add('menu_window');
});

menu.addEventListener('click', function (e) {
  if (!e.target.classList.contains('menu__item') || e.target.classList.contains('close')) {
    menu.classList.remove('menu_window');
  }
  
  if (e.target.classList.contains('menu__item')) {
    menu.classList.remove('menu_window');
  }
  
});