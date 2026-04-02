
const username = document.querySelector('#username-login');
const password = document.querySelector('#password-login');
const button = document.querySelector('#button-login');

button.addEventListener('click', event => {
    event.preventDefault();


    const username_value = username.value;
    const password_value = password.value;

    if (
        username_value === '' ||
        password_value === ''
    ) {
        alert('Preecha todos os campos.');
        return;
    };

    if (
        username_value !== sessionStorage.getItem('username') ||
        password_value !== sessionStorage.getItem('password')
        ) {
            alert('Nome de usuário e/ou senha incorretos.');
            return;
        };

alert('Acesso permitido.');
});