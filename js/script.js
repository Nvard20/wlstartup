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
    slidesPerView:1,
    navigation: {
      nextEl: ".left",
      prevEl: ".right",
    },
    breakpoints: {
        // when window width is <= 499px
        1100: {
            slidesPerView: 4,
        },
     
    
  
        // when window width is <= 999px
      
    }
  });
   new Swiper(".mytxtSlider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    loop: true,

  });