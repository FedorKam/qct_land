let options = document.querySelectorAll('.step-block__option');
let steps = document.querySelectorAll('.step-block__step');

options.forEach(item => {
    item.addEventListener('click', event => {
        let num_step = parseInt(item.getAttribute('step-num'));
        
        goToStep(num_step);
    })
})

let arrow_left = document.querySelector('.step-block__arrow-left');
let arrow_right = document.querySelector('.step-block__arrow-right');

arrow_right.addEventListener('click', event => {
    let count_steps = parseInt(document.querySelector('.step-block').getAttribute('step-count'));
    let num_step = parseInt(document.querySelector('.step-block__step_active').getAttribute('step-num'));

    if(count_steps > num_step){
        goToStep(num_step + 1);
    }
});

arrow_left.addEventListener('click', event => {
    let count_steps = parseInt(document.querySelector('.step-block').getAttribute('step-count'));
    let num_step = parseInt(document.querySelector('.step-block__step_active').getAttribute('step-num'));

    if(num_step != 1){
        goToStep(num_step - 1);
    }
});

function goToStep(numb){
    let active_option = document.querySelector('.step-block__option_active');
    let active_step = document.querySelector('.step-block__step_active');

    active_option.classList.remove('step-block__option_active');
    active_step.classList.remove('step-block__step_active');

    options[numb - 1].classList.add('step-block__option_active');
    steps[numb - 1].classList.add('step-block__step_active');

    changeNumb(numb);
    changeActiveArrows(numb);
}

function changeNumb(numb){
    let curr_numb = document.querySelector('.step-block__nav-curr');

    curr_numb.innerHTML = (numb < 10 ? '0':'') + numb;
}

function changeActiveArrows(numb){
    let count_steps = parseInt(document.querySelector('.step-block').getAttribute('step-count'));

    if(count_steps == numb){
        arrow_right.classList.remove('step-block__arrow-right_active');
    }
    else
    {
        arrow_right.classList.add('step-block__arrow-right_active');
    }

    if(numb == 1){
        arrow_left.classList.remove('step-block__arrow-left_active');
    }
    else
    {
        arrow_left.classList.add('step-block__arrow-left_active');
    }
}