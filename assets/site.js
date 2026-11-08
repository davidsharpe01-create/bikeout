document.querySelectorAll('.wp-block-accordion-heading__toggle').forEach((button)=>{
 const item=button.closest('.wp-block-accordion-item');
 const panel=item.querySelector('.wp-block-accordion-panel');
 if(!panel)return;
 button.setAttribute('aria-expanded','false');
 button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));panel.hidden=!open;item.classList.toggle('is-open',open);});
});
document.querySelectorAll('.navbar-toggle').forEach(button=>button.addEventListener('click',()=>{
 const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));document.body.classList.toggle('is-menu-sidebar',open);
 const menu=document.querySelector('.header-menu-sidebar');if(menu){menu.classList.toggle('is-active',open);menu.style.visibility=open?'visible':'';}
}));
document.querySelectorAll('.scroll-to-top').forEach(button=>button.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'})));

// Restore the original Otter slideInUp sections using their saved animation classes.
const slideSections = document.querySelectorAll('main .slideInUp');
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
 const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
   if (!entry.isIntersecting) return;
   entry.target.classList.remove('slide-pending');
   entry.target.classList.add('animated');
   entry.target.addEventListener('animationend', () => entry.target.classList.remove('animated'), {once:true});
   observer.unobserve(entry.target);
  });
 }, {rootMargin:'0px 0px -5% 0px', threshold:0});
 slideSections.forEach(section => {
  section.classList.add('slide-pending');
  observer.observe(section);
 });
}
