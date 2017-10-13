clic = 0;

jQuery('#menu-responsive').click(function(){

        if(clic == 0){
          jQuery('#menu-primary').css({
                'opacity':1,
                'margin':'10px 0'
            });

            jQuery('.arrow-up').css('display','block');
            clic = 1;
        }else{
            jQuery('#menu-primary').css(
                {
                    'opacity':0,
                    'margin':'-400px 0'
                }
            );
            jQuery('.arrow-up').css('display','none')
            clic = 0;
        }
        return false;
    })