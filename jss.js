document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            alert('Form submitted successfully!');
            form.submit();
        }
    });

    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('All fields are required.');
            return false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        return true;
    }

    const loadMoreButton = document.createElement('button');
    loadMoreButton.textContent = 'Load More Projects';
    loadMoreButton.classList.add('btn', 'load-more');
    document.querySelector('.portfolio .container').appendChild(loadMoreButton);

    loadMoreButton.addEventListener('click', function() {
        const portfolioGrid = document.querySelector('.portfolio-grid');

        const newProject = document.createElement('div');
        newProject.classList.add('portfolio-item');
        newProject.innerHTML = `
            <img src="newProject.jpg" alt="New Project">
            <h3>New Project</h3>
            <p>A newly added project showcasing additional work.</p>
        `;

        portfolioGrid.appendChild(newProject);
        this.remove(); 
    });
});
