//RECENT COMMENTS
function commentDisplay(json) {
var NUMment = 4;
var NUMchar = 220;
var NOavatar = "data:image/svg+xml;base64,PHN2ZyBpZD0iQWdydXBhcl8xIiBkYXRhLW5hbWU9IkFncnVwYXIgMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjUwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDI1MCAyNTAiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNjNWM1YzU7CiAgICAgIH0KCiAgICAgIC5jbHMtMiwgLmNscy0zIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICB9CgogICAgICAuY2xzLTMgewogICAgICAgIGZpbGwtcnVsZTogZXZlbm9kZDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPHJlY3QgaWQ9IlJldMOibmd1bG9fMSIgZGF0YS1uYW1lPSJSZXTDom5ndWxvIDEiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjI1MCIgaGVpZ2h0PSIyNTAiLz4KICA8Y2lyY2xlIGlkPSJFbGlwc2VfMSIgZGF0YS1uYW1lPSJFbGlwc2UgMSIgY2xhc3M9ImNscy0yIiBjeD0iMTI1IiBjeT0iMTAzIiByPSI1NyIvPgogIDxwYXRoIGlkPSJGb3JtYV8xIiBkYXRhLW5hbWU9IkZvcm1hIDEiIGNsYXNzPSJjbHMtMyIgZD0iTTMxLDI1MHM0LjE1Mi03Ny4yMzIsNjktOTljMS42NjQtLjA0NCw0Ny40MDYtMC4wMDcsNTAsMCwzNy41MTEsOC4yODUsNzAuMTUxLDYxLjM3NSw2OSw5OUMyMTUuNzY5LDI0OS45MDUsMzEsMjUwLDMxLDI1MFoiLz4KPC9zdmc+Cg==";

for(var i=0;i<NUMment;i++){
var ENTRYcomm = json.feed.entry[i];
var COMMname = ENTRYcomm.author[0].name.$t;
var COMMents = ENTRYcomm.content.$t;
var COMMdata = ENTRYcomm.gd$extendedProperty[1].value;
var COMMiden = ENTRYcomm.gd$extendedProperty[0].value;
var COMMimag = ENTRYcomm.author[0].gd$image.src;
if(COMMimag == "https://img1.blogblog.com/img/blank.gif"){ var COMMimag = NOavatar; }

var COMMents = COMMents.replace(/<.*?>/g, ' ');
var ENTRYcon = '<li class="item t-slid" id="identity' + COMMiden + '"><span class="imgAuthor"><img src="' + COMMimag + '" width="90" height="90"/></span><section><span class="nameAuthor">' + COMMname + '</span><span class="dateComment">' + COMMdata + '</span></section><p>'+COMMents+'</p></li>';
document.write(ENTRYcon);}}
//MENUPUSH RESPONSIVO
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