function COMMENTdisplay(json){
var urlNoAvatar = "data:image/svg+xml;base64,PHN2ZyBpZD0iQWdydXBhcl8xIiBkYXRhLW5hbWU9IkFncnVwYXIgMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjUwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDI1MCAyNTAiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNjNWM1YzU7CiAgICAgIH0KCiAgICAgIC5jbHMtMiwgLmNscy0zIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICB9CgogICAgICAuY2xzLTMgewogICAgICAgIGZpbGwtcnVsZTogZXZlbm9kZDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPHJlY3QgaWQ9IlJldMOibmd1bG9fMSIgZGF0YS1uYW1lPSJSZXTDom5ndWxvIDEiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjI1MCIgaGVpZ2h0PSIyNTAiLz4KICA8Y2lyY2xlIGlkPSJFbGlwc2VfMSIgZGF0YS1uYW1lPSJFbGlwc2UgMSIgY2xhc3M9ImNscy0yIiBjeD0iMTI1IiBjeT0iMTAzIiByPSI1NyIvPgogIDxwYXRoIGlkPSJGb3JtYV8xIiBkYXRhLW5hbWU9IkZvcm1hIDEiIGNsYXNzPSJjbHMtMyIgZD0iTTMxLDI1MHM0LjE1Mi03Ny4yMzIsNjktOTljMS42NjQtLjA0NCw0Ny40MDYtMC4wMDcsNTAsMCwzNy41MTEsOC4yODUsNzAuMTUxLDYxLjM3NSw2OSw5OUMyMTUuNzY5LDI0OS45MDUsMzEsMjUwLDMxLDI1MFoiLz4KPC9zdmc+Cg==";
var PIDcmmt = new Array();

for(var i = 0; i < json.feed.entry.length; i++){
	JSONit = json.feed.entry[i];
	PIDcmmt += '"' +JSONit.id.$t.split('post-')[1]+ '"';
    var ALTurl;
    var ALTdat;
    var ALTimg;
	var ALTtit;
	var ALTnam = JSONit.author[0].name.$t;

    for(var k = 0; k < JSONit.link.length; k++){
	if(JSONit.link[k].rel == 'alternate'){
ALTurl = JSONit.link[k].href;
ALTtit = JSONit.title.$t;
ALTdat = JSONit.gd$extendedProperty[1].value;
ALTimg = JSONit.author[0].gd$image.src;
break;}}

//*****************************************//

const dateTimeFormat = new Intl.DateTimeFormat('pt-BR', { weekday: 'long', day: 'numeric', month: 'numeric', year: 'numeric', hour: '2-digit', minute: 'numeric', hour12: true });
const [{ value: weekday },,{ value: day },,{ value: month },,{ value: year },,{ value: hour },,{ value: minute },,{ value: hour12 }] = dateTimeFormat.formatToParts(new Date());

var DATAhoje = `${day}/${month}/${year} ${hour}:${minute} ${hour12}`;
var DATAnew = ALTdat.split(' ')[0].split('/');
var DATAhor = ALTdat.split(' ')[1].split(':');

var SEMANAit = new Date(ALTdat);
var SEMANAfeira = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
// console.log(SEMANAfeira[SEMANAit.getDay()]);

if(DATAnew[0].length < 2){
	var ALTdat = DATAnew[1] +'/0' + DATAnew[0] +'/'+ DATAnew[2] +' '+ DATAhor[0] +':'+ DATAhor[1] +' '+ ALTdat.split(' ')[2];}
else{
	var ALTdat = DATAnew[1] +'/' + DATAnew[0] +'/'+ DATAnew[2] +' '+ DATAhor[0] +':'+ DATAhor[1] +' '+ ALTdat.split(' ')[2];}

//DATA ONTEM
var MOMENTit = new Date();
	var dd = new Date(MOMENTit.setDate(MOMENTit.getDate() + -1)).getDate(); 
	var mm = new Date(MOMENTit.setDate(MOMENTit.getDate() + -1)).getMonth() + 1;
	var yy = new Date(MOMENTit.setDate(MOMENTit.getDate() + -1)).getFullYear(); 
    if (dd < 10) { 
	dd = '0' + dd;}
	if (mm < 10) { 
	mm = '0' + mm;}
	var YESTERdd = dd + '/' + mm + '/' + yy;

//DATA TERCEIRO DIA
var THRDday = new Date();
	var dd = new Date(THRDday.setDate(THRDday.getDate() + -2)).getDate(); 
	var mm = new Date(THRDday.setDate(THRDday.getDate() + -2)).getMonth() + 1;
	var yy = new Date(THRDday.setDate(THRDday.getDate() + -2)).getFullYear(); 
    if (dd < 10) { 
	dd = '0' + dd;}
	if (mm < 10) { 
	mm = '0' + mm;}
	var THRDday = dd + '/' + mm + '/' + yy;

// DATA TERCEIRO DIA
var FOUTHday = new Date();
	var dd = new Date(FOUTHday.setDate(FOUTHday.getDate() + -3)).getDate(); 
	var mm = new Date(FOUTHday.setDate(FOUTHday.getDate() + -3)).getMonth() + 1;
	var yy = new Date(FOUTHday.setDate(FOUTHday.getDate() + -3)).getFullYear(); 
    if (dd < 10) { 
	dd = '0' + dd;}
	if (mm < 10) { 
	mm = '0' + mm;}
	var FOUTHday = dd + '/' + mm + '/' + yy;

// DATA QUARTO DIA
var FIFTHday = new Date();
	var dd = new Date(FIFTHday.setDate(FIFTHday.getDate() + -4)).getDate(); 
	var mm = new Date(FIFTHday.setDate(FIFTHday.getDate() + -4)).getMonth() + 1;
	var yy = new Date(FIFTHday.setDate(FIFTHday.getDate() + -4)).getFullYear(); 
    if (dd < 10) { 
	dd = '0' + dd;}
	if (mm < 10) { 
	mm = '0' + mm;}
	var FIFTHday = dd + '/' + mm + '/' + yy;

// DATA QUINTO DIA
var SIXTHday = new Date();
	var dd = new Date(SIXTHday.setDate(SIXTHday.getDate() + -5)).getDate(); 
	var mm = new Date(SIXTHday.setDate(SIXTHday.getDate() + -5)).getMonth() + 1;
	var yy = new Date(SIXTHday.setDate(SIXTHday.getDate() + -5)).getFullYear(); 
    if (dd < 10) { 
	dd = '0' + dd;}
	if (mm < 10) { 
	mm = '0' + mm;}
	var SIXTHday = dd + '/' + mm + '/' + yy;

// DATA SEXTO DIA
var SEVENTHday = new Date();
	var dd = new Date(SEVENTHday.setDate(SEVENTHday.getDate() + -6)).getDate(); 
	var mm = new Date(SEVENTHday.setDate(SEVENTHday.getDate() + -6)).getMonth() + 1;
	var yy = new Date(SEVENTHday.setDate(SEVENTHday.getDate() + -6)).getFullYear(); 
    if (dd < 10) { 
	dd = '0' + dd;}
	if (mm < 10) { 
	mm = '0' + mm;}
	var SEVENTHday = dd + '/' + mm + '/' + yy;

//DATA HOJE
if(DATAhoje.split(' ')[0] === ALTdat.split(' ')[0]){
	var ALTdat = 'Hoje às ' +ALTdat.split(' ')[1]+ ' ' +ALTdat.split(' ')[2];}
//DATA ONTEM
else if(YESTERdd === ALTdat.split(' ')[0]){
	var ALTdat = 'Ontem às ' + ALTdat.split(' ')[1]+ ' ' +ALTdat.split(' ')[2];}
// DATA TERCEIRO DIA
else if(THRDday === ALTdat.split(' ')[0] || FOUTHday === ALTdat.split(' ')[0] || FIFTHday === ALTdat.split(' ')[0] || SIXTHday === ALTdat.split(' ')[0] || SEVENTHday === ALTdat.split(' ')[0]){
	var ALTdat = SEMANAfeira[SEMANAit.getDay()]+ ' às ' + ALTdat.split(' ')[1]+ ' ' +ALTdat.split(' ')[2];}
else{
	var ALTdat = ALTdat.split(' ')[0] +' às '+ ALTdat.split(' ')[1]+ ' ' +ALTdat.split(' ')[2];}
// console.log(`${weekday}, ${day} de ${month} de ${year} às ${hour}:${minute} ${hour12}`)

//*****************************************//

    if (ALTimg == "https://img1.blogblog.com/img/blank.gif" != "") { ALTimg = urlNoAvatar; }

	document.write('<div class="FLEXdiv"><a href="' +ALTurl.split('?')[0]+ '"><div class="FLOATdiv"><span class="IMGthub"><img src="' +ALTimg+ '" width="42" height="42"/></span></div><div class="FLOATdiv"><section><b>' + ALTnam + '</b> fez um novo comentario: “'+ALTtit+'”;</section><section class="DATEcomment">' + ALTdat + '</section></div></a></div>');} //FIM DO LOOP

	document.querySelector('.COMMENTdiv ').children[0].insertAdjacentHTML('beforeend', '<div class="SEEmore">Mostrar tudo</div>');
	document.querySelector('.COMMENTdiv ').children[0].insertAdjacentHTML('afterbegin', '<div class="INFOcmmt">' +json.feed.entry.length+ ' comentários sendo exidos.</div>');

if(Boolean(localStorage.NOTIFYit) !== true){
	localStorage.setItem('CLOUDalt', '[' +PIDcmmt.replace(/("")/gi,'","')+ ']');}

var ITEMapi = PIDcmmt.substring(1, PIDcmmt.length-1).split('""');
var ITEMlocal = localStorage.CLOUDalt.substring(2, localStorage.CLOUDalt.length-2).replace(/(",")/gi, ',');

if(Boolean(localStorage.NOTIFYit) !== true || ITEMapi.toString() !== ITEMlocal){
	document.querySelector('.ALERToff').setAttribute('class', 'ALERTon');}

var NOTIFYit = document.querySelector('.NOTIFYit');
var CLOSEout = document.querySelector('.CLOSEout');
var SWIPEnav = document.getElementById('CONTENTframe');
NOTIFYit.addEventListener('click', function(){

if(Boolean(localStorage.NOTIFYit) !== true || ITEMapi.toString() !== ITEMlocal){
	localStorage.setItem('NOTIFYit', 'true');
	localStorage.setItem('CLOUDalt', '[' +PIDcmmt.replace(/("")/gi,'","')+ ']');
	document.querySelector('.NOTIFYit').children[0].setAttribute('class', 'ALERToff');}

	document.querySelector('.SIDEnav').classList.add('ACTIVEit');
	SWIPEnav.classList.add('SWIPEnav');
	document.body.style.cssText = "overflow:hidden";});
CLOSEout.addEventListener('click', function(){
	SWIPEnav.classList.remove('SWIPEnav');
	document.querySelector('.SIDEnav').classList.remove('ACTIVEit');
	document.body.removeAttribute('style');});
SWIPEnav.addEventListener('click', function(){
	this.classList.remove('SWIPEnav');
	document.querySelector('.SIDEnav').classList.remove('ACTIVEit');
	document.body.removeAttribute('style');});}
