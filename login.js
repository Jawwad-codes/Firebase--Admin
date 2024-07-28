import { signInWithEmailAndPassword ,  sendPasswordResetEmail,} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import { auth } from './firebaseConfiq.js';
const form = document.getElementById('form');
const Email = document.getElementById('Email');
const Password = document.getElementById('Password');
const forgotPassword = document.querySelector("#forgot-password");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, Email.value, Password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        window.location = "home.html";
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  });
  forgotPassword.addEventListener("click", () => {
    const resetEmail = prompt("enter email");
    sendPasswordResetEmail(auth, resetEmail)
      .then(() => {
        alert("Email sent successfully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  });
  