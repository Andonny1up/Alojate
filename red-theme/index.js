let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click',toogleMenu);

function toogleMenu(event) {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}