$('div.splash-section').first();

$('a.display').on('click', function(e) {
    e.preventDefault();

      var t = $(this).text(),
      that = $(this);

    if (t === 'Next' && $('.current').next('div.splash-section').length > 0) {
        var $next = $('.current').next('.splash-section');
        var top = $next.offset().top;
        
        $('.current').removeClass('current');     
        $(function () {
               $next.addClass('current');
               $('html, body').animate({scrollTop: $('.current').offset().top }, 'slow');
            
        });
  } else if (t === 'Previous' && $('.current').prev('div.splash-section').length > 0) {
        var $prev = $('.current').prev('.splash-section');
        var top = $prev.offset().top;
        
        $('.current').removeClass('current');
      
        $(function () {
               $prev.addClass('current');
               $('html, body').animate({scrollTop: $('.current').offset().top }, 'slow');
        });
  } 
});


