document.addEventListener('DOMContentLoaded', function() {
    // Animate stats counter
    const animateStats = function() {
        const statElements = document.querySelectorAll('.stat-number');
        const speed = 200; // Lower number = faster animation
        
        statElements.forEach(statElement => {
            const target = parseInt(statElement.getAttribute('data-count'));
            let count = 0;
            
            const updateCount = () => {
                const increment = Math.ceil(target / speed);
                
                if (count < target) {
                    count += increment;
                    if (count > target) count = target;
                    statElement.textContent = count;
                    setTimeout(updateCount, 1);
                } else {
                    statElement.textContent = target;
                }
            };
            
            updateCount();
        });
    };
    
    // Check if stats section is in view
    const isStatsInView = function() {
        const statsSection = document.querySelector('.stats-section');
        if (!statsSection) return false;
        
        const rect = statsSection.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    };
    
    // Animate stats when section comes into view
    let statsAnimated = false;
    
    const checkStatsAnimation = function() {
        if (!statsAnimated && isStatsInView()) {
            animateStats();
            statsAnimated = true;
        }
    };
    
    // Check on load and scroll
    window.addEventListener('load', checkStatsAnimation);
    window.addEventListener('scroll', checkStatsAnimation);
    
    // Team member hover effect
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        member.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Mission card animation
    const missionCards = document.querySelectorAll('.mission-card');
    missionCards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }, 200 + (index * 200));
    });
    
    // Reason card animation
    const reasonCards = document.querySelectorAll('.reason-card');
    reasonCards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = 'translateX(-20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = 'translateX(0)';
        }, 100 + (index * 100));
    });
    
    // Testimonial card animation
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }, 200 + (index * 200));
    });
    
    // Map placeholder interaction
    const mapPlaceholder = document.querySelector('.map-placeholder');
    if (mapPlaceholder) {
        mapPlaceholder.addEventListener('click', function() {
            showToast('Map would open in a new window with directions to our store', 'info');
        });
    }
    
    // Smooth scrolling for navigation
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
            }
        });
    });
    
    // Story section animation
    const storyContent = document.querySelector('.story-content');
    if (storyContent) {
        const storyText = storyContent.querySelector('.story-text');
        const storyImage = storyContent.querySelector('.story-image');
        
        storyText.style.opacity = 0;
        storyText.style.transform = 'translateX(-20px)';
        storyText.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        storyImage.style.opacity = 0;
        storyImage.style.transform = 'translateX(20px)';
        storyImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            storyText.style.opacity = 1;
            storyText.style.transform = 'translateX(0)';
            
            storyImage.style.opacity = 1;
            storyImage.style.transform = 'translateX(0)';
        }, 300);
    }
    
    // Community section animation
    const communityContent = document.querySelector('.community-content');
    if (communityContent) {
        const communityText = communityContent.querySelector('.community-text');
        const communityImage = communityContent.querySelector('.community-image');
        
        communityText.style.opacity = 0;
        communityText.style.transform = 'translateX(-20px)';
        communityText.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        communityImage.style.opacity = 0;
        communityImage.style.transform = 'translateX(20px)';
        communityImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            communityText.style.opacity = 1;
            communityText.style.transform = 'translateX(0)';
            
            communityImage.style.opacity = 1;
            communityImage.style.transform = 'translateX(0)';
        }, 500);
    }
});