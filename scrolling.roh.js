$(document).ready(function(){

		$('.down').on('click',function (e) {
	    e.preventDefault();

      	$("body").removeClass("hide");
	    var target = '.frame';
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top-0
	    }, 900, 'swing', function () {
	
      	$("div.paging").addClass("none");
	    });
	});
});