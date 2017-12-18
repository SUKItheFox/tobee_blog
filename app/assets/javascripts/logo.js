$(document).on('scroll', function() {
  if ($(document).scrollTop() >= 30) {
    
    $('.style_image').css('margin-top', '-110px');
     $('.style_image').css('left', '9px');
     $('.style_image').css('width', '80%');

  } else {
    
    $('.style_image').css('margin-top', '');
     $('.style_image').css('left', '');
     $('.style_image').css('width', '');
  }

  
});