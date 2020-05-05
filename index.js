var fireBase = firebase.auth();
var usersList = document.getElementById('usersList');
var div = document.getElementById("contentHTML");

var loginUser = '<h3>Login <span> ou <a href="#" onclick="signUp()">criar uma conta</a></span></h3><input type="email" placeholder="name@examplo.com" id="emailInput"></input><input type="password" placeholder="Senha" id="passwordInput"></input><button onclick="login()">Acessar conta</button></div>';
var signedUser = '<div id="user_div" class="loggedin-div"><h3>Seja bem vindo(a)</h3><div id="usersList"><p id="user_para">Você está conectado no momento.</p></div><button onclick="logout()">Sair</button></div>';
var signUpUser = '<h3>Criar uma conta <span>ou <a href="#" onclick="loginHome()">fazer login</a></span></h3><div id="divName"><input type="text" placeholder="Nome" id="nameInput"></input></div><div id="divSurname"><input type="text" placeholder="Sobrenome" id="lastNameInput"></input></div><div id="divAge"><input type="number" placeholder="Idade" id="ageInput"></input></div><div id="divEmail"><input type="email" placeholder="E-mail" id="emailInput"></input></div><div id="divPassword"><input type="password" placeholder="Senha" id="passwordInput"></input></div><div id="divPasswordConfirm"><input type="password" placeholder="Confirme sua senha" id="passwordConfirmInput"></input><input onclick="showPassword()" type="button" id="showPassword" value="Mostrar senha"></input></div><button onclick="sendPefil()" id="addButton">Criar uma conta</button>';

function sendPefil(){
var nameInput = document.getElementById('nameInput');
var lastNameInput = document.getElementById('lastNameInput');
var ageInput = document.getElementById('ageInput');
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');
var passwordConfirmInput = document.getElementById('passwordConfirmInput');
var eItem = emailInput.value;
var pItem = passwordInput.value;
var Result = "true";

if(eItem != ""){
fireBase.createUserWithEmailAndPassword(eItem, pItem).then(function (user) {
	var user = fireBase.currentUser;
	var userId = user.uid;
	var nItem = nameInput.value;
	var lItem = lastNameInput.value;
	var aItem = ageInput.value;
	var status = "Active";
	firebase.database().ref('default/' + userId).set({
	USERname: nItem,
	USERnami: lItem,
	USERage: aItem,
	USERstt: status});
	return Result;
},function(error){
	// Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;
	return Result = "false";
	// ...
});
	}else{
var divName = document.getElementById("divName");
var divSurname = document.getElementById("divSurname");
var divAge = document.getElementById("divAge");
var divEmail = document.getElementById("divEmail");
var divPassword = document.getElementById("divPassword");
//continuar por aqui...
	alert("Erro!");	}
} // function sendPefil();

function showPassword() {
var typeButton = document.getElementById("passwordInput").getAttribute("type");
if(typeButton == "password"){
	passwordInput.setAttribute("type", "text");
	passwordConfirmInput.setAttribute("type", "text");}
if(typeButton == "text"){
	passwordInput.setAttribute("type", "password");
	passwordConfirmInput.setAttribute("type", "password");}}

fireBase.onAuthStateChanged(function(user){
if(user){
	div.innerHTML = signedUser;
	user = fireBase.currentUser;
	if(user != null){
	var email_id = user.email;
	var user_id = user.uid;
		
let rootRef = firebase.database().ref();
let primary = rootRef.child('default');

var ajax = new XMLHttpRequest();
ajax.open('GET', primary + '/' + user_id +'.json');
ajax.responseType = 'json';
ajax.send();

ajax.addEventListener('readystatechange', function(){
	if(ajax.readyState === 4 && ajax.status === 200){
	var easyHTML = document.getElementById('user_para');
	var resposta = ajax.response;
	var USERage = resposta.USERage;
	var USERname = resposta.USERname;
	var USERnami = resposta.USERnami;

	var cPanel = '<li>' +email_id+ '</li><li>' +user_id+ '</li><li>' + USERname + ' ' + USERnami + '</li><li>' +USERage+ '</li>';

	easyHTML.innerHTML = cPanel;
}});}
}else{div.innerHTML = loginUser;}});

function login(){
var userEmail = document.getElementById("emailInput").value;
var userPass = document.getElementById("passwordInput").value;
fireBase.signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
// Handle Errors here
var errorCode = error.code;
var errorMessage = error.message;
window.alert("Error: " + errorMessage);
// ...
});}

function signUp(){ div.innerHTML = signUpUser; } //function ABRIR REGISTRO
function loginHome(){ div.innerHTML = loginUser; } //function ABRIR LOGIN 
function logout(){ fireBase.signOut(); } //function SAIR
