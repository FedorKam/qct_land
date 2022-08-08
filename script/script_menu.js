let menu__arrow = document.querySelector('.menu__arrow');
let menu__hide = document.querySelector('.menu__hide');
menu__arrow.onclick = function(event) { menu__hide.classList.toggle('menu__hide_visible'); };