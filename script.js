// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(14, 42, 59, 0.98)';
    } else {
        navbar.style.background = 'rgba(14, 42, 59, 0.95)';
    }
});

// Particle system for coming soon page
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = particle.style.height = Math.random() * 4 + 2 + 'px';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 20 + 20) + 's';
        container.appendChild(particle);
    }
}

// Enhanced counter animation for waiting users
const counterEl = document.getElementById('waiting-count');
if (counterEl) {
    const target = 1337;
    let current = 0;
    const increment = Math.ceil(target / 120);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        counterEl.textContent = current.toLocaleString();
    }, 50);
}

// Update counter with random variation to simulate real users
function updateWaitingCount() {
    if (counterEl) {
        const baseCount = 1337;
        const variation = Math.floor(Math.random() * 100) - 50;
        const newCount = Math.max(1287, baseCount + variation);
        counterEl.textContent = newCount.toLocaleString();
    }
}

// Update count every 45 seconds
setInterval(updateWaitingCount, 45000);

// Initialize particles on page load
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('particles')) {
        createParticles();
    }
});