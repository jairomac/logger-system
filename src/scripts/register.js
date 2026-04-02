const name = document.querySelector('#name-register');
const username = document.querySelector('#username-register');
const password = document.querySelector('#password-register');
const button = document.querySelector ('#button-register');

button.addEventListener('click', event =>{
    event.preventDefault();

    const name_value = name.value;
    const username_value = username.value;
    const password_value = password.value;

    if (
        name_value === '' ||
        username_value === '' ||
        password_value === ''
    ) {
     alert ('Preecha todos os campos.');
     return;
    };

    sessionStorage.setItem('name', name_value);
    sessionStorage.setItem('username', username_value);
    sessionStorage.setItem('password', password_value);

    alert('Cadastro reliazdo com sucesso.');
    window.location.href = './login.html';

});
