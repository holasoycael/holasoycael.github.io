$(document).ready(function() {
$('p.btn-menu a').click(function(){
    $('.container').toggleClass('filte');
    $('.frame, .ct-header').toggleClass('n-push');//transform menu
    $('.pushmenu').toggleClass('m-push');//transform menu
    $('#txtPesquisar, #inputSubmit').toggleClass('disabl');//block search
});
});
