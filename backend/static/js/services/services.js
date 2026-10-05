document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const serviceDetailButtons = document.querySelectorAll('.btn-service-details');
    const serviceModal = document.getElementById('service-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalServiceTitle = document.getElementById('modal-service-title');
    const modalServiceContent = document.getElementById('modal-service-content');
    const repairForm = document.getElementById('repair-form');
    
    // Service details data
    const serviceDetails = {
        'TV Repair': {
            description: 'Professional repair services for all brands of LED, LCD, and Smart TVs.',
            details: `
                <p>We specialize in repairing all types of televisions with expert technicians who have years of experience.</p>
                <h4>Common Issues We Fix:</h4>
                <ul>
                    <li>No power issues</li>
                    <li>Screen problems (lines, discoloration, backlight issues)</li>
                    <li>Sound problems</li>
                    <li>HDMI/input port issues</li>
                    <li>Remote control problems</li>
                    <li>Software/firmware issues</li>
                </ul>
                <h4>Our Process:</h4>
                <p>We thoroughly diagnose the issue, provide a transparent quote, use quality parts, and test the TV thoroughly before returning it to you.</p>
                <p><strong>Typical Repair Time:</strong> 1-3 days</p>
                <p><strong>Warranty:</strong> 30 days on service</p>
            `,
            price: 'Starting from ₹500'
        },
        'Mixer Repair': {
            description: 'Comprehensive repair services for mixer grinders and food processors.',
            details: `
                <p>We repair all types of mixer grinders from all brands with genuine parts when available.</p>
                <h4>Common Issues We Fix:</h4>
                <ul>
                    <li>Motor not running</li>
                    <li>Overheating issues</li>
                    <li>Speed control problems</li>
                    <li>Jar leakage</li>
                    <li>Switch replacement</li>
                    <li>Noise issues</li>
                </ul>
                <h4>Our Process:</h4>
                <p>We disassemble, clean, and inspect all components before repairing or replacing faulty parts.</p>
                <p><strong>Typical Repair Time:</strong> 1-2 days</p>
                <p><strong>Warranty:</strong> 30 days on service</p>
            `,
            price: 'Starting from ₹200'
        },
        'Fan Repair': {
            description: 'Expert repair services for ceiling, table, and exhaust fans.',
            details: `
                <p>We repair all types of fans with quality components and expert workmanship.</p>
                <h4>Common Issues We Fix:</h4>
                <ul>
                    <li>Fan not running</li>
                    <li>Speed control issues</li>
                    <li>Noisy operation</li>
                    <li>Wobbling/unbalanced blades</li>
                    <li>Capacitor replacement</li>
                    <li>Motor winding</li>
                </ul>
                <h4>Our Process:</h4>
                <p>We diagnose the electrical and mechanical components to identify the root cause of the problem.</p>
                <p><strong>Typical Repair Time:</strong> 1-2 days</p>
                <p><strong>Warranty:</strong> 30 days on service</p>
            `,
            price: 'Starting from ₹150'
        },
        'Iron Repair': {
            description: 'Repair services for all types of electric irons.',
            details: `
                <p>We repair electric irons of all brands with quality heating elements and thermostats.</p>
                <h4>Common Issues We Fix:</h4>
                <ul>
                    <li>Not heating</li>
                    <li>Overheating</li>
                    <li>Temperature control issues</li>
                    <li>Water leakage (steam irons)</li>
                    <li>Cord replacement</li>
                    <li>Indicator light issues</li>
                </ul>
                <h4>Our Process:</h4>
                <p>We test all electrical components and replace faulty parts with reliable replacements.</p>
                <p><strong>Typical Repair Time:</strong> Same day or next day</p>
                <p><strong>Warranty:</strong> 30 days on service</p>
            `,
            price: 'Starting from ₹100'
        },
        'Cooler Repair': {
            description: 'Comprehensive repair for desert and personal air coolers.',
            details: `
                <p>We repair all types of air coolers with special attention to water systems and motors.</p>
                <h4>Common Issues We Fix:</h4>
                <ul>
                    <li>Water pump issues</li>
                    <li>Motor problems</li>
                    <li>Cooling pad replacement</li>
                    <li>Water leakage</li>
                    <li>Control panel issues</li>
                    <li>Airflow problems</li>
                </ul>
                <h4>Our Process:</h4>
                <p>We thoroughly clean and service the cooler while repairing the specific issue.</p>
                <p><strong>Typical Repair Time:</strong> 2-3 days</p>
                <p><strong>Warranty:</strong> 30 days on service</p>
            `,
            price: 'Starting from ₹300'
        },
        'Induction Repair': {
            description: 'Expert repair for induction cooktops of all brands.',
            details: `
                <p>We specialize in repairing induction cooktops with quality components.</p>
                <h4>Common Issues We Fix:</h4>
                <ul>
                    <li>Not heating</li>
                    <li>Error codes</li>
                    <li>Display issues</li>
                    <li>IGBT replacement</li>
                    <li>Power supply problems</li>
                    <li>Button/control issues</li>
                </ul>
                <h4>Our Process:</h4>
                <p>We use specialized equipment to diagnose and repair induction cooktop issues.</p>
                <p><strong>Typical Repair Time:</strong> 2-3 days</p>
                <p><strong>Warranty:</strong> 30 days on service</p>
            `,
            price: 'Starting from ₹250'
        },
        'Power Supply Repair': {
            description: 'Repair for SMPS, adapters, and power banks.',
            details: `
                <p>We repair all types of power supplies and charging devices.</p>
                <h4>Common Issues We Fix:</h4>
                <ul>
                    <li>No output voltage</li>
                    <li>Intermittent power</li>
                    <li>Overheating</li>
                    <li>Component replacement</li>
                    <li>Battery issues (power banks)</li>
                    <li>Connector problems</li>
                </ul>
                <h4>Our Process:</h4>
                <p>We test all components and replace faulty parts with appropriate specifications.</p>
                <p><strong>Typical Repair Time:</strong> 1-2 days</p>
                <p><strong>Warranty:</strong> 30 days on service</p>
            `,
            price: 'Starting from ₹150'
        },
        'General Electronics Repair': {
            description: 'Repair for various electronic devices and gadgets.',
            details: `
                <p>We repair a wide range of electronic devices with expert technical skills.</p>
                <h4>Common Devices We Repair:</h4>
                <ul>
                    <li>Remote controls</li>
                    <li>Audio equipment</li>
                    <li>Charging devices</li>
                    <li>Small appliances</li>
                    <li>Electronic toys</li>
                    <li>Various gadgets</li>
                </ul>
                <h4>Our Process:</h4>
                <p>We diagnose the issue and provide a repair solution if feasible and cost-effective.</p>
                <p><strong>Typical Repair Time:</strong> 1-3 days</p>
                <p><strong>Warranty:</strong> 30 days on service</p>
            `,
            price: 'Starting from ₹100'
        }
    };
    
    // Service detail buttons
    serviceDetailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceName = this.getAttribute('data-service');
            const serviceData = serviceDetails[serviceName];
            
            if (serviceData) {
                modalServiceTitle.textContent = serviceName;
                modalServiceContent.innerHTML = `
                    <p><strong>${serviceData.description}</strong></p>
                    <p><strong>Price: ${serviceData.price}</strong></p>
                    ${serviceData.details}
                    <div style="margin-top: 1.5rem;">
                        <button class="btn btn-primary" id="modal-book-btn">Book This Service</button>
                    </div>
                `;
                
                serviceModal.style.display = 'block';
                
                // Add event listener to the modal book button
                document.getElementById('modal-book-btn').addEventListener('click', function() {
                    serviceModal.style.display = 'none';
                    document.getElementById('service-type').value = serviceName.toLowerCase().replace(' repair', '');
                    document.getElementById('repair-form').scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            }
        });
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        serviceModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === serviceModal) {
            serviceModal.style.display = 'none';
        }
    });
    
    // Repair form submission
    repairForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('customer-name').value;
        const phone = document.getElementById('customer-phone').value;
        const email = document.getElementById('customer-email').value;
        const serviceType = document.getElementById('service-type').value;
        const deviceDetails = document.getElementById('device-details').value;
        const issueDescription = document.getElementById('issue-description').value;
        const preferredDate = document.getElementById('preferred-date').value;
        
        // In a real application, you would send this data to your server
        console.log('Repair service request:', {
            name,
            phone,
            email,
            serviceType,
            deviceDetails,
            issueDescription,
            preferredDate
        });
        
        // Show success message
        showToast('Your repair service request has been submitted! We will contact you soon to confirm the details.', 'success');
        
        // Reset form
        this.reset();
    });
    
    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const answer = item.querySelector('p');
        answer.style.display = 'none';
        
        item.style.cursor = 'pointer';
        
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
    
    // Animation for service cards
    const animateServiceCards = function() {
        const serviceCards = document.querySelectorAll('.service-card');
        
        serviceCards.forEach((card, index) => {
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
    animateServiceCards();
    
    // Process steps animation
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach((step, index) => {
        step.style.opacity = 0;
        step.style.transform = 'translateY(20px)';
        step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            step.style.opacity = 1;
            step.style.transform = 'translateY(0)';
        }, 200 + (index * 200));
    });
});