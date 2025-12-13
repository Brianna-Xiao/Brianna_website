// Portfolio Filtering
document.addEventListener("DOMContentLoaded", () => {
    const categoryButtons = document.querySelectorAll(".category-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    categoryButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Remove "active" class from all buttons
            categoryButtons.forEach(button => button.classList.remove("active"));
            // Add "active" class to the clicked button
            btn.classList.add("active");

            const selectedCategory = btn.getAttribute("data-category");

            portfolioItems.forEach(item => {
                const itemCategory = item.getAttribute("data-category");

                if (itemCategory === selectedCategory) {
                    item.classList.add("active");
                    item.style.display = "block";
                } else {
                    item.classList.remove("active");
                    item.style.display = "none";
                }
            });
        });
    });

    // Mobile Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formProps = Object.fromEntries(formData);
        
        // Here you would typically send the form data to a server
        // For now, we'll just log it and show a success message
        console.log('Form submitted:', formProps);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Add animation to elements when they come into view
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .nav-active {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 8vh;
        right: 0;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        width: 50%;
        padding: 2rem;
        transform: translateX(0%);
        transition: transform 0.5s ease-in;
    }

    .nav-active li {
        opacity: 0;
    }

    @keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0px);
        }
    }

    .toggle .line1 {
        transform: rotate(-45deg) translate(-5px, 6px);
    }

    .toggle .line2 {
        opacity: 0;
    }

    .toggle .line3 {
        transform: rotate(45deg) translate(-5px, -6px);
    }

    section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    section.animate {
        opacity: 1;
        transform: translateY(0);
    }
`;

document.head.appendChild(style);

// Example filtering code
const category = this.getAttribute('data-category');
portfolioItems.forEach(item => {
    if (category === 'all' || item.getAttribute('data-category') === category) {
        item.style.display = 'block';
    } else {
        item.style.display = 'none';
    }
}); 