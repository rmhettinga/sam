$(document).ready(function() {

  $('ul#filter a').click(function() {
   $(this).css('outline','none');
   $('ul#filter .current').removeClass('current');
   $(this).parent().addClass('current');

   var filterVal = $(this).text().toLowerCase().replace(' ','-');

   if(filterVal == 'all') {
     $('.projects .columns.hidden').fadeIn('slow').removeClass('hidden').removeClass('onethird-cat');
   } else {
     $('.projects .columns').each(function() {
       if(!$(this).hasClass(filterVal)) {
         $(this).fadeOut(1).addClass('hidden');
       } else {
         $(this).fadeIn(1).removeClass('hidden').addClass('port-filtered onethird-cat');
       }
     });
   }

   return false;
 });

// smooth scroll

 $(function() {
   $('a[href*="#"]:not([href="#"])').click(function() {
     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$('.my-slidera').unslider();
$('.my-sliderb').unslider();
$('.my-sliderc').unslider();






});
