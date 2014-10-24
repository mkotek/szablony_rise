/*left content - events*/
$.fn.events = function(){
  return this.each(function() {
    var $children = $(this).children();
    var position = -1;
    !function loop() {
        position = (position + 1) % $children.length;
        $children.eq(position)
                 .fadeIn(300)
                 .delay(10000)
                 .fadeOut(300, loop);
    }();
  });
};

$(function(){
  $(".left-content").hide();
  $(".container").events();
});  

/*right content - images*/
$.fn.images = function(){
  return this.each(function() {
    var $children = $(this).children();
    var position = -1;
    !function loop() {
        position = (position + 1) % $children.length;
        $children.eq(position)
                 .fadeIn(300)
                 .delay(10000)
                 .fadeOut(300, loop);
    }();
  });
};

$(function(){
  $(".skew").hide();
  $(".right-container").images();
});  