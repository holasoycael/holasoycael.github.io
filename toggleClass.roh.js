$(document).ready(function() {
$('p.btn-menu a').click(function(){
    $('body').toggleClass('hide');
    $('.container').toggleClass('filte');
    $('.frame, .ct-header').toggleClass('n-push');//transform menu
    $('.pushmenu').toggleClass('m-push');//transform menu
    $('#txtPesquisar, #inputSubmit').toggleClass('disabl');//block search
});

$('input.accept').click(function(){
    $('.message-board').hide();
});

});
