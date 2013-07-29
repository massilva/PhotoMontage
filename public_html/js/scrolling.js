
$(function(){
    
    var _top = $("#topo");
    _top.css("top",($(window).height()-80)+"px");
    _top.toggle();
    
    $(window).scroll(function(){
        
        var _h = $("#home");
        
        if($(window).scrollTop() > _h.height())
        {
            _top.show();
        } 
        else 
        {
            _top.hide();
        }
        
        /*
        if ($(window).scrollTop() > _h.height()){

          $('nav').addClass('fixed').css('top','0').next()
          .css('padding-top','60px');

        } else {

          $('nav').removeClass('fixed').next()
          .css('padding-top','0');
  
        }
        */
  });
  
});

function topo()
{
    var _bh = jQuery('body, html');
    _bh.animate({ scrollTop: 0}, 'slow', 'swing');
};
  