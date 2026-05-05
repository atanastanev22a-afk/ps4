// Custom cursor
const cursor = document.querySelector('.cursor');
const hoverElements = document.querySelectorAll('a, button, .hover-link, .car-nav-btn, .burger-menu, .menu-link, .lang-toggle');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
});

// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 1000);
    }, 1500);
});

// Reveal animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-text, .fade-up').forEach(el => {
    observer.observe(el);
});

// Car image toggle functionality
const carImage = document.getElementById('carImage');
const carImages = ['car1.png', 'car2.png', 'car3.png'];
let currentCarIndex = 0;

document.querySelectorAll('.car-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentCarIndex = (currentCarIndex + 1) % carImages.length;
        carImage.src = carImages[currentCarIndex];
    });
});

// Burger menu toggle
const burgerMenu = document.querySelector('.burger-menu');
const slideMenu = document.querySelector('.slide-menu');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    slideMenu.classList.toggle('active');
});

// Language toggle
const langToggle = document.querySelector('.lang-toggle');
let currentLang = 'en';

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'bg' : 'en';
    langToggle.textContent = currentLang === 'en' ? 'BG' : 'EN';
    
    document.documentElement.setAttribute('lang', currentLang);
    document.body.classList.toggle('bg-active', currentLang === 'bg');
    
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLang}`);
    });
});
