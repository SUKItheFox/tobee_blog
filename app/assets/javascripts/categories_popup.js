clic = 0;

jQuery('#category_menu').click(function(){

        if(clic == 0){
            jQuery('.categories_links').css({
                'opacity':1,
                'margin':'10px 0'
            });

            jQuery.css('display','block');
            clic = 1;
        }else{
            jQuery('.categories_links').css(
                {
                    'opacity':0,
                    'margin':'-400px 0'
                }
            );
            jQuery.css('display','none')
            clic = 0;
        }
        return false;
    })