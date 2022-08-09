let command__link = document.querySelectorAll('.command__link');

command__link.forEach(item => {
    item.onmouseout = function() {
        item.classList.add('command__link_unhovered');
        setTimeout(function (){item.classList.remove('command__link_unhovered');}, 500);
    }
});