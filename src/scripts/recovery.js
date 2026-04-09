const username = document.querySelector('#username-recovery');
const new_password = document.querySelector('#new-password-recovery');
const confirm_new_password = document.querySelector('#confirm-new-password-recovery');
const button = document.querySelector('#button-recovery');

button.addEventListener('click', (event) => {
    event.preventDefault();

    const usernameValue = username.value;
    const newPasswordValue = new_password.value;
    const confirmNewPasswordValue = confirm_new_password.value;

    const usernameSession = sessionStorage.getItem('username');

    if (
        usernameValue === '' ||
        newPasswordValue === '' ||
        confirmNewPasswordValue === ''
    ) {
        alert('Preencha todos os campos.');
        return;
    };

    if (usernameValue !== usernameSession) {
        alert ('Usuario não encontrado.');
        return;
    };

    if (newPasswordValue !== confirmNewPasswordValue) {
        alert('Senha não compatível.');
        return;
    };
    sessionStorage.setItem('password', newPasswordValue);
    alert('Senha recuperada com sucesso.');

    window.location.href = './login.html';
});

const checkbox = document.querySelector('#checkbox-recovery');

checkbox.addEventListener('change', () => {
    const type = new_password.getAttribute('type');

    if (type === 'password') {
        new_password.setAttribute('type', 'text');
        confirm_new_password.setAttribute('type', 'text');
        return;
    };

    new_password.setAttribute('type', 'password');
    confirm_new_password.setAttribute('type', 'password');

    
});