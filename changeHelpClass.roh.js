$(function(){$('header.nav a').click(function(){

	$('header.nav a').removeClass('help');
	$('article').removeClass('help');
	$(this).addClass('help');

	var id = $(this).data('id');
	var content = $('article').filter(function(){
		return $(this).data("id") == id});content.addClass('help');
	});
});
