let command__links = document.querySelectorAll('.command__link');

if(document.body.clientWidth <= '1438')
{
    let command__backPopUp = document.querySelector('.command__backPopUp');

    command__links.forEach(item => {
        item.addEventListener('click', event => {
            command__backPopUp.classList.add('command__backPopUp_visible');

            let card_num = item.getAttribute('card-num');
            let command__popUpPersonBlock = document.querySelector('.command__popUpPersonBlock[card-num="'+ card_num +'"]'); 
            command__popUpPersonBlock.classList.add("active");       
        })
    });

    command__backPopUp.onclick = function (e) {
        if (e.target.className != "command__popUpPersonBlock active" 
        && e.target.className != "command__card" 
        && e.target.className != "command__avatar command__avatar_popUp"
        && e.target.className != "command__position command__position_popUp"
        && e.target.className != "command__name command__name_popUp"
        && e.target.className != "command__about command__about_mob"
        && e.target.className != "command__aboutHead"
        && e.target.className != "command__aboutText") {
            command__backPopUp.classList.remove('command__backPopUp_visible');
            let command__popUpPersonBlock_active = document.querySelector('.command__popUpPersonBlock.active'); 
            command__popUpPersonBlock_active.classList.remove('active');
         };
    };
}
else
{
    command__links.forEach(item => {
        item.onmouseout = function() {
            item.classList.add('command__link_unhovered');
            setTimeout(function (){item.classList.remove('command__link_unhovered');}, 500);
        }
    });
}