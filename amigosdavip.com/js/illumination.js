//<![CDATA[
$(document).ready(function(){
$("#overlay").css("height", $(document).height()).hide();
$(".btnLight").click(function(){
$("#overlay").toggle();
if ($("#overlay").is(":hidden"))
$(this).html("Apagar a Luz").removeClass("turnedOff");
else
$(this).html("Acender as Luzes").addClass("turnedOff");
});
});
//]]>