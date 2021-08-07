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
