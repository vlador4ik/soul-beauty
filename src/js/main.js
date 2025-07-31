const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const mobileMenuPanel = document.getElementById('mobileMenuPanel');
const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');
const menuLinks = document.querySelectorAll('.menu-link');
const menuButtons = document.getElementById('menuButtons');
const menuFooter = document.getElementById('menuFooter');
const scrollToTopButton = document.getElementById('scrollToTop');

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

scrollToTopButton.addEventListener('click', scrollToTop);
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTopButton.classList.remove('hidden');
    } else {
        scrollToTopButton.classList.add('hidden');
    }
});

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

let isMenuOpen = false;

function openMobileMenu() {
    isMenuOpen = true;
    
    document.body.style.overflow = 'hidden';
    
    mobileMenuOverlay.classList.remove('opacity-0', 'invisible');
    mobileMenuOverlay.classList.add('opacity-100', 'visible');
    
    mobileMenuBackdrop.classList.remove('bg-opacity-0');
    mobileMenuBackdrop.classList.add('bg-opacity-50', 'backdrop-blur-sm');
    
    mobileMenuPanel.classList.remove('translate-x-full');
    mobileMenuPanel.classList.add('translate-x-0');
    
    line1.classList.add('rotate-45', 'translate-y-1.5');
    line2.classList.add('opacity-0');
    line3.classList.add('-rotate-45', '-translate-y-1.5');
    
    setTimeout(() => {
        menuLinks.forEach((link, index) => {
            setTimeout(() => {
                link.classList.remove('translate-y-4', 'opacity-0');
                link.classList.add('translate-y-0', 'opacity-100');
            }, index * 100);
        });
        
        setTimeout(() => {
            menuButtons.classList.remove('translate-y-8', 'opacity-0');
            menuButtons.classList.add('translate-y-0', 'opacity-100');
        }, 600);
        
        setTimeout(() => {
            menuFooter.classList.remove('translate-y-8', 'opacity-0');
            menuFooter.classList.add('translate-y-0', 'opacity-100');
        }, 700);
    }, 100);
}

function closeMobileMenu() {
    isMenuOpen = false;
    
    document.body.style.overflow = 'unset';
    
    mobileMenuOverlay.classList.remove('opacity-100', 'visible');
    mobileMenuOverlay.classList.add('opacity-0', 'invisible');
    
    mobileMenuBackdrop.classList.remove('bg-opacity-50', 'backdrop-blur-sm');
    mobileMenuBackdrop.classList.add('bg-opacity-0');
    
    mobileMenuPanel.classList.remove('translate-x-0');
    mobileMenuPanel.classList.add('translate-x-full');
    
    line1.classList.remove('rotate-45', 'translate-y-1.5');
    line2.classList.remove('opacity-0');
    line3.classList.remove('-rotate-45', '-translate-y-1.5');
    
    menuLinks.forEach(link => {
        link.classList.remove('translate-y-0', 'opacity-100');
        link.classList.add('translate-y-4', 'opacity-0');
    });
    
    menuButtons.classList.remove('translate-y-0', 'opacity-100');
    menuButtons.classList.add('translate-y-8', 'opacity-0');
    
    menuFooter.classList.remove('translate-y-0', 'opacity-100');
    menuFooter.classList.add('translate-y-8', 'opacity-0');
}

mobileMenuToggle.addEventListener('click', () => {
    if (isMenuOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
});
mobileMenuBackdrop.addEventListener('click', closeMobileMenu);

menuLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    if(anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});

// Update the current year in the footer
const currentYear = new Date().getFullYear();
document.querySelector('.current-year').textContent = currentYear;