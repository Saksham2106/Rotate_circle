var points = $('.circle');
var container = $('#rotate');
var w = container.width();
var h = container.height();
var theta = 0;
var angle = (2 * Math.PI) / points.length;

points.each(function() 
{
   var x = Math.round(w/2 + w/2 * Math.cos(theta) - $(this).width() / 2);
   var y = Math.round(h/2 + h/2 * Math.sin(theta) - $(this).height() / 2);
   
  $(this).css({
    left: x + 'px',
    top: y + 'px'
  });

  theta += angle;
});