const m=document.getElementById('modal');document.getElementById('resumeBtn').onclick=()=>m.classList.add('open');document.getElementById('close').onclick=()=>m.classList.remove('open');m.onclick=e=>{if(e.target===m)m.classList.remove('open')};

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    m.classList.remove('open');
  }
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


document.querySelectorAll('a[target="_blank"]').forEach((link) => {
  if (!link.rel) link.rel = 'noopener';
});

document.getElementById('resumeBtn')?.addEventListener('click', () => {
  setTimeout(() => document.getElementById('close')?.focus(), 50);
});


const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

if (mobileMenuBtn && mainNav) {
  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
    mobileMenuBtn.textContent = isOpen ? '✕' : '☰';
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileMenuBtn.textContent = '☰';
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      mainNav.classList.remove('open');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileMenuBtn.textContent = '☰';
    }
  });
}
