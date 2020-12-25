function loginUser() {
    var email=document.getElementById("u_email").value;
    var password=document.getElementById("u_password").value;

    //firebase have pre built login function
    //it takes two parameters first email and second is password

    firebase.auth().signInWithEmailAndPassword(email,password).then(function () {
        //this function works when login successfully

        window.location="decide.html";
    }).catch(function (error) {
       //this will handle error
        var errorMessage=error.message;
        alert(errorMessage);
    });
}
function GoogleLogin() {
    //first of all create google provider object

    var provider=new firebase.auth.GoogleAuthProvider();
    //Login with popup window
    firebase.auth().signInWithPopup(provider).then(function () {
        //code executes after successful login

        window.location="home.html";
    }).catch(function (error) {
        var errorMessage=error.message;
        alert(errorMessage);
    });
}
