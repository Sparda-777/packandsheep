document.addEventListener('DOMContentLoaded',()=>{
  const navin=document.querySelector('.navin');
  const links=document.querySelector('.links');
  if(!navin||!links)return;
  const button=document.createElement('button');
  button.className='mobile-menu-toggle';
  button.type='button';
  button.setAttribute('aria-label','Ouvrir le menu');
  button.setAttribute('aria-expanded','false');
  button.innerHTML='<span></span>';
  navin.appendChild(button);
  const close=()=>{links.classList.remove('mobile-open');button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','Ouvrir le menu')};
  button.addEventListener('click',()=>{
    const open=links.classList.toggle('mobile-open');
    button.setAttribute('aria-expanded',String(open));
    button.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu');
  });
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
  document.addEventListener('click',e=>{if(!navin.contains(e.target))close()});
  window.addEventListener('resize',()=>{if(window.innerWidth>820)close()});
});
