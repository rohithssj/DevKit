document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    // Active page indicator
    const links = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    links.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
});

// Utility: Copy to Clipboard
window.copyToClipboard = async (text, buttonElement) => {
    if (!text) return;
    try {
        await navigator.clipboard.writeText(text);
        const originalText = buttonElement.innerText;
        buttonElement.innerText = 'Copied!';
        setTimeout(() => {
            buttonElement.innerText = originalText;
        }, 2000);
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
};
