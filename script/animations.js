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

// (function () {
//     let block = document.querySelector('.values');
//     let body = document.querySelector('body');
  
//     let observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
//           return;
//         }

//         if (entry.isIntersecting) {
//           body.style.overflow = 'hidden';
//           return;
//         }

//         body.style.overflow = 'scroll';
//         window.addEventListener('scroll', function(event) {
//           let vrImg = document.querySelector('.vrblock__img');
//           vrImg.style.width = '1000px';
//         });
//       });
//     });
  
//     observer.observe(block);
// })();