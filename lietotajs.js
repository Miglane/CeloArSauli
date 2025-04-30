let vards = "hi";
console.log(vards);


function checkLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password) {
    alert('Jūs esat veiksmīgi autorizējies!');
    window.location.href = 'index.html';
  } 
  else {
    alert('Lūdzu aizpildiet visus laukus!');
  }
}