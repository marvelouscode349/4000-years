const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    keyboard: {
        enabled: true
    },
    spaceBetween: 25,
    draggable: true,
    speed: 500,
    grabCursor: true,
    navigation: {
        nextEl: '#nav-right',
        prevEl: '#nav-left',
    },

    pagination:{
        el: (".swiper .swiper-custom-pagination"),
        clickable: true
    },

    breakpoints: {
        // when window width is >= 320px
       
        // when window width is >= 480px
        1000: {
          slidesPerView: 3,
          spaceBetween: 25
        },
        // when window width is >= 640px
        
      }

  



    // If we need pagination

    // Navigation arrows

    // And if we need scrollbar

});

