let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

document.getElementById('contact-btn').onclick = function (event) {
    event.preventDefault(); // Prevent default button behavior
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth' // Smooth scroll effect
    });
};