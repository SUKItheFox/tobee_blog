$(document).on('scroll', function() {
	if ($(document).scrollTop() >= 130) {
    	$('#sidebar_beehive_slide_in').fadeOut();
    		
    } else {
    	$('#sidebar_beehive_slide_in').fadeIn();
    }
        
});