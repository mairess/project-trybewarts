function submitAlert() {
  window.alert('Olá Tryber!');
}

window.onload = () => {
  const submit = document.getElementById('submitBtn');
  submit.addEventListener('click', submitAlert);
};
