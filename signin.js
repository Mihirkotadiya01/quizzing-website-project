import app from "./firebase.js"
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
const auth = getAuth(app);
onAuthStateChanged(auth, (user) => {
    if (user) {
        location.replace('index.html');
    } else {

    }
});
signin.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('email1').value;
    const password = document.getElementById('pass1').value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert('user signed in');
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage);
            // ..
        });

});
