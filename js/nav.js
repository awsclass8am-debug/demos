const nav=document.getElementById('nav'),btn=document.getElementById('menu');
btn.onclick=()=>btn.setAttribute('aria-expanded',nav.classList.toggle('open'));
nav.onclick=e=>{if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded',false)}};
