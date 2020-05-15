window.onload = function(){
var BTNmenu = document.querySelector('.BTNhref');
var SWIPEc_ = document.querySelector('.SWIPEc_');

BTNmenu.addEventListener('click', SWIPEopen);
SWIPEc_.addEventListener('click', SWIPEclose);

var BODYdoc = document.getElementsByTagName("BODY")[0];
var PUSHmenu = document.querySelector('.PUSHmenu');
var GUIDEmenu = document.querySelector('.GUIDEmenu');
var SWIPEopen = document.getElementById('CONTENTframe');

function HEADmenu(){
var HEADmenu = document.querySelector('HEADER.HEADmenu');
var HTMLoffset = document.querySelector('HTML');
HEADmenu.style.width = HTMLoffset.offsetWidth + 'px';}
setInterval(HEADmenu, 0);

function SWIPEopen(){
BODYdoc.style.cssText = "overflow:hidden";
PUSHmenu.style.cssText = "transform:translate3d(0,0,0)";
GUIDEmenu.style.cssText = "left: 240px";
SWIPEopen.classList.add('SWIPEopen');

var SWIPEcl = document.querySelector('.SWIPEopen');
SWIPEcl.addEventListener('click', SWIPEclose);}

function SWIPEclose(){
BODYdoc.style.removeProperty('overflow');
PUSHmenu.style.removeProperty('transform');
GUIDEmenu.style.removeProperty('left');
SWIPEopen.classList.remove('SWIPEopen');}

//MOSTRAR MAIS E MOSTRAR MENOS DO FOOTER [OK]
var _SPOTone = document.querySelector('._SPOTone');
var FORSPOTone = document.getElementById('FORSPOTone');
FORSPOTone.addEventListener('click', function(){
if (_SPOTone.style.display === "block") {
FORSPOTone.classList.remove('CROSSup');
FORSPOTone.classList.add('CROSSdown');
_SPOTone.style.display = "none";
}else{
FORSPOTone.classList.remove('CROSSdown');
FORSPOTone.classList.add('CROSSup');
_SPOTone.style.display = "block";}});

var _SPOTtwo = document.querySelector('._SPOTtwo');
var FORSPOTtwo = document.getElementById('FORSPOTtwo');
FORSPOTtwo.addEventListener('click', function(){
if (_SPOTtwo.style.display === "block") {
FORSPOTtwo.classList.remove('CROSSup');
_SPOTtwo.style.display = "none";
}else{
FORSPOTtwo.classList.add('CROSSup');
_SPOTtwo.style.display = "block";}});

var _SPOTtre = document.querySelector('._SPOTtre');
var FORSPOTtre = document.getElementById('FORSPOTtre');
FORSPOTtre.addEventListener('click', function(){
FORSPOTtre.classList.remove('CROSSup');
if (_SPOTtre.style.display === "block") {
_SPOTtre.style.display = "none";
}else{
FORSPOTtre.classList.add('CROSSup');
_SPOTtre.style.display = "block";}});

//GRAVADOR DE BUSCA [OK]
var SEARCHit = document.querySelector('.SEARCHit');
SEARCHit.addEventListener('click', SEARCHfind);

function SEARCHfind(){
var INPUTfind = document.querySelector('.SEARCHinput').value;
if(INPUTfind != ''){
if(localStorage.LASTsearch != undefined){
var GETitem = localStorage.LASTsearch;
var GETiteq = GETitem.length;
var GETitef = GETitem.substring(2, GETiteq-2);
var LASTes = GETitef.split('","');
var LASTel = LASTes.length;
var OUTirm = GETitef + '","' + INPUTfind;
var OUTinst = '["' + OUTirm + '"]';

if(3 < LASTel){
var SEARC_1 = LASTes[4];
var SEARC_2 = LASTes[3];
var SEARC_3 = LASTes[2];
var SEARC_4 = LASTes[1];
var SEARCtag = '["' +SEARC_4+ '","' +SEARC_3+ '","' +SEARC_2+ '","' +INPUTfind+ '"]';
localStorage.setItem('LASTsearch', SEARCtag);
}else{
localStorage.setItem('LASTsearch', OUTinst);}

}else{
var BAAHit = '["' +INPUTfind+ '"]';
localStorage.setItem('LASTsearch', BAAHit);}}};

if(localStorage.LASTsearch != undefined){	
var arr = localStorage.LASTsearch;
var arr = arr.substring(2, arr.length-2);
var arr = arr.split('","');

if(arr[arr.length-1] != undefined){ var SEARCHtag_1 = '<a class="SEARCHtag" href="/search?q='+ arr[arr.length-1] +'&amp;max-results=9">'+ arr[arr.length-1] +'</a>' }
else{ var SEARCHtag_1 = '' }
if(arr[arr.length-2] != undefined){ var SEARCHtag_2 = '<a class="SEARCHtag" href="/search?q='+ arr[arr.length-2] +'&amp;max-results=9">'+ arr[arr.length-2] +'</a>' }
else{ var SEARCHtag_2 = '' }
if(arr[arr.length-3] != undefined){ var SEARCHtag_3 = '<a class="SEARCHtag" href="/search?q='+ arr[arr.length-3] +'&amp;max-results=9">'+ arr[arr.length-3] +'</a>' }
else{ var SEARCHtag_3 = '' }
if(arr[arr.length-4] != undefined){ var SEARCHtag_4 = '<a class="SEARCHtag" href="/search?q='+ arr[arr.length-4] +'&amp;max-results=9">'+ arr[arr.length-4] +'</a>' }
else{ var SEARCHtag_4 = '' }

var POPULARinst = document.querySelector('.POPULARinst');
POPULARinst.innerHTML = '<i class="LASTsearch"></i>' +SEARCHtag_1+SEARCHtag_2+SEARCHtag_3+SEARCHtag_4;}

//RESGATA BOOKMARKS [OK]
if(window.location.href.indexOf('favoritos') > -1){
var postBody = document.querySelector('.postBody');
postBody.parentNode.removeChild(postBody);
var BLOGinst = document.querySelector('.Blog');

var GETitem = localStorage.BOOKmark;
if(GETitem != undefined){
var JSONparse = JSON.parse(GETitem);
var OBJname = Object.getOwnPropertyNames(JSONparse);

for(var i = 0; i < OBJname.length; i++){
var pTITLE = JSONparse[OBJname[i]].POSTtitle;
var pURL = JSONparse[OBJname[i]].POSTurl;
var pPRICE = JSONparse[OBJname[i]].RELprice;
var pIMG = JSONparse[OBJname[i]].RELimage;
var pDATE = JSONparse[OBJname[i]].POSTdate;

var CONTENTpage = '<div class="POSTbox" id="'+OBJname[i]+'"><div class="POSTinst"><section class="POSTup"><div class="POSTimg"><img class="THUMBnail" src="' +pIMG+ '"></img></div><div class="POSTspot"><i class="BTNdel" rel="'+OBJname[i]+'"></i></div></section><section class="POSTbt"><div class="POSTbt_inner"><h3 class="POSTtitle"><a class="POSTurl" href="'+pURL+'">'+pTITLE+'</a></h3><div class="POSTdate CALENDar">'+pDATE+'</div><div class="POSTBOXbt"><div class="POSTprice">'+pPRICE+'</div><div class="POSTbtn"><li><a class="BTNlive" href="#" target="_blank">Demo</a></li><li><a class="BTNinfo" href="#">Info</a></li></div></div></div></section></div></div>';
BLOGinst.insertAdjacentHTML('beforeend', CONTENTpage)}

//REMOVER POST BOOKMARK [EM EDIÇÃO (...)]
for(var i = 0; i < OBJname.length; i++){
var BTNclick = document.querySelectorAll('.BTNdel');

BTNclick[i].addEventListener('click', function(){
var BTNrel = this.getAttribute('rel');
var RECENTitem = localStorage.BOOKmark;
var JSONparse = JSON.parse(RECENTitem);
var OBJname = Object.getOwnPropertyNames(JSONparse);

if(~OBJname.indexOf(BTNrel)){
delete JSONparse[BTNrel]; // deleta o item selecionado
var JSONstr = JSON.stringify(JSONparse); //converte em texto
localStorage.setItem('BOOKmark', JSONstr)

var THISpost = document.getElementById(BTNrel)
THISpost.parentNode.removeChild(THISpost);
}});}}
else{
var BLOGinst = document.querySelector('.Blog');
var CONTENTpage = '<div class="EMPTYfav"><p>NÃO HÁ FAVORITOS NA SUA LISTA</p><span>Esta página tu encontra todos os templates selecionados como favoritos.</span></div>';
BLOGinst.insertAdjacentHTML('beforeend', CONTENTpage)}}

//ENVIAR BOOKMARK [OK]
var BTNcount = document.querySelectorAll('.BTNfav').length;
for(var i = 0; i < BTNcount; i++){
var BTNclick = document.querySelectorAll('.BTNfav');

BTNclick[i].addEventListener('click', function(){
var BTNrel = this.getAttribute('rel');
var POSTinst = document.getElementById(BTNrel);
var RELtitle = POSTinst.querySelector('.POSTurl').innerText;
var RELhref = POSTinst.querySelector('.POSTurl').href;
var RELdate = POSTinst.querySelector('.POSTdate').innerText;
var RELimage = POSTinst.querySelector('.THUMBnail').src;
var RELprice = POSTinst.querySelector('.POSTprice').innerText;

var GETitem = localStorage.BOOKmark;
if(GETitem != undefined){
if(!~GETitem.indexOf(BTNrel)){
var MARKexist = GETitem.substring(1, GETitem.length-1);
var BOOKmark = '{"' +BTNrel+ '":{"POSTtitle":"' +RELtitle+ '","POSTurl":"' +RELhref+ '","POSTdate":"' +RELdate+ '","RELimage":"' +RELimage+ '","RELprice":"' +RELprice+ '"},' +MARKexist+ '}';
localStorage.setItem('BOOKmark', BOOKmark);
}}else{
var BOOKmark = '{"' +BTNrel+ '":{"POSTtitle":"' +RELtitle+ '","POSTurl":"' +RELhref+ '","POSTdate":"' +RELdate+ '","RELimage":"' +RELimage+ '","RELprice":"' +RELprice+ '"}}';
localStorage.setItem('BOOKmark', BOOKmark);}
});}}
