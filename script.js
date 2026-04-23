// Initialize AOS Animation
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const mobileBtnIcon = document.querySelector('.mobile-menu-btn i');

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Toggle Icon
    if (navLinks.classList.contains('active')) {
        mobileBtnIcon.classList.remove('fa-bars');
        mobileBtnIcon.classList.add('fa-xmark');
    } else {
        mobileBtnIcon.classList.remove('fa-xmark');
        mobileBtnIcon.classList.add('fa-bars');
    }
});

// Close mobile menu when a link is clicked
const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileBtnIcon.classList.remove('fa-xmark');
        mobileBtnIcon.classList.add('fa-bars');
    });
});

// FAQ Accordion
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    
    header.addEventListener('click', () => {
        // Close other open items
        accordionItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});
