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
    var selected = selecionado.find(".circular");
    var h = selected.offset().top-$("#nav").height()-70;
    
    h = (-1)*h;
    info.css("top",parseInt(h));
    info.fadeIn(2000);
    
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

function selectPortifolio(sel,pos){ 
     $("section").css("filter","blur(2px)");
    $("body").toggleClass(pos);
   
}

function fechaModal(){
    $("body").toggleClass();
}
    
