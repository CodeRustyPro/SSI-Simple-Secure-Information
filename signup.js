function createUser() {
    var email = document.getElementById("userEmail").value;
    var password = document.getElementById("userPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    console.log(password);
    console.log(confirmPassword);
    //validate that both passwords are same
    if (password == confirmPassword) {
        //Here we will write create Account code
        //firebase has its own built in create account method
        //lets start
        //it takes two param first one email and second is password
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
            function() {
                //this function executes when account is successfully created
                window.location = "login.html";

            }).catch(function(error) {
            //this function handles errors
            var errorMessage = error.message;
            alert(errorMessage);
        });

    } else {
        //alert when password did not matches
        alert("password does not matches");

    }

}

// function storeUser(){
//     var name, password;

// function Ready() {
//     name = document.getElementById('userName').value;
//     password = document.getElementById('userPassword').value;
// }
// document.getElementById('insert').onclick = function() {
//     Ready();
//     firebase.database().ref('users/' + name).set({
//         Name: name,
//         Password: password
//     })
// }
// }

