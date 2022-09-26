

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () { 
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //배지 숨기기
    //gsap.to(요소, 지속시간 s, 옵션)
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    });


    //버튼 보이기
    gsap.to('#to-top', .2, {
      x: 0
    });

    
    } else {
    // 배지 보이기
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });

    //버튼 숨기기
    gsap.to('#to-top', .2, {
      x: 100
    });

    }
  
}, 300));

// _.throttle(함수, 시간(ms))


toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo:0
  });
})


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .3, // 0.7, 1.4, 2.1, 2.7
    opacity: 1
  });
});

// new swiper
const swiper = new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  loop: true,
  autoplay: {
    delay: 2000,
  },
});
    
const swiper2 = new Swiper('.promotion .swiper', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 갯수
  spaceBetween: 10, // 여백
  centeredSlides: true, //중앙
  loop: true,
  autoplay: {
    delay: 2000,
  },

pagination: {
  el:".promotion .swiper-pagination",
  clickable: true,
},

  navigation: {
    nextEl: '.promotion .swiper-button-next',
    prevEl: '.promotion .swiper-button-prev',
  },
  
});

const swiper3 = new Swiper('.awards .swiper', {
  autoplay: {
    delay: 2000
  },
  loop: true,
  spaceBetween: 0,
  slidesPerView: 5,
  

  navigation: {
    nextEl: '.awards .swiper-button-next',
    prevEl: '.awards .swiper-button-prev',
  },
});
  



const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
  
  } else {
    promotionEl.classList.remove('hide');

  }
});

function random(min,max) {

  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject (selector, delay, size) {
  gsap.to(selector, 
    random(1.5, 2.5), {
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay),
  });

} 

floatingObject('.floating1 ', 1, 15);
floatingObject('.floating2 ', .5, 15);
floatingObject('.floating3 ', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
      .Scene({
        triggerElement: spyEl, // 보여짐 여부를 감시할 요소
        triggerHook:0.7,
      })
      .setClassToggle(spyEl, 'show')
      .addTo(new ScrollMagic.Controller());

});


