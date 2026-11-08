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
