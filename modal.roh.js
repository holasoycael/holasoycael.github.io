$(document).ready(function(){

	var jaFoiVistoNasUltimas24Horas = getCookie('nomeCookiePopUp');
        var id = $('#GalleryThemes');
        var hd = $('#mascara');

	if(jaFoiVistoNasUltimas24Horas==null){
		//Código para MOSTRAR o pop up
		mostrarOuNaoPopUp('mostrarSim');
	}else{
		//Código para NÃO MOSTRAR pop up
		mostrarOuNaoPopUp('mostrarNao');
	}

	function mostrarOuNaoPopUp(condicao){
	if(condicao=='mostrarSim'){

	//Código para MOSTRAR o pop up
        $(id).show();
        $(hd).fadeIn(0);
	$(hd).fadeTo("slow",0.6);

	definirNovaDataExpiracao();
	}else if(condicao=='mostrarNao'){

	//Código para NÃO MOSTRAR pop up
        $(id).hide();
        $(hd).hide();

	}
}
	function definirNovaDataExpiracao(){
		var data=new Date();
		var numeroDeDiasParaExpiracao=1;//1 dia
		data.setTime(data.getTime()+(numeroDeDiasParaExpiracao*24*60*60*1000));
		var expires="expires="+data.toUTCString();
		var cookie='nomeCookiePopUp="Ainda não espirou";'+expires;
		document.cookie=cookie;
	}
	function getCookie(nomeCookie){
		var ca=document.cookie.split(';');
		var name=nomeCookie+'=';
		for(var i=0;i<ca.length;i++){
			var c=ca[i].trim();
			if(c.indexOf(name)==0){
				return c.substring(name.length,c.length);
			}
		}
		return null;
	}
        var left = ($(window).width() /2) - ( $(id).width() / 2 );
        var top = ($(window).height() / 2) - ( $(id).height() / 2 );
     
        $(id).css({'top':top,'left':left});   


     $("a[rel=modal]").click( function(ev){
        ev.preventDefault();
        $(id).show();
        $(hd).fadeIn(0);
		$(hd).fadeTo("slow",0.6);
    });

    $("#mascara").click( function(){
        $(this).hide();
        $(".window").hide();
    });
 
    $('.outmit').click(function(ev){
        ev.preventDefault();
        $("#mascara").hide();
        $(".window").hide();
    });

});
