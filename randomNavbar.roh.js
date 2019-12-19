$(document).ready(function(){
var navbar = $('.navbar'), x = 1 + Math.floor(Math.random() * 2);
if (x == 1) {
navbar.addClass('White');
}
else if (x == 2) {
navbar.addClass('Lilith');
}
});