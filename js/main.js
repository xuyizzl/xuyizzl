(function () {
    const navToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const yearEls = document.querySelectorAll('.current-year');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            navLinks.classList.toggle('open');
        });
    }

    document.querySelectorAll('.nav-links a').forEach(function (a) {
        a.addEventListener('click', function () {
            if (navLinks) {
                navLinks.classList.remove('open');
            }
        });
    });

    yearEls.forEach(function (el) {
        el.textContent = String(new Date().getFullYear());
    });

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.16 });

    document.querySelectorAll('.reveal').forEach(function (el) {
        observer.observe(el);
    });

    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = contactForm.querySelector('input[name="email"]');
            const message = contactForm.querySelector('textarea[name="message"]');
            const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
            const okMsg = message.value.trim().length >= 10;

            if (!okEmail) {
                alert('Please provide a valid email address.');
                return;
            }
            if (!okMsg) {
                alert('Please provide at least 10 characters in your message.');
                return;
            }

            alert('Thank you. Your inquiry has been received.');
            contactForm.reset();
        });
    }
})();
