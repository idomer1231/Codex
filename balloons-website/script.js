document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    this.reset();
});

document.getElementById('cta').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
});
