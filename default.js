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

//GRAVA O VALOR DA BUSCA [OK]
document.querySelector('.SEARCHform').addEventListener('submit', SEARCHform);
function SEARCHform(event) {
	var SEARCHinput = document.querySelector('.SEARCHinput').value;
if(SEARCHinput != ''){
if(localStorage.LASTsearch != undefined){
	var GETitem = localStorage.LASTsearch;
	var GETitef = GETitem.substring(2, GETitem.length-2);
	var OUTirm = '["' +GETitef+ '","' +SEARCHinput+ '"]';
	var LASTes = GETitef.split('","');

if(LASTes.length <= 3){
	localStorage.setItem('LASTsearch', OUTirm);
}else{
	var SEARCtag = '["' +LASTes[1]+ '","' +LASTes[2]+ '","' +LASTes[3]+ '","' +SEARCHinput+ '"]';
	localStorage.setItem('LASTsearch', SEARCtag);}}
else{
	var BAAHit = '["' +SEARCHinput+ '"]';
	localStorage.setItem('LASTsearch', BAAHit);}}}

//REGASTA E EXIBE O VALOR DA BUSCA [...]
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
var BLOGinst = document.querySelector('.Blog');
BLOGinst.classList.add('BOOKmark');

if(localStorage.BOOKmark != undefined){
var GETitem = localStorage.BOOKmark;
var JSONparse = JSON.parse(GETitem);
var OBJname = Object.getOwnPropertyNames(JSONparse);

for(var i = 0; i < OBJname.length; i++){
var pTITLE = JSONparse[OBJname[i]].POSTtitle;
var pURL = JSONparse[OBJname[i]].POSTurl;
var pPRICE = JSONparse[OBJname[i]].RELprice;
var pIMG = JSONparse[OBJname[i]].RELimage;
var pDATE = JSONparse[OBJname[i]].POSTdate;

var CONTENTpage = '<div class="POSTbox BOOKmark" id="'+OBJname[i]+'"><div class="POSTinst"><section class="POSTup"><div class="POSTimg"><img class="THUMBnail" src="' +pIMG+ '"></img></div><div class="POSTspot"><i class="BTNdel" rel="'+OBJname[i]+'"></i></div></section><section class="POSTbt"><div class="POSTbt_inner"><h3 class="POSTtitle"><a class="POSTurl" href="'+pURL+'">'+pTITLE+'</a></h3><div class="POSTdate CALENDar">'+pDATE+'</div><div class="POSTBOXbt"><div class="POSTprice">'+pPRICE+'</div><div class="POSTbtn"><li><a class="BTNlive" href="#" target="_blank">Demo</a></li><li><a class="BTNinfo" href="#">Info</a></li></div></div></div></section></div></div>';
BLOGinst.insertAdjacentHTML('beforeend', CONTENTpage)}
if(OBJname.length > 1){
var BOOKtitle = '<h3 class="BOOKtitle">Há ' +OBJname.length+ ' temas na sua lista!</h3>';}
else{
var BOOKtitle = '<h3 class="BOOKtitle">Só há ' +OBJname.length+ ' tema na sua lista!</h3>';}
BLOGinst.insertAdjacentHTML('afterbegin', BOOKtitle)

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

function DELTEpost(){
if(OBJname.length > 2){
var BOOKtitle = document.querySelector('.BOOKtitle');
var BOOKtxt = `Há ${OBJname.length-1} temas na sua lista!`;
	BOOKtitle.innerHTML = BOOKtxt;}
else{
var BOOKtitle = document.querySelector('.BOOKtitle');
var BOOKtxt = `Só há ${OBJname.length-1} tema na sua lista!`;
	BOOKtitle.innerHTML = BOOKtxt;}

var THISpost = document.getElementById(BTNrel)
THISpost.parentNode.removeChild(THISpost);}

document.getElementById(BTNrel).style.cssText = "max-width:0;max-height:0;opacity:0";
setTimeout(DELTEpost, 920)}

function ZEROmark(){
var BOOKtitle = document.querySelector('.BOOKtitle');
BOOKtitle.parentNode.removeChild(BOOKtitle);
document.querySelector('.EMPTYfav').style.cssText = "max-height:900px;opacity:1";}

