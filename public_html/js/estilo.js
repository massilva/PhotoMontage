
$(function(){
    var _nav = jQuery('#nav'),
        _bh = $(window).height();
        
    var h = _bh - _nav.height()/2;
    $("#site section .wrapper").css("min-height",h);
});