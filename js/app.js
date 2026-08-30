let cart=JSON.parse(localStorage.getItem('nexaCart')||'[]'),root=document.documentElement,params=new URLSearchParams(location.search);
function save(){localStorage.setItem('nexaCart',JSON.stringify(cart));count()}function count(){document.querySelectorAll('#cartCount').forEach(x=>x.textContent=cart.reduce((a,b)=>a+b.qty,0))}
function add(id){let x=cart.find(a=>a.id===id);x?x.qty++:cart.push({id,qty:1});save();alert('Added to cart!')}
function detail(id){location.href='product-details.html?id='+id}function game(id){let p=products.find(x=>x.id===id);alert('You haven’t signed in. Please sign in before opening '+p.name+'.')}
function card(p){return `<article class="product-card" onclick="detail(${p.id})"><img src="${p.image}" alt="${p.name}"><div class="info"><p>${p.category}</p><h3>${p.name}</h3><div class="price">$${p.price.toFixed(2)}</div><button onclick="event.stopPropagation();${p.category==='Game'?`game(${p.id})`:`add(${p.id})`}">${p.category==='Game'?'Open Game':'Add to Cart'}</button></div></article>`}
function render(list=products){let e=document.querySelector('#productGrid');if(e)e.innerHTML=list.map(card).join('')}
function cartView(){let e=document.querySelector('#cartItems');if(!e)return;let t=0;e.innerHTML=cart.map(x=>{let p=products.find(a=>a.id===x.id);t+=p.price*x.qty;return `<div class="cart-item">${p.name} × ${x.qty}<span>$${(p.price*x.qty).toFixed(2)} <button onclick="cart=cart.filter(a=>a.id!==${p.id});save();cartView()">✕</button></span></div>`}).join('')||'Your cart is empty.';let q=document.querySelector('#cartTotal');if(q)q.textContent=t.toFixed(2)}
function checkout(){let e=document.querySelector('#checkoutSummary');if(!e)return;let t=0;e.innerHTML=cart.map(x=>{let p=products.find(a=>a.id===x.id);t+=p.price*x.qty;return `<p>${p.name} × ${x.qty}</p>`}).join('')||'No items.';document.querySelector('#checkoutTotal').textContent=t.toFixed(2)}
document.querySelectorAll('#themeToggle').forEach(b=>b.onclick=()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('theme',root.dataset.theme)});root.dataset.theme=localStorage.getItem('theme')||'dark';
let c=localStorage.getItem('accent');if(c)root.style.setProperty('--accent',c);document.querySelectorAll('[data-color]').forEach(b=>b.onclick=()=>{root.style.setProperty('--accent',b.dataset.color);localStorage.setItem('accent',b.dataset.color)});
let h=document.querySelector('#hamburger'),n=document.querySelector('#nav');if(h)h.onclick=()=>n.classList.toggle('open');let pg=location.pathname.split('/').pop()||'index.html';document.querySelectorAll('nav a').forEach(a=>a.getAttribute('href')===pg&&a.classList.add('active'));
let s=document.querySelector('#search');if(s)s.oninput=()=>render(products.filter(p=>p.name.toLowerCase().includes(s.value.toLowerCase())));document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>render(b.dataset.filter==='all'?products:products.filter(p=>p.category===b.dataset.filter)));if(params.get('category'))render(products.filter(p=>p.category===params.get('category')));
let f=document.querySelector('#featuredProducts');if(f)f.innerHTML=products.filter(p=>p.category!=='Game').slice(0,8).map(card).join('');let g=document.querySelector('#gameGrid');if(g)g.innerHTML=products.filter(p=>p.category==='Game').map(card).join('');
let d=document.querySelector('#detailView');if(d){let p=products.find(x=>x.id===Number(params.get('id')));d.innerHTML=p?`<img src="${p.image}" alt="${p.name}"><div><p class="eyebrow">${p.category}</p><h1>${p.name}</h1><div class="price">$${p.price.toFixed(2)}</div><p class="description">${p.description}</p><button class="btn" onclick="${p.category==='Game'?`game(${p.id})`:`add(${p.id})`}">${p.category==='Game'?'Open Game':'Add to Cart'}</button></div>`:'Product not found.'}
let form=document.querySelector('#checkoutForm');if(form)form.onsubmit=e=>{e.preventDefault();alert(cart.length?'Order placed! Demo only: no payment processed.':'Your cart is empty.');if(cart.length){cart=[];save();location.href='index.html'}};count();render();cartView();checkout();
// Neon particle field
const pf=document.querySelector('#particles');if(pf){for(let i=0;i<65;i++){let p=document.createElement('i');p.className='particle';p.style.setProperty('--x',Math.random()*100+'vw');p.style.setProperty('--drift',(Math.random()*40-20)+'vw');p.style.setProperty('--dur',(4+Math.random()*8)+'s');p.style.animationDelay=(-Math.random()*10)+'s';pf.appendChild(p)}}
// Mouse-driven 3D tilt for showcase devices
document.querySelectorAll('.scene').forEach(scene=>{let dev=scene.querySelector('.device');if(!dev)return;scene.addEventListener('pointermove',e=>{let r=scene.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;dev.style.animation='none';dev.style.transition='transform .25s ease';dev.style.transform=`rotateY(${x*42}deg) rotateX(${-y*28}deg) translateZ(25px)`});scene.addEventListener('pointerleave',()=>{dev.style.transition='transform .7s ease';dev.style.transform='';dev.style.animation='deviceFloat 5s ease-in-out infinite'})})

// Scroll-driven 3D transforms
const stage=document.querySelector('#scrollStage'),orb=document.querySelector('#scrollOrb'),dev=document.querySelector('#scrollDevice');
function scroll3D(){if(stage&&orb){let r=stage.getBoundingClientRect(),progress=Math.min(1,Math.max(0,-r.top/(r.height-innerHeight)));orb.style.transform=`rotateX(${progress*360}deg) rotateY(${progress*540}deg) scale(${.75+progress*.65}) translateY(${Math.sin(progress*Math.PI)*-60}px)`;stage.querySelector('.one').style.opacity=Math.max(.15,1-progress*1.3);stage.querySelector('.two').style.opacity=Math.max(.15,progress*1.3)}
if(dev){let r=dev.parentElement.getBoundingClientRect(),p=Math.min(1,Math.max(0,-r.top/(r.height-innerHeight)));dev.style.transform=`rotateY(${p*720-360}deg) rotateX(${Math.sin(p*Math.PI)*35}deg) translateY(${(1-p)*100}px) scale(${.75+p*.35})`}}
addEventListener('scroll',scroll3D,{passive:true});scroll3D();

document.querySelectorAll('img').forEach(img=>{
 img.addEventListener('error',()=>{
  if(img.dataset.fallback)return;
  img.dataset.fallback='1';
  const label=(img.alt||'GAMING BEAST').replace(/[<>&"]/g,'');
  img.src='data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(
   `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><rect width="1200" height="800" fill="#111522"/><rect x="30" y="30" width="1140" height="740" rx="30" fill="none" stroke="#00e5ff" stroke-width="5"/><text x="600" y="380" fill="white" font-size="58" font-family="Arial" font-weight="900" text-anchor="middle">NEXAGAME</text><text x="600" y="440" fill="#00e5ff" font-size="28" font-family="Arial" text-anchor="middle">${label}</text></svg>`
  );
 },{once:true});
});
