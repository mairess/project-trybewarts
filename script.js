const submit = document.getElementById('submitBtn');

const submitAlert = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (email === 'tryber@teste.com' && password === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
};

window.onload = () => {
  submit.addEventListener('click', submitAlert);
};
