const menuToggle = document.querySelector('.mobile-menu-toggle');
const navbar = document.querySelector('.home-main .top-navbar ul');
const images = [
    'url(assets/bg-image.jpg)',
    'url(assets/background.jpg)',
    'url(assets/download(1).jpg)',
    'url(assets/download.jpg)'
];

let currentIndex = 0;
const migrationCarausal = document.getElementById('migration-carausal');

// Function to change background image
function changeImage(direction = 1) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    migrationCarausal.style.backgroundImage = images[currentIndex];
}

// Initialize background image
if (migrationCarausal) {
    migrationCarausal.style.backgroundImage = images[currentIndex];
    setInterval(() => changeImage(1), 3000); // Auto-change every 3 seconds
}


menuToggle.addEventListener('click', function() {
    navbar.classList.toggle('show');
});


function toggleAccordion(element) {
    element.parentElement.classList.toggle("active");
}
