(function () {
    let block = document.querySelector('.dblock');
  
    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        let entryImg = entry.target.querySelector('.dblock__img_light');
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
            return;
        }
  
        if (entry.isIntersecting) {
            entryImg.classList.add('dblock__img_lightOn');
            return;
        }
  
        entryImg.classList.remove('dblock__img_lightOn');
      });
    });
  
    observer.observe(block);
})();

(function () {
    let block = document.querySelector('.animation');
  
    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        let top = entry.target.querySelector('.animation__top');
        let bottom = entry.target.querySelector('.animation__bottom');
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
            return;
        }
  
        if (entry.isIntersecting) {
            top.classList.add('animation_on');
            bottom.classList.add('animation_on');
            return;
        }
      });
    });
  
    observer.observe(block);
})();

(function () {
    let is_showed = false;
    let block = document.querySelector('.values');
  
    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }

        let vrblock = document.querySelector('.vrblock');
        let vrblock__img = document.querySelector('.vrblock__img');
        let blocks_second_part = document.querySelector('.second-part-blocks');

        if (entry.isIntersecting && !is_showed) {
          blocks_second_part.classList.add('second-part-blocks_hidden');
          vrblock__img.classList.add('vrblock__img_animated');

          setTimeout(function(){
            vrblock__img.classList.remove('vrblock__img_animated');
            blocks_second_part.classList.remove('second-part-blocks_hidden');

            blocks_second_part.scrollIntoView(top);
            blocks_second_part.classList.add('second-part-blocks_hidden_appear');
        }, 950);
          is_showed = true;
          return;
        }
      });
    });
  
    observer.observe(block);
})();