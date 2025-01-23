let lastScrollY = window.scrollY;
const submenu = document.querySelector('.submenu');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down
        submenu.style.top = '-60px'; // Hide submenu
    } else {
        // Scrolling up
        submenu.style.top = '0px'; // Show submenu
    }
    lastScrollY = window.scrollY;
});
window.addEventListener('scroll', () => {
    const menu = document.querySelector('.submenu');
    if (window.scrollY > 50) {
      menu.classList.add('scrolled');
    } else {
      menu.classList.remove('scrolled');
    }
  });