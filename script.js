const submitBtnHeader = document.getElementById('submitBtnHeader');
const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

function verifyCheckbox() {
  submitBtn.disabled = !agreement.checked;
}

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
  submitBtn.disabled = true;
  submitBtnHeader.addEventListener('click', submitAlert);
  agreement.addEventListener('change', verifyCheckbox);
};
