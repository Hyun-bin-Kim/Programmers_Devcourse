//notice swiper
const swiperNotice = new Swiper('.notice-line .swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    autoplay: true,
});

const swiperPromotion = new Swiper('.promotion .swiper', {
    loop: true,
    autoplay: true,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 15,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },

  });

  //promotion 토글
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
const promotionToggleBtnEl = document.querySelectorAll('.toggle-promotion .material-symbols-outlined');
let hidePromotion = false;

promotionToggleBtn.addEventListener('click', function() {
        // [...promotionToggleBtn.children].forEach((toggleBtn) => {
        //     toggleBtn.classList.toggle('off', toggleBtn === target)
        // });
        if(promotionToggleBtnEl.textContent === 'expend_less') {
            promotionToggleBtnEl.textContent = 'expend_more';
        }else {
            promotionToggleBtnEl.textContent = 'expend_less';
        }
        hidePromotion = !hidePromotion

        if(hidePromotion) {
            promotionEl.classList.add('off');
        }else {
            promotionEl.classList.remove('off');
        }
})

// visual img 순서대로
const fadeEls = document.querySelectorAll('.main-visual-wrap .fade-in')
fadeEls.forEach((fadeEl, index) => {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity: 1

    })
})

// scrollMagic
const scrollEls = document.querySelectorAll('section.scroll')
scrollEls.forEach((scrollEl) => {
    new ScrollMagic
        .Scene({
            triggerElement: scrollEl,
            triggerHook: .6

        })
        .setClassToggle(scrollEl, 'show')
        .addTo(new ScrollMagic.Controller())
})