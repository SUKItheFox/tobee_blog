
$(document).on('scroll', function() {
	if ($(document).scrollTop() >= 130) {
    	$('#category_slides_in').fadeOut();
    		
    } else {
    	$('#category_slides_in').fadeIn();
    }
        
});

