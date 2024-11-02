const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});
