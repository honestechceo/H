const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.mobile-menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.style.display = expanded ? 'none' : 'block';
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      menu.style.display = 'none';
    });
  });
}
