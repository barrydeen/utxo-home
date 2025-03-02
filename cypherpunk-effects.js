// Back to top button functionality
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Podcast gallery navigation
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.podcast-gallery');
    const prevBtn = document.querySelector('.podcast-nav.prev');
    const nextBtn = document.querySelector('.podcast-nav.next');
    
    if (gallery && prevBtn && nextBtn) {
        const itemWidth = gallery.querySelector('.podcast-item').offsetWidth + 20; // width + gap
        
        prevBtn.addEventListener('click', () => {
            gallery.scrollBy({ left: -itemWidth * 2, behavior: 'smooth' });
        });
        
        nextBtn.addEventListener('click', () => {
            gallery.scrollBy({ left: itemWidth * 2, behavior: 'smooth' });
        });
    }
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Variables for mobile menu
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    // Create an overlay element for the mobile menu background
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    body.appendChild(overlay);
    
    // Toggle mobile menu
    function toggleMobileMenu() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('menu-open'); // Prevent background scrolling when menu is open
    }
    
    // Add click event to hamburger
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Close menu when clicking on overlay
    overlay.addEventListener('click', toggleMobileMenu);
    
    // Close menu when clicking on nav links
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });
    
    // Close menu on window resize if screen gets larger
    window.addEventListener('resize', function() {
        if (window.innerWidth > 576 && navLinks.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
}); 