
$(document).on('scroll', function() {
	if ($(document).scrollTop() >= 130) {
    	$('nav').fadeOut();
    } else {
    	$('nav').fadeIn();
    }
        
});