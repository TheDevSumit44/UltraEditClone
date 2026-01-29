// Language dropdown functionality
const langBtn = document.getElementById('langBtn');
const langList = document.getElementById('langList');
const selectedLang = document.getElementById('selectedLang');
if (langBtn && langList && selectedLang) {
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const expanded = langBtn.getAttribute('aria-expanded') === 'true';
        langBtn.setAttribute('aria-expanded', !expanded);
        langBtn.parentElement.classList.toggle('open');
        if (!expanded) langList.focus();
    });
    langList.querySelectorAll('li').forEach(li => {
        li.addEventListener('click', (e) => {
            selectedLang.textContent = li.textContent;
            langList.querySelectorAll('li').forEach(l => l.setAttribute('aria-selected', 'false'));
            li.setAttribute('aria-selected', 'true');
            langBtn.setAttribute('aria-expanded', 'false');
            langBtn.parentElement.classList.remove('open');
        });
    });
    document.addEventListener('click', (e) => {
        if (!langBtn.parentElement.contains(e.target)) {
            langBtn.setAttribute('aria-expanded', 'false');
            langBtn.parentElement.classList.remove('open');
        }
    });
}

// Newsletter signup functionality (frontend only)
const newsletterForm = document.querySelector('.new-form');
const newsletterMsg = document.getElementById('newsletterMsg');
if (newsletterForm && newsletterMsg) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        if (emailInput && emailInput.value.trim() !== '') {
            newsletterMsg.textContent = 'Thank you for signing up!';
            newsletterMsg.style.display = 'block';
            emailInput.value = '';
            setTimeout(() => { newsletterMsg.style.display = 'none'; }, 3500);
        } else {
            newsletterMsg.textContent = 'Please enter a valid email address.';
            newsletterMsg.style.display = 'block';
            setTimeout(() => { newsletterMsg.style.display = 'none'; }, 2500);
        }
    });
}
// Scroll to downloads section on download button click
const scrollToDownloadsBtn = document.getElementById('scrollToDownloads');
const downloadsSection = document.getElementById('downloads');
if (scrollToDownloadsBtn && downloadsSection) {
    scrollToDownloadsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        downloadsSection.scrollIntoView({ behavior: 'smooth' });
    });
}
// Scroll to Top Button Functionality
const scrollTopBtn = document.getElementById('scrollTopBtn');

if (scrollTopBtn) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    // Smooth scroll to top on click
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Initially hide button
    scrollTopBtn.style.display = 'none';
}
