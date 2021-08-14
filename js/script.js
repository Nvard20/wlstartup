let temp = true;
$('.burger').click(function(){
    
    temp = !temp;
   // $('.mob-menu').toggle();
    if(!temp){
        $('#burg').removeClass('fa-bars');
        $('#burg').addClass('fa-close');
        $('.inner-header').addClass('cross');
        $('.mob-menu').addClass('active-list');

    } else{
        $('#burg').addClass('fa-bars');
        $('#burg').removeClass('fa-close');
        $('.inner-header').removeClass('cross');
        $('.mob-menu').removeClass('active-list');


    }
});
$('.menu-link').click(function(){
  $('.mob-menu').removeClass('active-list');
  $('.inner-header').removeClass('cross');
  $('#burg').removeClass('fa-close');
  $('#burg').addClass('fa-bars');

})
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
  //link animate
  $(document).ready(function() {
    $("a.menu-link").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 700);
    });
  });
  $(document).ready(function() {
    $(".get").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 700);
    });
  });