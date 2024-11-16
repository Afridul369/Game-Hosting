 //  Stykey Header  
 $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 200){
        $('#StikyNav').addClass('stickycss');
    }
    else {
         $('#StikyNav').removeClass('stickycss');
    }
    });  