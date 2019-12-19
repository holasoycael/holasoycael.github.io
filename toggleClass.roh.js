$(document).ready(function() {
$('p.btn-menu a').click(function(){
    $('html, body, .frame, .container').toggleClass('active');
    $('.container').toggleClass('inline filte');
    $('.pushmenu-push').toggleClass('trfrom');
});
});