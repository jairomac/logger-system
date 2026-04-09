const title = document.querySelector('h1');

const name = sessionStorage.getItem('name');

title.textContent = `Óla, ${name}!`;

