document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('#about');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add('scroll-visible');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(aboutSection);

    // Manipulação do menu lateral
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenuButton = document.querySelector('.close-menu');
    const body = document.querySelector('body');

    function toggleMenu() {
        body.classList.toggle('menu-open');
    }

    menuToggle.addEventListener('click', toggleMenu);
    closeMenuButton.addEventListener('click', toggleMenu);
});
