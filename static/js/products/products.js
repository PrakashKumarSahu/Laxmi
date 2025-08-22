document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    const productSearch = document.getElementById('product-search');
    const sortSelect = document.getElementById('sort-products');
    const enquiryButtons = document.querySelectorAll('.btn-enquire');
    const enquiryModal = document.getElementById('enquiry-modal');
    const closeModal = document.querySelector('.close-modal');
    const enquiryForm = document.getElementById('enquiry-form');
    const enquiryProductName = document.getElementById('enquiry-product-name');
    
    // Filter products
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            const filter = this.getAttribute('data-filter');
            
            productCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else {
                    const categories = card.getAttribute('data-category').split(' ');
                    if (categories.includes(filter)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
    
    // Search products
    productSearch.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        productCards.forEach(card => {
            const productName = card.querySelector('h3').textContent.toLowerCase();
            const productDesc = card.querySelector('.product-desc').textContent.toLowerCase();
            const productCategory = card.querySelector('.product-category').textContent.toLowerCase();
            
            if (productName.includes(searchTerm) || 
                productDesc.includes(searchTerm) || 
                productCategory.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
    
    // Sort products
    sortSelect.addEventListener('change', function() {
        const sortValue = this.value;
        const productsContainer = document.getElementById('products-container');
        const products = Array.from(productCards);
        
        products.sort((a, b) => {
            if (sortValue === 'name') {
                return a.querySelector('h3').textContent.localeCompare(b.querySelector('h3').textContent);
            } else if (sortValue === 'price-low') {
                return parseFloat(a.getAttribute('data-price')) - parseFloat(b.getAttribute('data-price'));
            } else if (sortValue === 'price-high') {
                return parseFloat(b.getAttribute('data-price')) - parseFloat(a.getAttribute('data-price'));
            }
            return 0;
        });
        
        // Clear container and append sorted products
        productsContainer.innerHTML = '';
        products.forEach(product => {
            productsContainer.appendChild(product);
        });
    });
    
    // Enquiry modal
    enquiryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-product');
            enquiryProductName.textContent = productName;
            enquiryModal.style.display = 'block';
        });
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        enquiryModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === enquiryModal) {
            enquiryModal.style.display = 'none';
        }
    });
    
    // Enquiry form submission
    enquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('enquiry-name').value;
        const phone = document.getElementById('enquiry-phone').value;
        const message = document.getElementById('enquiry-message').value;
        const quantity = document.getElementById('enquiry-quantity').value;
        const product = enquiryProductName.textContent;
        
        // In a real application, you would send this data to your server
        console.log('Enquiry submitted:', {
            name,
            phone,
            message,
            quantity,
            product
        });
        
        // Show success message
        showToast('Your enquiry has been submitted successfully! We will contact you soon.', 'success');
        
        // Close modal and reset form
        enquiryModal.style.display = 'none';
        this.reset();
    });
    
    // Pagination
    const paginationButtons = document.querySelectorAll('.pagination-btn');
    paginationButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('active') || this.classList.contains('next')) return;
            
            paginationButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // In a real application, you would fetch the next page of products
            showToast(`Loading page ${this.textContent}...`, 'info');
        });
    });
    
    // Animation for product cards
    const animateProductCards = function() {
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach((card, index) => {
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
    animateProductCards();
    
    // Re-animate when filters change
    filterButtons.forEach(button => {
        button.addEventListener('click', animateProductCards);
    });
    
    // Re-animate when sorting changes
    sortSelect.addEventListener('change', animateProductCards);
    
    // Wholesale section interaction
    const wholesaleBtn = document.querySelector('.wholesale-content .btn');
    if (wholesaleBtn) {
        wholesaleBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('.filter-btn[data-filter="wholesale"]').click();
            window.scrollTo({
                top: document.querySelector('.product-filters').offsetTop - 80,
                behavior: 'smooth'
            });
        });
    }
});