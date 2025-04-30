function sudziba() {
  const vards = document.getElementById('vards').value;
  const complain = document.getElementById('complain').value;

  if (vards && complain) {
    alert('Sūdzība ir veiksmīgi nosūtīta!');
    window.location.href = 'index.html';
  } 
  else {
    alert('Lūdzu aizpildiet visus laukus!');
  }
}