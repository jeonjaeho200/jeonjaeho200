const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');
const skillFills = document.querySelectorAll('.fill');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            if (entry.target.id === 'skills') {
                skillFills.forEach(fill => {
                    fill.style.width = fill.dataset.width;
                });
            }

            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
}, {
    threshold: 0.32
});

sections.forEach(section => observer.observe(section));

window.addEventListener('load', () => {
    document.querySelectorAll('.hero-content').forEach(elem => {
        elem.classList.add('visible');
    });
});