if(OBJname.length -1 == 0){
	document.querySelector('.BOOKtitle').style.cssText = "opacity:0;max-height:0";
	localStorage.removeItem('BOOKmark')
var BLOGinst = document.querySelector('.Blog');
var CONTENTpage = '<div class="EMPTYfav BOOKmark"><p>Nao há nenhum tema em seus favoritos... Não deixe-a solitaria. 😥</p><div class="SPOTfav"><div class="BOTfav"><div class="POSTbox EXEfav"><div class="POSTinst"><section class="POSTup excl"><div class="POSTimg"><img class="THUMBnail" src="https://2.bp.blogspot.com/-U1PEPnMPk2Q/Xr_BCoq7EAI/AAAAAAAAG5I/_LP4GUXyKTAH5WUi7H7zH2yfFFaBjTnYQCLcBGAsYHQ/s1600/village-de-traque.png"></div><div class="POSTspot EXEfav"><i class="BTNfav EXEfav"></i></div></section><section class="POSTbt"><div class="POSTbt_inner"><h3 class="POSTtitle"><span class="POSTurl EXEfav TITLEex"></span></h3><div class="POSTdate EXEfav DATEex"></div><div class="POSTBOXbt"><div class="POSTprice EXEfav PRICEex"></div><div class="POSTbtn EXEfav BUTTONSex"><li><span class="BTNlive EXEfav"></span></li><li><span class="BTNinfo EXEfav"></span></li></div></div></div></section></div></div></div><div class="BOTFAVright"><span class="MSGfav">Os temas adicionados a sua lista de favoritos duram até a limpeza dos dados do seu navegador ou excluí-los manualmente. Coloque novo temas a sua lista!</span><a href="#" class="BACKhome">Mostrar mais temas</a></div></div></div>';
BLOGinst.insertAdjacentHTML('beforeend', CONTENTpage);
setTimeout(ZEROmark, 700)}});}}
else{
var BLOGinst = document.querySelector('.Blog');
var CONTENTpage = '<div class="EMPTYfav"><p>Você ainda não adicionou nenhum tema ao seus favoritos 🙄</p><div class="SPOTfav"><div class="BOTfav"><div class="POSTbox EXEfav"><div class="POSTinst"><section class="POSTup excl"><div class="POSTimg"><img class="THUMBnail" src="https://2.bp.blogspot.com/-U1PEPnMPk2Q/Xr_BCoq7EAI/AAAAAAAAG5I/_LP4GUXyKTAH5WUi7H7zH2yfFFaBjTnYQCLcBGAsYHQ/s1600/village-de-traque.png"></div><div class="POSTspot EXEfav"><i class="BTNfav EXEfav"></i></div></section><section class="POSTbt"><div class="POSTbt_inner"><h3 class="POSTtitle"><span class="POSTurl EXEfav TITLEex"></span></h3><div class="POSTdate EXEfav DATEex"></div><div class="POSTBOXbt"><div class="POSTprice EXEfav PRICEex"></div><div class="POSTbtn EXEfav BUTTONSex"><li><span class="BTNlive EXEfav"></span></li><li><span class="BTNinfo EXEfav"></span></li></div></div></div></section></div></div></div><div class="BOTFAVright"><span class="MSGfav">Clique no icone de “adicionar aos favoritos” e crie sua lista personalizada com todos os temas que tu mais gosta. Estamos felizes por ter você em nosso site.</span><a href="#" class="BACKhome">Mostrar todos os temas</a></div></div></div>';
BLOGinst.insertAdjacentHTML('beforeend', CONTENTpage)}}

//BOOOKMARK EXISTENTE
if(~window.location.href.indexOf('favoritos') > -1){
if(localStorage.BOOKmark != undefined){
	var GETitem = localStorage.BOOKmark;
	var JSONparse = JSON.parse(GETitem);
	var OBJname = Object.getOwnPropertyNames(JSONparse);
for(var i = 0; i < OBJname.length; i++){
	var ACTIVEpost = document.getElementById(OBJname[i]);
ACTIVEpost.classList.add('ACTIVElist');}}}

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

	var ACTIVEpost = document.getElementById(BTNrel);
	ACTIVEpost.classList.add('ACTIVElist');

if(localStorage.BOOKmark != undefined){
var GETitem = localStorage.BOOKmark;
if(!~GETitem.indexOf(BTNrel)){
var MARKexist = GETitem.substring(1, GETitem.length-1);
var BOOKmark = '{"' +BTNrel+ '":{"POSTtitle":"' +RELtitle+ '","POSTurl":"' +RELhref+ '","POSTdate":"' +RELdate+ '","RELimage":"' +RELimage+ '","RELprice":"' +RELprice+ '"},' +MARKexist+ '}';
localStorage.setItem('BOOKmark', BOOKmark);
}}else{
var BOOKmark = '{"' +BTNrel+ '":{"POSTtitle":"' +RELtitle+ '","POSTurl":"' +RELhref+ '","POSTdate":"' +RELdate+ '","RELimage":"' +RELimage+ '","RELprice":"' +RELprice+ '"}}';
localStorage.setItem('BOOKmark', BOOKmark);}
});}

if(window.location.href.indexOf('sobre') > -1){

var BLOGinst = document.querySelector('.Blog');
var POSTstatic = '<h3 class="STATICtitle">Sobre a empresa</h3><section class="BREADcrumb"><a href="#">Home</a><em class="CROSSicon"></em><a href="#">Blogger Templates</a><em class="CROSSicon"></em><a href="#" class="CURRENTurl">Blog/Magazine</a></section><div class="POSTstatic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus semper eget duis at tellus at. Viverra accumsan in nisl nisi. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Mauris nunc congue nisi vitae suscipit tellus. Elementum integer enim neque volutpat ac tincidunt vitae. Donec adipiscing tristique risus nec. Posuere urna nec tincidunt praesent semper feugiat. Mattis enim ut tellus elementum sagittis vitae. Ut tellus elementum sagittis vitae et leo duis.</div>'
BLOGinst.innerHTML = POSTstatic;

}}
