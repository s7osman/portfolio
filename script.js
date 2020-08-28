const navPopOut = () => {
    const hamBurger = document.querySelector('.hamBurger');
    const nav = document.querySelector('.navLinks')
    const navLinkz = document.querySelectorAll('.navLinks li')

    // Toggle nav bar
    hamBurger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    
        // Animate the Links to fade in one Nav Bar slides over
        navLinkz.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4}s`
            }
        });
    });
};

navPopOut();