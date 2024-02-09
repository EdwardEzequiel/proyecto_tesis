const triggerOpen = document.querySelectorAll('[trigger-button]');
const triggerClose = document.querySelectorAll('[close-button');
const overlay = document.querySelector('[data-overlay]');

for(let i = 0; i < triggerOpen.length; i++) {
    let currentId = triggerOpen[i].dataset.target,
    targetEL = document.querySelector('#${currentId}')

    const openData = function() {
        tragetEL.classList.remove('active');
        overlay.classList.remove('active');
    };
    triggerOpen[i].addEventListener('click',  function() {
         targetEL.classList.add('active');
         overlay.classList.add('active');
    });

    targetEL.querySelector('close-button').addEventListener('click', openData);
    overlay.addEventListener('click', openData);
}


//mobile - menu - submenu

const submenu = document.querySelectorAll('.child-trigger');
submenu.forEach((menu) => menu.addEventListener('click', function(e){
     e.preventDefault();
     submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('active') : null);
     if(this.closest('.has-child').classList != 'active') {
        this.closest('.has-child').classList.toggle('active');
     }

}))

//slider

const swiper = new Swiper('.sliderbox swiper', {
  loop: true,
  effect: 'fade',
  autoHeight: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});