
$(document).on('scroll', function() {
	if ($(document).scrollTop() >= 130) {
    	$('#navBar').fadeOut();
    		
    } else {
    	$('#navBar').fadeIn();
    }
        
});

