const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})


// script.js
import { auth, sendPasswordResetEmail } from './firebase.js';

document.getElementById('recover-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const message = document.getElementById('message');

  sendPasswordResetEmail(auth, email)
    .then(() => {
      message.textContent = 'Password reset email sent! Check your inbox.';
      message.style.color = 'green';
    })
    .catch((error) => {
      message.textContent = `Error: ${error.message}`;
      message.style.color = 'red';
    });
});
