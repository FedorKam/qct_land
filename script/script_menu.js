let menu__arrow = document.querySelector('.menu__arrow');
let menu__hide = document.querySelector('.menu__hide');
menu__arrow.onclick = function(event) { menu__hide.classList.toggle('menu__hide_visible'); };

let menu__buttom = document.querySelector('.menu__button');
let menu__mob = document.querySelector('.menu_mob');
menu__buttom.onclick = function(event) { menu__buttom.classList.toggle('menu__button_close'); menu__mob.classList.toggle('menu_showed'); };

let list__arrow = document.querySelector('.step-block__listArrow');
let step_list = document.querySelector('.step-block__list');
list__arrow.onclick = function(event) { step_list.classList.toggle('step-block__list_full'); };

if(document.body.clientWidth <= '375')
{
    let step_option_mob = document.querySelectorAll('.step-block__option');
    step_option_mob.forEach(item => {
        item.onclick = function() { step_list.classList.remove('step-block__list_full'); };
    });
}