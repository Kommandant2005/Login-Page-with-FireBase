import { auth, sendPasswordResetEmail } from './firebaseauth.js';

console.log("Script loaded"); // Debugging statement

const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signInForm = document.getElementById('signIn');
const signUpForm = document.getElementById('signup');

console.log("Buttons and forms:", signUpButton, signInButton, signInForm, signUpForm); // Debugging statement

signUpButton.addEventListener('click', function() {
    console.log("Sign Up button clicked"); // Debugging statement
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
});

signInButton.addEventListener('click', function() {
    console.log("Sign In button clicked"); // Debugging statement
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
});

document.getElementById('recoverPassword').addEventListener('click', function(event) {
  event.preventDefault();

  const email = prompt("Enter your email address:");
  const message = document.getElementById('signInMessage');

  if (email) {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        message.textContent = 'Password reset email sent! Check your inbox.';
        message.style.color = 'green';
        message.style.display = 'block';
      })
      .catch((error) => {
        message.textContent = `Error: ${error.message}`;
        message.style.color = 'red';
        message.style.display = 'block';
      });
  } else {
    message.textContent = 'Please enter your email address.';
    message.style.color = 'red';
    message.style.display = 'block';
  }
});
