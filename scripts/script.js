let menu = document.getElementById("menu")
let nav = document.querySelector('.header2 nav ul');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
}