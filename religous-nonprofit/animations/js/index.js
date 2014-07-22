// this will be called onload
 jQuery(function($) {
// changed .hover to .each
  $('.photo').each(function() {
    var a = Math.random() < 0.5 ? Math.random()*-5000 : Math.random()*5000;             
    $(this).css('transform', 'rotate(' + a + 'deg)');    
  });
});