const menu=document.getElementById('menu');const nav=document.getElementById('nav');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false');}));
const sections=[...document.querySelectorAll('main section[id]')];
const links=[...document.querySelectorAll('.main-nav a')];
const mark=()=>{let id='home';for(const s of sections){if(window.scrollY>=s.offsetTop-140)id=s.id;}links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+id));};
window.addEventListener('scroll',mark,{passive:true});mark();
document.getElementById('quote-form')?.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget);const lines=[
  'New quote request from FDT Solutions website','',
  'Name: '+f.get('name'),
  'Email: '+f.get('email'),
  'Phone: '+(f.get('phone')||'Not provided'),
  'Service: '+f.get('service'),'',
  'Project details:',f.get('message')
];const subject='Quote request - '+f.get('service')+' - '+f.get('name');window.location.href='mailto:info@fdt-digital.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(lines.join('\n'));});
window.googleTranslateElementInit=function(){
  if(window.google&&google.translate){
    new google.translate.TranslateElement({pageLanguage:'en',autoDisplay:false},'google_translate_element');
  }
};
