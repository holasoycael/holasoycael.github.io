const auth = firebase.auth();

function signUp(){
	var email = document.getElementById("email");
	var senha = document.getElementById("password");
	
	const promise = auth.createUserWithEmailAndPassword(email.value, senha.value);
	promise.catch(e => alert(e.message));
	
	alert("Signed In")
}

function signIn(){
	var email = document.getElementById("email");
	var senha = document.getElementById("password");
	
	const promise = auth.signInWithEmailAndPassword(email.value, senha.value);
	promise.catch(e => alert(e.message));
	
	alert("Signed In")
}

function signOut(){
	auth.signOut();
	alert("Signed Out");
}
