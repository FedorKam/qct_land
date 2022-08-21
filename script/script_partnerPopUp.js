let partner__pocket_btns = document.querySelectorAll('.partner__pocket');
let partner__pocket_popUpBack = document.querySelector('.partner__pocketBlockBack');
let partner__pocket_popUp_content = document.querySelector('.partner__pocketBlockContent');
let content_colors = ["partner__pocketBlockContent_white", "partner__pocketBlockContent_blue", "partner__pocketBlockContent_yellow"];

partner__pocket_btns.forEach(item => {
    item.onclick = function() {
        let pocket_num = item.getAttribute("pocket-num");
        document.querySelector('.partner__pocketAbout[pocket-num="'+pocket_num+'"]').classList.add("active");
        partner__pocket_popUpBack.classList.add('partner__pocketBlockBack_visible');

        refresh_num(pocket_num);
        refresh_color(pocket_num);
    };
});

partner__pocket_popUpBack.onclick = function(e){
    if(e.target.className == 'partner__popUp'){
        partner__pocket_popUpBack.classList.remove('partner__pocketBlockBack_visible');
        document.querySelector('.partner__pocketAbout.active').classList.remove("active");
    }
};

let partner__arrow_left = document.querySelector('.partner__arrow-left');
let partner__arrow_right = document.querySelector('.partner__arrow-right');
let partner__pocketAbout = document.querySelectorAll('.partner__pocketAbout');

partner__arrow_right.addEventListener('click', event => {
    let count_pocket = parseInt(document.querySelector('.partner__popUp').getAttribute('pocket-count'));
    let num_pocket = parseInt(document.querySelector('.partner__pocketAbout.active').getAttribute('pocket-num'));

    if(count_pocket > num_pocket){
        partner__pocketAbout[num_pocket - 1].classList.remove('active');
        partner__pocketAbout[num_pocket].classList.add('active');

        refresh_num(num_pocket + 1);
        refresh_color(num_pocket + 1);
    }
});

partner__arrow_left.addEventListener('click', event => {
    let num_pocket = parseInt(document.querySelector('.partner__pocketAbout.active').getAttribute('pocket-num'));

    if(num_pocket != 1){
        partner__pocketAbout[num_pocket - 1].classList.remove('active');
        partner__pocketAbout[num_pocket - 2].classList.add('active');

        refresh_num(num_pocket - 1);
        refresh_color(num_pocket - 1);
    }
});

let partner__button = document.querySelector('.partner__button');

partner__button.addEventListener('click', event => {
    let partner__formBlock = document.querySelector('.partner__formBlock');
    partner__formBlock.classList.add('active');

    setTimeout(function(){partner__button.setAttribute('type', 'submit');}, 200);
});

function refresh_num(num){
    let partner__curr = document.querySelector('.partner__nav-curr');
    partner__curr.innerHTML = "0" + num;
}

function refresh_color(num){
    content_colors.forEach(function(element) {
        let cont_color = document.querySelector("."+element);
        if(cont_color != null){ cont_color.classList.remove(element);}
    });
    partner__pocket_popUp_content.classList.add(content_colors[num-1]);
}