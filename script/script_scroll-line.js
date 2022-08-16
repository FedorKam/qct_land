if(document.body.clientWidth <= '1022')
{
    let scroll__item = document.querySelectorAll('.scroll-line__item');

    let scroll__speed = 1;

    scroll__item.forEach(item => {
        window.addEventListener('scroll', function() {
            scroll__items(item);
        });
    });
    
    
        // // The next pixel to show on screen      
        // var winBottom = winY + winH;
    
        // // If block is shown on screen
        // if (winBottom > imgY && winY < imgY + parentH) {
        //     // Number of pixels shown after block appear
        //     var imgBottom = ((winBottom - imgY) * speed);
        //     // Max number of pixels until block disappear
        //     var imgTop = winH + parentH;
        //     // Porcentage between start showing until disappearing
        //     var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
        // }
        // img.css({
        //     top: imgPercent + '%',
        //     transform: 'translate(-50%, -' + imgPercent + '%)'
        // });
        // }
        // $(document).on({
        // scroll: function () {
        //     parallaxImg();
        // }, ready: function () {
        //     parallaxImg();
        // }
        // });

    function scroll__items(item){
        let scroll__item_y = item.offsetTop;
        let scroll__item_wind_y = item.scrollTop;
        let scroll__item_h = item.offsetHeight;

        
    }
}