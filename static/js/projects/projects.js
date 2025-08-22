document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const filterButtons = document.querySelectorAll('.components-filter .filter-btn');
    const componentCards = document.querySelectorAll('.component-card');
    const categoryCards = document.querySelectorAll('.category-card');
    const enquiryButtons = document.querySelectorAll('.btn-enquire');
    const projectForm = document.getElementById('project-form');
    
    // Filter components
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter components
            const filter = this.getAttribute('data-filter');
            
            componentCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else {
                    const category = card.getAttribute('data-category');
                    if (category === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
            
            // Animate components
            animateComponents();
        });
    });
    
    // Category cards filtering
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active filter button
            filterButtons.forEach(btn => {
                if (btn.getAttribute('data-filter') === category) {
                    btn.classList.add('active');
                } else if (btn.getAttribute('data-filter') !== 'all') {
                    btn.classList.remove('active');
                }
            });
            
            // Filter components
            componentCards.forEach(compCard => {
                const compCategory = compCard.getAttribute('data-category');
                if (category === 'all' || compCategory === category) {
                    compCard.style.display = 'block';
                } else {
                    compCard.style.display = 'none';
                }
            });
            
            // Scroll to components section
            document.querySelector('.components-section').scrollIntoView({
                behavior: 'smooth'
            });
            
            // Animate components
            animateComponents();
        });
    });
    
    // Enquiry buttons
    enquiryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-product');
            showToast(`Enquiry about ${productName} would be sent. In a real application, this would open a form.`, 'info');
        });
    });
    
    // Project form submission
    projectForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('project-name').value;
        const phone = document.getElementById('project-phone').value;
        const email = document.getElementById('project-email').value;
        const college = document.getElementById('project-college').value;
        const projectType = document.getElementById('project-type').value;
        const description = document.getElementById('project-desc').value;
        const deadline = document.getElementById('project-deadline').value;
        
        // In a real application, you would send this data to your server
        console.log('Project request submitted:', {
            name,
            phone,
            email,
            college,
            projectType,
            description,
            deadline
        });
        
        // Show success message
        showToast('Your project assistance request has been submitted! We will contact you soon.', 'success');
        
        // Reset form
        this.reset();
    });
    
    // Animation for components
    const animateComponents = function() {
        const visibleComponents = document.querySelectorAll('.component-card[style="display: block"]');
        
        visibleComponents.forEach((card, index) => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                card.style.opacity = 1;
                card.style.transform = 'translateY(0)';
            }, 100 + (index * 100));
        });
    };
    
    // Initialize animations
    animateComponents();
    
    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const answer = item.querySelector('p');
        answer.style.display = 'none';
        
        item.addEventListener('click', function() {
            const isVisible = answer.style.display === 'block';
            
            // Close all answers
            faqItems.forEach(faq => {
                faq.querySelector('p').style.display = 'none';
            });
            
            // Open clicked answer if it was closed
            if (!isVisible) {
                answer.style.display = 'block';
            }
        });
    });
    
    // Smooth scrolling for project request link
    const requestHelpBtn = document.querySelector('.guidance-text .btn');
    if (requestHelpBtn) {
        requestHelpBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('project-request').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Component search functionality (could be added later)
    const setupSearch = function() {
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search components...';
        searchInput.style.padding = '0.5rem';
        searchInput.style.border = '1px solid #d1d5db';
        searchInput.style.borderRadius = '4px';
        searchInput.style.marginLeft = '1rem';
        
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            componentCards.forEach(card => {
                const productName = card.querySelector('h3').textContent.toLowerCase();
                const productDesc = card.querySelector('.component-desc').textContent.toLowerCase();
                
                if (productName.includes(searchTerm) || productDesc.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
            
            animateComponents();
        });
        
        // Add search to section header if needed
        // document.querySelector('.section-header').appendChild(searchInput);
    };
    
    // Setup search (commented out but available for future use)
    // setupSearch();
});