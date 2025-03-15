const menuToggle = document.querySelector('.mobile-menu-toggle');
const navbar = document.querySelector('.home-main .top-navbar ul');

menuToggle.addEventListener('click', function() {
    navbar.classList.toggle('show');
});
