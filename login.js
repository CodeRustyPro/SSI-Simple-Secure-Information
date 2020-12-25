(function() {
    var firebaseConfig = {
        apiKey: "AIzaSyAsq2FT_7zQ4iyY5evm_5Tu28KzbrQvG_I",
        authDomain: "test-1-5626c.firebaseapp.com",
        projectId: "test-1-5626c",
        storageBucket: "test-1-5626c.appspot.com",
        messagingSenderId: "25172260807",
        appId: "1:25172260807:web:5713c73dfbbba482e60be2",
        measurementId: "G-8GTWJEXNVM"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var u_email = document.getElementById("u_email");
    var u_password = document.getElementById("u_password");
    var btnLogin = document.getElementById("loginbtn");
    var btnSignUp = document.getElementById("signupbtn");
    var btnLogout = document.getElementById("signoutbtn");
    

    btnLogin.addEventListener('click', e => {
        const email = u_email.value;
        const pass = u_password.value;
        const auth = firebase.auth();

        var elems = document.getElementsByClassName('fa-check');
        for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display = 'block';
        }
        
        // const promise = auth.signInWithEmailAndPassword(email, pass);
        // promise.catch(e => console.log(e.message));
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(function() {
                // Existing and future Auth states are now persisted in the current
                // session only. Closing the window would clear any existing state even
                // if a user forgets to sign out.
                // ...
                // New sign-in will be persisted with session persistence.

                return firebase.auth().signInWithEmailAndPassword(email, pass);

            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                alert("Username or Password is invalid")
            });
    });

    btnSignUp.addEventListener('click', e => {
        const email = u_email.value;
        const pass = u_password.value;
        const auth = firebase.auth();
        var elems = document.getElementsByClassName('fa-check');
        for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display = 'block';
        }
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            window.location = 'decide.html'
        } else {
            console.log('Not Logged In');
        }
    })

}());
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    let scrollPos = window.scrollY;
    // console.log(scrollPos);

    // adds 'highlight' class to my menu items
    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }

    if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);