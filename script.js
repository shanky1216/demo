const menuToggle = document.querySelector('.mobile-menu-toggle');
const navbar = document.querySelector('.home-main .top-navbar ul');
const image = [
    'url(/assets/bg-image.jpg)',
    'url(/assets/background.jpg)',
    'url(/assets/download (1).jpg)',
    'url(/assets/download.jpg'
];

let currentIndex = 0;

function changeImage(direction) {
    currentIndex += direction;

    if ( currentIndex < 0) {
        currentIndex = image.length - 1;
    } else if (currentIndex >= image.length) {
        currentIndex = 0;
    }

    document.getElementById('migration-carausal').style.backgroundImage = image[currentIndex];
}

document.getElementById('migration-carausal').style.backgroundImage = image[currentIndex];

menuToggle.addEventListener('click', function() {
    navbar.classList.toggle('show');
});

