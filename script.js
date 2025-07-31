// Portfolio filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all category buttons and portfolio items
    const categoryButtons = document.querySelectorAll('.portfolio-categories button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // Add click event listeners to category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get the category from the button's data attribute
            const category = this.getAttribute('data-category');
            
            // Filter portfolio items
            filterPortfolio(category);
        });
    });

    // Function to filter portfolio items
    function filterPortfolio(category) {
        portfolioItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            
            if (category === 'all' || itemCategory === category) {
                item.style.display = 'block';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            } else {
                item.style.display = 'none';
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
            }
        });
    }

    // Mobile navigation toggle
    const burgerIcon = document.querySelector('.burger-icon');
    const navLinks = document.querySelector('.nav-links');

    if (burgerIcon && navLinks) {
        burgerIcon.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            burgerIcon.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    const navLinksSmooth = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinksSmooth.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    burgerIcon.classList.remove('active');
                }
            }
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Log form data (replace with actual form submission logic)
            console.log('Form submitted:', { name, email, message });
            
            // Show success message
            alert('Thank you for your message! I\'ll get back to you soon.');
            
            // Reset form
            this.reset();
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Resume download functionality
    const downloadResumeBtn = document.querySelector('.download-resume');
    if (downloadResumeBtn) {
        downloadResumeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const resumeLink = this.getAttribute('href');
            if (resumeLink) {
                window.open(resumeLink, '_blank');
            }
        });
    }

    // Preview resume functionality
    const previewResumeBtn = document.querySelector('.preview-resume');
    if (previewResumeBtn) {
        previewResumeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const resumeLink = this.getAttribute('href');
            if (resumeLink) {
                window.open(resumeLink, '_blank');
            }
        });
    }
}); 