window.onload = function(){
	var BODYdoc = document.getElementsByTagName("BODY")[0];
	var btnMenu = document.querySelector('.trigger');
	var pushMenu = document.querySelector('.pushmenu');
	var swipeOpen = document.getElementById('contentFrame');
	var inputSearch = document.getElementById('txtPesquisar');
	var blockSearch = document.createAttribute("disabled");
btnMenu.addEventListener('click', function(){
	inputSearch.setAttributeNode(blockSearch);
	BODYdoc.style.cssText = "overflow:hidden";
	pushMenu.style.cssText = "transform:translate3d(0,0,0)";
	swipeOpen.classList.add('swipeOpen');
	swipeClose();});
function swipeClose(){
let swipeClose = document.querySelector('.swipeOpen');
swipeClose.addEventListener('click', function(){
	inputSearch.removeAttribute('disabled');
	BODYdoc.style.removeProperty('overflow');
	pushMenu.style.removeProperty('transform');
	swipeOpen.classList.remove('swipeOpen');
});}}