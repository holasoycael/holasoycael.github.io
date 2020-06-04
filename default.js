window.onload = function(){
//MENUPUSH LATERAL
var PUSHmenu = document.querySelector('.PUSHmenu');
var CONTENTframe = document.getElementById('CONTENTframe');
document.querySelector('.BTNhref').addEventListener('click', function(){
	this.classList.toggle('HREFactive');
	PUSHmenu.classList.toggle('MENUactive');
	CONTENTframe.classList.toggle('SWIPEopen');
if(document.body.contains(document.querySelector('.SWIPEopen')) === true){
document.querySelector('.SWIPEopen').addEventListener('click', function(){
	document.querySelector('.BTNhref').classList.remove('HREFactive');
	PUSHmenu.classList.remove('MENUactive');
	CONTENTframe.classList.remove('SWIPEopen');
});}});

//TOGLE FOOTER
if(document.body.contains(document.querySelector('.CROSSdown')) === true){
for(var i = 0; i < document.querySelectorAll('.CROSSdown').length; i++){
var CROSSdown = document.querySelectorAll('.CROSSdown');
CROSSdown[i].addEventListener('click', function(){
var COLUMNspot = this.parentNode.parentNode.querySelector('.COLUMNspot');
$(COLUMNspot).animate({ height: "toggle", },{duration: 300});});}}

//GRAVA O VALOR DA BUSCA [OK]
document.querySelector('.SEARCHform').addEventListener('submit', SEARCHform);
function SEARCHform(event){
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

//REGASTA E EXIBE O VALOR DA BUSCA [OK]
if(document.querySelector('.POPULARinst') > -1 ? false : true == true){
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
POPULARinst.innerHTML = '<i class="LASTsearch"></i>' +SEARCHtag_1+SEARCHtag_2+SEARCHtag_3+SEARCHtag_4;}}

//RESGATA BOOKMARKS [OK]
if(window.location.href.indexOf('/p/favoritos.html') > -1){
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

//REMOVER POST BOOKMARK [OK]
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
BLOGinst.insertAdjacentHTML('beforeend', CONTENTpage)}

//BOOOKMARK EXISTENTE
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
	
if(document.querySelector('.SEARCHbar') > -1 ? false : true == true){
var SEARCHwhere = document.querySelector('.SEARCHwhere');
var SEARCHbar = document.querySelector('.SEARCHbar');
var HEADERnav = document.querySelector('.HEADERnav');
var BACKmenu = document.querySelector('.BACKmenu');
SEARCHwhere.addEventListener('click', function(){
HEADERnav.style.cssText = "opacity:0;";
SEARCHbar.style.cssText = "display:block";
setTimeout(HEADmenuON, 100)});

function HEADmenuON(){
HEADERnav.style.cssText = "top: -56px;opacity:0;";
SEARCHbar.style.cssText = "opacity:1;display:flex;";}

BACKmenu.addEventListener('click', function(){
SEARCHbar.style.cssText = "opacity:0;display:flex";
setTimeout(HEADmenuOFF, 100)});

function HEADmenuOFF(){
SEARCHbar.removeAttribute("style");
HEADERnav.style.cssText = "top:0;opacity:1";}}

if(window.location.href.indexOf('/p/sobre.html') > -1){
var BLOGinst = document.querySelector('.Blog');
var POSTstatic = '<h3 class="STATICtitle">Sobre a empresa</h3><section class="BREADcrumb"><a href="#">Início</a><em class="CROSSicon"></em><span>Páginas</span><em class="CROSSicon"></em><span class="CURRENTurl">Sobre</span></section><div class="POSTstatic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus semper eget duis at tellus at. Viverra accumsan in nisl nisi. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Mauris nunc congue nisi vitae suscipit tellus. Elementum integer enim neque volutpat ac tincidunt vitae. Donec adipiscing tristique risus nec. Posuere urna nec tincidunt praesent semper feugiat. Mattis enim ut tellus elementum sagittis vitae. Ut tellus elementum sagittis vitae et leo duis.</div>'
BLOGinst.innerHTML = POSTstatic;}

if(document.querySelector('.ITEMpost') > -1 ? false : true == true){
var POSTbody = document.querySelector('.POSTbody').offsetHeight;
var DOCUMENTtab = document.querySelector('.DOCUMENTtab').offsetHeight;
var comments = document.querySelector('.comments').offsetHeight;

//MENUMASTER
var css = new Blob([".DISABLEdiv{height:0}"], {type:'text/css'});
var style = document.createElement('link');
style.href = URL.createObjectURL(css) + '#style.css';
style.rel = 'stylesheet';
document.head.appendChild(style);

for(var i = 0; i < document.querySelectorAll('.SELECTtab').length; i++){
var COMMENTSwid = document.querySelectorAll('.SELECTtab');

COMMENTSwid[i].addEventListener('click', function(){
	var SELECTtab = this.getAttribute('for');
	var CURRENTspot = document.querySelector('.CURRENTspot');
	var CURRENTurl = document.querySelector('.' +SELECTtab);
	var FIRSTelement = document.querySelector('.ITEMpost').firstElementChild;

if((!FIRSTelement.isEqualNode(CURRENTurl)) && (this.hasAttribute("disable") == false)){
	FIRSTelement.classList.remove('ZEROdiv');
	CURRENTurl.classList.remove('ZEROdiv');

setTimeout(function(){
	FIRSTelement.insertAdjacentElement("beforebegin", CURRENTurl); }, 700);

setTimeout(function(){
FIRSTelement.classList.add('DISABLEdiv') }, 700);

//FECHA O PRIMEIRO ELEMENTO
$(FIRSTelement).animate({ height: 0 },{ duration: 700 });

//ADICIONA ALTURA NA DIV/ABA CHAMADA ------ [ 400 MILI-S ] DEPOIS DO CLICK
setTimeout(function(){
if(SELECTtab == 'comments'){	
$(CURRENTurl).animate({ height: comments, opacity: 1 },{duration: 700, complete: function(){ $(CURRENTurl).removeAttr('style') }});
}else if(SELECTtab == 'DOCUMENTtab'){
$(CURRENTurl).animate({ height: DOCUMENTtab, opacity: 1 },{duration: 700, complete: function(){ $(CURRENTurl).removeAttr('style') }});
}else if(SELECTtab == 'POSTbody'){
$(CURRENTurl).animate({ height: POSTbody, opacity: 1 },{duration: 700, complete: function(){ $(CURRENTurl).removeAttr('style') }});
}}, 400);

//DISABLE BUTTONS
for(var i = 0; i < document.querySelectorAll('.SELECTtab').length; i++){
	COMMENTSwid[i].setAttribute('disable', '');}
	
setTimeout(function(){
	CURRENTurl.classList.remove('DISABLEdiv');
	FIRSTelement.removeAttribute('style');
	FIRSTelement.classList.remove('ACTIVEdiv');
	
for(var i = 0; i < COMMENTSwid.length; i++){
	COMMENTSwid[i].removeAttribute("disable");}}, 800);
	this.setAttribute('class', 'SELECTtab CURRENTspot');
	CURRENTspot.setAttribute('class', 'SELECTtab');}
});}}

if(window.location.href.indexOf('/p/login.html') > -1){
document.body.setAttribute('login', '');
var fireBase = firebase.auth();
// var usersList = document.getElementById('usersList');
var contentHTML = document.getElementById("contentHTML");

var signedUser = '<div id="user_div" class="loggedin-div"><h3>Seja bem vindo(a)</h3><div id="usersList"><p id="user_para">Você está conectado no momento.</p></div></div>';

var ACTIVEpass = '<svg class="CROSSicon PASSit" fill="currentColor" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12,7c-2.48,0-4.5,2.02-4.5,4.5S9.52,16,12,16s4.5-2.02,4.5-4.5S14.48,7,12,7z M12,14.2c-1.49,0-2.7-1.21-2.7-2.7 c0-1.49,1.21-2.7,2.7-2.7s2.7,1.21,2.7,2.7C14.7,12.99,13.49,14.2,12,14.2z"></path><path d="M12,4C7,4,2.73,7.11,1,11.5C2.73,15.89,7,19,12,19s9.27-3.11,11-7.5C21.27,7.11,17,4,12,4z M12,17 c-3.79,0-7.17-2.13-8.82-5.5C4.83,8.13,8.21,6,12,6s7.17,2.13,8.82,5.5C19.17,14.87,15.79,17,12,17z"></path></svg>';

var OCULTApass = '<svg class="CROSSicon PASSit" fill="currentColor" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M10.58,7.25l1.56,1.56c1.38,0.07,2.47,1.17,2.54,2.54l1.56,1.56C16.4,12.47,16.5,12,16.5,11.5C16.5,9.02,14.48,7,12,7 C11.5,7,11.03,7.1,10.58,7.25z"></path><path d="M12,6c3.79,0,7.17,2.13,8.82,5.5c-0.64,1.32-1.56,2.44-2.66,3.33l1.42,1.42c1.51-1.26,2.7-2.89,3.43-4.74 C21.27,7.11,17,4,12,4c-1.4,0-2.73,0.25-3.98,0.7L9.63,6.3C10.4,6.12,11.19,6,12,6z"></path><path d="M16.43,15.93l-1.25-1.25l-1.27-1.27l-3.82-3.82L8.82,8.32L7.57,7.07L6.09,5.59L3.31,2.81L1.89,4.22l2.53,2.53 C2.92,8.02,1.73,9.64,1,11.5C2.73,15.89,7,19,12,19c1.4,0,2.73-0.25,3.98-0.7l4.3,4.3l1.41-1.41l-3.78-3.78L16.43,15.93z M11.86,14.19c-1.38-0.07-2.47-1.17-2.54-2.54L11.86,14.19z M12,17c-3.79,0-7.17-2.13-8.82-5.5c0.64-1.32,1.56-2.44,2.66-3.33 l1.91,1.91C7.6,10.53,7.5,11,7.5,11.5c0,2.48,2.02,4.5,4.5,4.5c0.5,0,0.97-0.1,1.42-0.25l0.95,0.95C13.6,16.88,12.81,17,12,17z"></path></svg>';

var loginUser = '<div class="LOGINspot"><h3>Bem vindo(a)<span>Esta é uma area privada.</span></h3><form class="FORMlogin"><div class="GROUPinput"><input type="email" id="emailInput" tabindex="1" autocomplete="off" autofocus="" autocapitalize="off" autocorrect="off"></input><label>Username or email</label></div><div class="GROUPinput"><input type="password" id="passwordInput" tabindex="2" autocomplete="off"></input><div class="SHOWpass">' +ACTIVEpass+ '</div><label>Password</label></div><button class="LOGin" tabindex="3">Fazer login</button></form></div>';


var cPANEL = document.querySelector('.cPANEL');

fireBase.onAuthStateChanged(function(user){
if(user){
	contentHTML.innerHTML = signedUser;
	user = fireBase.currentUser;

const LOGOUTbtn = '<a href="javascript:void(0);" class="LOGout cPANEL">Sair</a>';
cPANEL.parentNode.innerHTML = LOGOUTbtn;




//SAIR DA CONTA ------ FIM DO IF
document.querySelector('.LOGout').addEventListener('click', function(){
	fireBase.signOut();
	var LOGINbtn = '<a href="javascript:void(0);" class="cPANEL">Entrar</a>'
	this.parentNode.innerHTML = LOGINbtn; });}
else { contentHTML.innerHTML = loginUser;
var LOGin = document.querySelector('.LOGin');
LOGin.addEventListener('click', function(){
var userEmail = document.getElementById("emailInput").value;
var userPass = document.getElementById("passwordInput").value;

fireBase.signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
var MAILelement = document.getElementById("emailInput");
var PASSelement = document.getElementById("passwordInput");

if(MAILelement.length == 0){
var MSGfail = 'Por favor, digite um email.';
}else{
var MSGfail = 'E-mail ou senha inválidos.';	
}


var MSGerror = '<div class="MSGerror"><div class="CROSSicon"><svg aria-hidden="true" class="stUf5b qpSchb" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></div><span>' +MSGfail+ '</span></div>';

var parser = new DOMParser();
var MSGerror = parser.parseFromString(MSGerror, 'text/html');
var GROUPinput = document.querySelector('.GROUPinput');

//MSG FAILURE ------ [RESOLVIDO]
var GROUPall = document.querySelector('.GROUPinput');
if((!GROUPall.hasAttribute("fail") == true) && (document.querySelector('.MSGerror') > -1 ? true : false === true)){
GROUPinput.insertAdjacentElement("afterend", MSGerror.querySelector('.MSGerror'));}

MAILelement.addEventListener('input', function(){
$('.MSGerror').animate({ height: 0, opacity: 0 },{duration: 300, complete: function(){ $('.MSGerror').remove() }});
GROUPall.removeAttribute('fail');});

GROUPall.setAttribute('fail', '');

var errorCode = error.code;
var errorMessage = error.message;
console.log("Error: " + errorMessage)});
});

//MOSTRAR SENHA E ECULTAR SENHA ----- INPUT
var SHOWpass = document.querySelector('.SHOWpass');
SHOWpass.addEventListener('click', function(){
var PASSit = document.querySelector('.PASSit');
var TYPEbtn = document.getElementById("passwordInput").getAttribute("type");

if(TYPEbtn == "password"){
	PASSit.parentNode.innerHTML = OCULTApass;
	INPUTpass.setAttribute("type", "text");}
if(TYPEbtn == "text"){
	PASSit.parentNode.innerHTML = ACTIVEpass;
	INPUTpass.setAttribute("type", "password");}
});

//FOCUS TEXT
var INPUTmail = document.getElementById("emailInput");
var INPUTpass = document.getElementById("passwordInput");
INPUTmail.addEventListener('focusout', function(){
	if(INPUTmail.value.length >= 1){
	INPUTmail.setAttribute('class', 'HAScontent');}
else {
	INPUTmail.removeAttribute('class');}});

INPUTpass.addEventListener('focusout', function(){
	if(INPUTpass.value.length >= 1){
	INPUTpass.setAttribute('class', 'HAScontent');}
else {
	INPUTpass.removeAttribute('class');}});

var LOGINbtn = '<a href="javascript:void(0);" class="LOGout cPANEL">Sair</a>';
var parser = new DOMParser();
var HTMLpanel = parser.parseFromString(LOGINbtn, 'text/html');

var FORMlogin = document.querySelector('.FORMlogin')
FORMlogin.addEventListener('submit', (e) => {
	e.preventDefault();});

}});
}}
