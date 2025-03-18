import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, 
         signInWithEmailAndPassword, createUserWithEmailAndPassword, 
         signOut, sendPasswordResetEmail } 
from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDi-NT8_d6-_JHmXGw6LhV5sAN31moO1dk",
    authDomain: "mykhorenko25.firebaseapp.com",
    projectId: "mykhorenko25",
    storageBucket: "mykhorenko25.appspot.com",
    messagingSenderId: "131182195839",
    appId: "1:131182195839:web:1d8716ebabec54571d7b4a",
    measurementId: "G-DG7XK5TZ5C"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

document.getElementById("google-login")?.addEventListener("click", () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then(() => window.location.href = "dashboard.html")
        .catch(error => alert(error.message));
});

document.getElementById("signup")?.addEventListener("click", () => {
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => window.location.href = "anmeldung.html")
        .catch(error => alert(error.message));
});

document.getElementById("login")?.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, password)
        .then(() => window.location.href = "dashboard.html")
        .catch(error => alert(error.message));
});

document.getElementById("logout")?.addEventListener("click", () => {
    signOut(auth).then(() => window.location.href = "anmeldung.html");
});

document.getElementById("forgot-password")?.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    if (email) {
        sendPasswordResetEmail(auth, email)
            .then(() => alert("Passwort-Reset-E-Mail gesendet."))
            .catch(error => alert(error.message));
    } else {
        alert("Bitte E-Mail eingeben!");
    }
});
