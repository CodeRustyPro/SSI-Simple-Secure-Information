    function GoogleLogin() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function() {
            window.location = "success.html";
        }).catch(function(error) {
            var errorMessage = error.message;
            alert(errorMessage);
        })
    }