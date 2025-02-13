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

document.getElementById('recoverPassword').addEventListener('click', function(event) {
  event.preventDefault();

  const email = prompt("Enter your email address:");
  const message = document.getElementById('signInMessage');

  if (users[email]) {
    message.textContent = `Your password is: ${users[email]}`;
    message.style.color = 'green';
    message.style.display = 'block';
  } else {
    message.textContent = 'Email not found.';
    message.style.color = 'red';
    message.style.display = 'block';
  }
});
