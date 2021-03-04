$(function() {

// Слайдер
    $('.slider').slick({
        rtl: true
      });

    $('a[href^="#"]').on('click', function(event) {
    // Анимация якорей
      event.preventDefault();
      
      var sc = $(this).attr("href"),
           dn = $(sc).offset().top;  
       $('html, body').animate({scrollTop: dn}, 1000);  
      });

    // Куси
    $(document).on('scroll', function(){
      $('.kusi1, .kusi2, .kusi3, .kusi4').css("left", Math.max(0 - 0.35*window.scrollY) + "px" );

    });

    
});