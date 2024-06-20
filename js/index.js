
// swiper
document.addEventListener("DOMContentLoaded", function () {
    let swiper = new Swiper(".home", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});

// splash screen
document.addEventListener('DOMContentLoaded', function() {
    // Fade in the body when the DOM is fully loaded
    document.body.classList.add('loaded');

    setTimeout(function() {
        const splashScreen = document.getElementById('splash-screen');
        splashScreen.classList.add('fade-out');
        
        splashScreen.addEventListener('transitionend', function(event) {
            if (event.target === splashScreen) {
                splashScreen.style.display = 'none';
                const mainContent = document.getElementById('main-content');
                mainContent.style.display = 'block';

                // Allow reflow to ensure the display change has taken effect
                window.getComputedStyle(mainContent).opacity;

                // Trigger the fade-in effect for the main content
                mainContent.style.opacity = '1';
                document.body.style.overflow = 'auto';
            }
        });
    }, 2000);
});





