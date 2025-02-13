import { auth, sendPasswordResetEmail } from './firebaseauth.js';

const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signInForm = document.getElementById('signIn');
const signUpForm = document.getElementById('signup');

signUpButton.addEventListener('click', function() {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
});

signInButton.addEventListener('click', function() {
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
