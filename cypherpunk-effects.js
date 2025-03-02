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