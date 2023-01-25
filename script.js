// Toggle class active

const navbarnav = document.querySelector('.navbar-nav');

// Ketika hamburger menu di klik

document.querySelector('#hamburger-menu').onclick = () => {
    navbarnav.classList.toggle('active');
};


// KLik diluar sidebar untuk menghilangkan nav

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active');
    }
});