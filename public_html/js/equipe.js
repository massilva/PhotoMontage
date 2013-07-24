$(function(){
    $(".info").css("min-height","300px");
});

function selecione(sel,pos){

    var selecionado = $(sel).parent().parent(); 
    $(".selecionado").removeClass("selecionado");
    $(".info").hide().delay(100);
    $(".selected").remove();

    selecionado.addClass("selecionado");

    var info = selecionado.find(".info");
    var minH = info.outerHeight(); 
    var h = minH/4.5*pos;
    
    if(h > minH)
        h = (-1)*minH;
    else
        h = (-1)*h;

    info.css("top",h);
    selecionado.append("<div class=\"selected\" style=\"display: none;\"></div>");
    
    info.fadeIn(2000);
    $(".selected").fadeIn(1000);
        
}

function select(sel,pos){

    var efeito = $(sel).parent().parent().parent();
    var id = efeito.attr("id");
    var w = efeito.width();
    
    if(id === "efeito1"){
        efeito.hide();
    }
    
    efeito.removeAttr("id");
    efeito.attr("id","efeito2"); 
    
    efeito.show("slow").delay(100);
    
    selecione(sel,pos); 
}
