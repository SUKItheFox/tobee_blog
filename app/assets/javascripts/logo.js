$(document).on('scroll', function() {
  if ($(document).scrollTop() >= 30) {
    
    $('.style_image').css('margin-top', '-1vh');
     $('.style_image').css('left', '0.8vw');
     $('.style_image').css('width', '80%');

  } else {
    
    $('.style_image').css('margin-top', '');
     $('.style_image').css('left', '');
     $('.style_image').css('width', '');
  }

  
});