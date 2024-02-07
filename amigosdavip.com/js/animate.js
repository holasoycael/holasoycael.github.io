$(document).ready(function(){

(function(){
function SetCookie(c_name,value,expiredays){
var exdate=new Date();
exdate.setDate(exdate.getDate()+expiredays);
document.cookie=c_name+"="+escape(value)+((expiredays==null)?"":";expires="+exdate.toGMTString())+";path=/"; 
}
window['RootCookies'] = {};
window['RootCookies']['SetCookie'] = SetCookie;
})();
$('.tvon, #carousel a').click(function() { 
RootCookies.SetCookie('.tvon, #carousel a', 'no', 1);
$('.saludos').hide();
$('.television').show();
$('.saludos').fadeOut(1000);
$('.saludos').animate({display: "none"}, 1000);
});
$('.home').click(function() {  
RootCookies.SetCookie('.tvon, #carousel a', 'no', -1);       
$('.television').hide();
$('.saludos').show(); 
$('.saludos').animate({opacity: 1.0}, 500).fadeIn('slow');});

$('.closexat').click(function() {  
RootCookies.SetCookie('.chat', 'no', -1);       
$('.xat, .closexat').hide();
$('.salmo, .openxat').show();
$('.xat, .closexat').fadeOut(1000);
$('.xat, .closexat').animate({display: "none"}, 1000);
});
$('.openxat').click(function() {  
RootCookies.SetCookie('.chat', 'no', -1);       
$('.salmo, .openxat').hide();
$('.xat, .closexat').show();
$('.xat, .closexat').animate({opacity: 1.0}, 500).fadeIn('slow');});

$('.chat').click(function() {  
RootCookies.SetCookie('.chat', 'no', -1);       
$('.xat, .closexat').hide();
$('.salmo, .openxat').show();
$('.xat, .closexat').fadeOut(1000);
$('.xat, .closexat').animate({display: "none"}, 1000);
});
});