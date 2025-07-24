// Enhanced portfolio functionality
document.addEventListener('DOMContentLoaded', function() {
    // Typing animation for name
    const nameElement = document.querySelector('.name');
    const originalText = nameElement.textContent;
    
    function typeWriter(element, text, speed = 100) {
        element.textContent = '';
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }
    
    // Start typing animation after page load
    setTimeout(() => typeWriter(nameElement, originalText, 80), 500);
    
    // Skill progress animation
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Contact form validation (if form exists)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
        });
    }
    
    // Add loading state management
    window.addEventListener('load', function() {
        document.body.classList.remove('loading');
    });
    
    // Lazy loading for images
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('loading');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});