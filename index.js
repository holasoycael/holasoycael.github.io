const auth = firebase.auth();
var div = document.getElementById("contentHTML");

var loginUser = '<div id="login_div" class="main-div"><h3>Login</h3><label>E-mail</label><input type="email" placeholder="name@examplo.com" id="email_field"></input><label>Senha</label><input type="password" placeholder="Senha" id="password_field"></input><button onclick="login()">Login to Account</button></div>';

var signedUser = '<div id="user_div" class="loggedin-div"><h3>Welcome User</h3><p id="user_para">Welcome to Firebase web login Example. You are currently logged in.</p><button onclick="logout()">Logout</button></div>';

auth.onAuthStateChanged(function(user) {
  if(user){
    // logado

	div.innerHTML = signedUser;

    var user = auth.currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else{
    // inicial

	div.innerHTML = loginUser;

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  auth.signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  auth.signOut();
}
