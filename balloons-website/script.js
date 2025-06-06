document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    this.reset();
});

document.getElementById('cta').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('subscribe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for subscribing!');
    this.reset();
});

const backToTop = document.getElementById('back-to-top');
backToTop.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// Intersection Observer to fade in sections
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
});
document.querySelectorAll('section').forEach(sec => observer.observe(sec));

// Mobile navigation toggle
document.getElementById('nav-toggle').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('open');
});

// Simple testimonial slider
const slides = document.querySelectorAll('.testimonial-slide');
let currentSlide = 0;
setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}, 4000);
