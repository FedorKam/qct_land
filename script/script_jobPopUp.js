if(document.body.clientWidth <= '1023')
{
    let job__button_mob = document.querySelector('.job__button_mob');
    let job__popUp = document.querySelector('.job__popUp');
    let job__popUpBack = document.querySelector('.job__popUpBack');

    job__button_mob.onclick = function() { 
        job__popUp.classList.add('job__popUp_visible'); 
        job__popUpBack.classList.add('job__popUpBack_visible'); 
    };

    job__popUpBack.onclick = function() {
        job__popUp.classList.remove('job__popUp_visible');  
        job__popUpBack.classList.remove('job__popUpBack_visible'); 
    };
}