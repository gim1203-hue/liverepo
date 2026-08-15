// Highlight the active nav link based on scroll position
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');
 
const setActive = () => {
  let current = sections[0].id;
  sections.forEach(section => {
    const top = section.offsetTop - 140;
    if (window.scrollY >= top) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
};
 
window.addEventListener('scroll', setActive);
setActive();