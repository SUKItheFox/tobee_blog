var titles = [
    'in harmony',
    'healthy',
    'present',
    'curious',
    'inspired'
];

$(window).scroll(function(){
    var pos = $(this).scrollTop();
    
    if(pos < 100) {
        $('h1').slideUp().text(titles[0]);
    }
    if(pos > 100) {
        $('h1').slideDown();
    }
    if(pos > 200) {
        $('h1').text(titles[1]);
    }
    if(pos > 300) {
        $('h1').text(titles[2]);
    }
    if(pos > 400) {
        $('h1').text(titles[3]);
    }
    if(pos > 500) {
        $('h1').text(titles[4]);
    }
});
