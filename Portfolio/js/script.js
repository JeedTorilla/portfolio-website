// Animate skill bars on page load
window.addEventListener('load', () => {
    document.querySelectorAll('.skill-fill').forEach(bar => {
        const targetWidth = bar.getAttribute('style').match(/\d+/)[0];
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = targetWidth + '%';
        }, 300);
    });
});

// Smooth scroll for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        if (this.hash) {
            e.preventDefault();
            const target = document.querySelector(this.hash);

            // Adjust for fixed navbar height
            const offset = 80;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Hide loading screen after page load
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hide');
    }, 1000); 
});

// Highlight active section link on scroll
const sections = document.querySelectorAll('section, header');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Toggle mobile menu
const menuIcon = document.getElementById('menu-icon');
const navLinksContainer = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinksContainer.classList.toggle('show');
});

// Close menu when link is clicked (mobile)
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('show');
    });
});
