$(document).ready(function(){

$(document).keydown(function(e){
var tecla=window.event.keyCode;
if (tecla==123){
event.returnValue=false;}
var ctrl=window.event.ctrlKey; 
if(ctrl && e.which == 85){
return false;
}
});

});