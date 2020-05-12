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
_SPOTtre.style.display = "block";}});}
