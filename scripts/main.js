document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');

    // Header background change on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetAttr = this.getAttribute('href');
            // Check if it's a hash link (starts with #) or references an ID on the current page
            if (targetAttr.startsWith('#') || (targetAttr.includes('#') && targetAttr.split('#')[0] === window.location.pathname.split('/').pop())) {
                e.preventDefault();
                const targetId = targetAttr.includes('#') ? '#' + targetAttr.split('#')[1] : targetAttr;
                const targetSector = document.querySelector(targetId);

                if (targetSector) {
                    window.scrollTo({
                        top: targetSector.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('section > div');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        revealObserver.observe(el);
    });
});
