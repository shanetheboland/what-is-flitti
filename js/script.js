$('div.section').first();

$('a.display').on('click', function(e) {
    e.preventDefault();

      var t = $(this).text(),
      that = $(this);

    if (t === 'Next' && $('.current').next('div.section').length > 0) {
        var $next = $('.current').next('.section');
        var top = $next.offset().top;
        
        $('.current').removeClass('current');     
        $(function () {
               $next.addClass('current');
               $('html, body').animate({scrollTop: $('.current').offset().top }, 'slow');
            
        });
  } else if (t === 'Previous' && $('.current').prev('div.section').length > 0) {
        var $prev = $('.current').prev('.section');
        var top = $prev.offset().top;
        
        $('.current').removeClass('current');
      
        $(function () {
               $prev.addClass('current');
               $('html, body').animate({scrollTop: $('.current').offset().top }, 'slow');
        });
  } 
});


