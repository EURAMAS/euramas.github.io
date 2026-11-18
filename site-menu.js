const menuToggle = document.querySelector('.menu-toggle');

function setMenuOpen(open) {
  menuToggle.setAttribute('aria-expanded', String(open));
}

menuToggle.addEventListener('click', () => {
  setMenuOpen(menuToggle.getAttribute('aria-expanded') === 'false');
});

menuToggle.closest('header').addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle.offsetWidth && menuToggle.getAttribute('aria-expanded') === 'true') {
    event.preventDefault();
    setMenuOpen(false);
    menuToggle.focus();
  }
});

menuToggle.hidden = false;
