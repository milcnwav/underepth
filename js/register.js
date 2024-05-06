import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAS7vqBTwptXgVIqjL7Y8L2RDA-svvtB1A",
    authDomain: "underepth1.firebaseapp.com",
    databaseURL: "https://underepth1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "underepth1",
    storageBucket: "underepth1.appspot.com",
    messagingSenderId: "368937353141",
    appId: "1:368937353141:web:f8a4305f5fb0d17c8023fc",
    measurementId: "G-ZQ224BCB9X"
};
const firebaseApp = initializeApp(firebaseConfig);

// Firebase Authentication
const auth = getAuth(firebaseApp);

// Register Function
function register() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Registered and logged in as', user.email);
            // Redirect to the login page after successful registration
            window.location.href = './login.html'; // Replace 'login.html' with the filename of your login page
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Registration error:', errorMessage);
            // Handle registration error if needed
        });
}

// Attach Event Listeners after DOM is Loaded
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('register-btn').addEventListener('click', register);
});
