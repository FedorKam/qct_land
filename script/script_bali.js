let cards = document.querySelectorAll('.bali__card');

let bali_arrow_left = document.querySelector('.bali__arrow_left');
let bali_arrow_right = document.querySelector('.bali__arrow_right');

bali_arrow_right.addEventListener('click', event => {
    let count_cards = parseInt(document.querySelector('.bali__cardBlock').getAttribute('card-count'));
    let active_card = document.querySelector('.bali__card_active');
    let num_card = parseInt(active_card.getAttribute('card-num'));

    if(count_cards > num_card){
        active_card.classList.add('bali__card_hidden');
        active_card.classList.remove('bali__card_active');
        cards[num_card].classList.add('bali__card_active');
    }
});

bali_arrow_left.addEventListener('click', event => {
    let active_card = document.querySelector('.bali__card_active');
    let num_card = parseInt(active_card.getAttribute('card-num'));

    if(num_card != 1){
        active_card.classList.remove('bali__card_active');
        cards[num_card - 2].classList.add('bali__card_active');
        cards[num_card - 2].classList.remove('bali__card_hidden');
    }
});