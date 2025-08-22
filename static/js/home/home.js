document.addEventListener('DOMContentLoaded', function() {
    // Simple image slider for featured products
    const initProductSlider = function() {
        const productCards = document.querySelectorAll('.product-card');
        if (productCards.length > 0) {
            let currentIndex = 0;
            
            // Only run if we're on mobile view
            if (window.innerWidth < 768) {
                // Hide all products initially
                productCards.forEach(card => {
                    card.style.display = 'none';
                });
                
                // Show first product
                if (productCards[0]) {
                    productCards[0].style.display = 'block';
                }
                
                // Set up auto-rotation
                setInterval(() => {
                    productCards[currentIndex].style.display = 'none';
                    currentIndex = (currentIndex + 1) % productCards.length;
                    productCards[currentIndex].style.display = 'block';
                }, 3000);
            }
        }
    };
    
    // Initialize product slider on mobile
    initProductSlider();
    
    // Reinitialize on window resize
    window.addEventListener('resize', initProductSlider);
    
    // Testimonial rotation
    const initTestimonialRotation = function() {
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        if (testimonialCards.length > 0 && window.innerWidth < 768) {
            let currentTestimonial = 0;
            
            // Hide all testimonials initially
            testimonialCards.forEach(card => {
                card.style.display = 'none';
            });
            
            // Show first testimonial
            if (testimonialCards[0]) {
                testimonialCards[0].style.display = 'block';
            }
            
            // Set up auto-rotation
            setInterval(() => {
                testimonialCards[currentTestimonial].style.display = 'none';
                currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
                testimonialCards[currentTestimonial].style.display = 'block';
            }, 4000);
        } else {
            // Make sure all testimonials are visible on desktop
            testimonialCards.forEach(card => {
                card.style.display = 'block';
            });
        }
    };
    
    // Initialize testimonial rotation
    initTestimonialRotation();
    
    // Reinitialize on window resize
    window.addEventListener('resize', initTestimonialRotation);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    const spans = document.querySelectorAll('.mobile-menu-button span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            }
        });
    });
    
    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .service-card, .product-card, .testimonial-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    document.querySelectorAll('.feature-card, .service-card, .product-card, .testimonial-card').forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Google Maps placeholder interaction
    const mapPlaceholder = document.querySelector('.map-placeholder');
    if (mapPlaceholder) {
        mapPlaceholder.addEventListener('click', function() {
            showToast('Map would open in a new window with directions to our store', 'info');
        });
    }
    
    // Quick contact form in the hero section (if added later)
    const setupQuickContact = function() {
        const quickContactBtn = document.querySelector('.quick-contact-btn');
        if (quickContactBtn) {
            quickContactBtn.addEventListener('click', function() {
                // This would open a modal or scroll to contact form
                document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
            });
        }
    };
    
    setupQuickContact();
});