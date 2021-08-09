let temp = true;
$('.burger').click(function(){
    
    temp = !temp;
    $('.mob-menu').toggle(300);
    if(!temp){
        $('#burg').removeClass('fa-bars');
        $('#burg').addClass('fa-close');

    } else{
        $('#burg').addClass('fa-bars');
        $('#burg').removeClass('fa-close');
    }
});
var swiper = new Swiper(".mySwiper", {
    loop: true,
    loopFillGroupWithBlank: true,

    navigation: {
      nextEl: ".left",
      prevEl: ".right",
    },
    breakpoints: {
        // when window width is <= 499px
        1920: {
            slidesPerView: 4,
        },
        767: {
            slidesPerView: 2,
          
        },
        600: {
            slidesPerView: 1,
          
        },
  
        // when window width is <= 999px
      
    }
  });