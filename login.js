const auth = firebase.auth();

function signUp(){
	var email = document.getElementById("email");
	var senha = document.getElementById("password");
	
	const promise = auth.createUserWithEmailAndPassword(email.value, senha.value);
	promise.catch(e => alert(e.message));
	
	alert("Cadastro com sucesso!")
}

function signIn(){
	var email = document.getElementById("email");
	var senha = document.getElementById("password");
	
	const promise = auth.signInWithEmailAndPassword(email.value, senha.value);
	promise.catch(e => alert(e.message));
	
	alert("Login com sucesso!")
}

function signOut(){
	auth.signOut();
	alert("Saiu com sucesso!");
}
