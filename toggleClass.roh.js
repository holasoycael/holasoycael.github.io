$(document).ready(function() {
$('p.btn-menu a').click(function(){
    $('html, body').toggleClass('active');
    $('.container').toggleClass('filte');
    $('.frame, .ct-header').toggleClass('n-push hide');//transform menu
    $('.pushmenu').toggleClass('m-push');//transform menu
    $('#txtPesquisar').toggleClass('disabl');//block search
});
});
