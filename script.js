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

// Search the static project cards and resource directory; works without a backend.
const projectSearch=document.getElementById('projectSearch');
projectSearch?.addEventListener('input',()=>{
 const query=projectSearch.value.trim().toLowerCase();let count=0;
 document.querySelectorAll('.showcase-card').forEach(card=>{card.hidden=!card.dataset.search.includes(query);if(!card.hidden)count++});
 document.getElementById('projectCount').textContent=`${count} projects`;
 document.getElementById('projectEmpty').hidden=count!==0;
});
const resourceSearch=document.getElementById('resourceSearch');
const resourceCategory=document.getElementById('resourceCategory');
function filterResources(){
 const query=resourceSearch.value.trim().toLowerCase(),category=resourceCategory.value;let count=0;
 document.querySelectorAll('.resource-group').forEach(group=>{
  let visible=0;
  group.querySelectorAll('.resource-card').forEach(card=>{card.hidden=!!(category&&card.dataset.category!==category)||!card.dataset.search.includes(query);if(!card.hidden)visible++});
  group.hidden=visible===0;count+=visible;
  if(query||category)group.open=visible>0;
  else group.open=false;
 });
 document.getElementById('resourceCount').textContent=`${count} resources`;
 document.getElementById('resourceEmpty').hidden=count!==0;
}
resourceSearch?.addEventListener('input',filterResources);
resourceCategory?.addEventListener('change',filterResources);
